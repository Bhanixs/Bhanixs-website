// One-off local connectivity/auth test for Titan SMTP. Not used at runtime —
// reads credentials from .dev.vars (gitignored) so nothing is hardcoded here.
const fs = require("fs");
const path = require("path");
const tls = require("tls");

const devVarsPath = path.join(__dirname, "..", ".dev.vars");
const env = {};
for (const line of fs.readFileSync(devVarsPath, "utf8").split("\n")) {
  const trimmed = line.trim();
  if (!trimmed || trimmed.startsWith("#")) continue;
  const idx = trimmed.indexOf("=");
  if (idx === -1) continue;
  env[trimmed.slice(0, idx)] = trimmed.slice(idx + 1);
}

const HOST = env.SMTP_HOST;
const PORT = Number(env.SMTP_PORT);
const USER = env.SMTP_USER;
const PASS = env.SMTP_PASS;
const TO = env.CONTACT_TO_EMAIL;

function b64(s) {
  return Buffer.from(s, "utf8").toString("base64");
}

const socket = tls.connect(PORT, HOST, { servername: HOST }, () => {
  console.log(`[connected] TLS authorized: ${socket.authorized}`);
});

let step = 0;
let buffer = "";

const steps = [
  () => `EHLO bhanixs.com\r\n`,
  () => `AUTH LOGIN\r\n`,
  () => `${b64(USER)}\r\n`,
  () => `${b64(PASS)}\r\n`,
  () => `MAIL FROM:<${USER}>\r\n`,
  () => `RCPT TO:<${TO}>\r\n`,
  () => `DATA\r\n`,
  () =>
    `Subject: BHANIXS contact form — SMTP test\r\nFrom: ${USER}\r\nTo: ${TO}\r\n\r\nThis is a one-off connectivity test from the local dev environment.\r\n.\r\n`,
  () => `QUIT\r\n`,
];

socket.setTimeout(10000);
socket.on("timeout", () => {
  console.log("[timeout]");
  socket.destroy();
});
socket.on("error", (err) => console.log("[error]", err.message));

socket.on("data", (chunk) => {
  buffer += chunk.toString();
  const lines = buffer.split("\r\n").filter(Boolean);
  const last = lines[lines.length - 1] || "";
  console.log("SERVER:", last);

  // Wait until we see a line whose 4th char is a space (final line of a multi-line reply)
  if (last[3] !== " ") return;
  buffer = "";

  const code = last.slice(0, 3);
  if (code.startsWith("4") || code.startsWith("5")) {
    console.log(`[FAILED at step ${step}] code ${code}`);
    socket.end();
    return;
  }

  if (step < steps.length) {
    const line = steps[step]();
    console.log("CLIENT:", line.replace(PASS, "***").trim());
    socket.write(line);
    step++;
  } else {
    socket.end();
  }
});
