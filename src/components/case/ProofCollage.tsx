import { motion } from "framer-motion";

const shots = [
  { src: "/DAO/Screenshot 2026-06-07 211748.png", label: "Erthaloka" },
  { src: "/cravent/Screenshot 2026-06-07 231610.png", label: "Cravent" },
  { src: "/arteco/Screenshot 2026-06-07 224102.png", label: "Arteco" },
];

// A tasteful stacked collage of real, shipped product screenshots — used to
// fill hero space with proof instead of stock photography or empty gradient.
export function ProofCollage({ className = "" }: { className?: string }) {
  return (
    <div className={`relative hidden lg:block ${className}`} aria-hidden>
      <motion.div
        initial={{ opacity: 0, y: 20, rotate: -6 }}
        animate={{ opacity: 1, y: 0, rotate: -6 }}
        transition={{ duration: 0.6, delay: 0.1 }}
        className="absolute left-0 top-8 w-64 rounded-xl overflow-hidden border border-border bg-surface-card shadow-[0_20px_60px_-20px_oklch(0_0_0_/_0.8)]"
      >
        <img src={shots[0].src} alt={shots[0].label} className="w-full block" loading="lazy" />
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 20, rotate: 3 }}
        animate={{ opacity: 1, y: 0, rotate: 3 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="absolute left-40 top-32 w-64 rounded-xl overflow-hidden border border-border bg-surface-card shadow-[0_20px_60px_-20px_oklch(0_0_0_/_0.8)]"
      >
        <img src={shots[1].src} alt={shots[1].label} className="w-full block" loading="lazy" />
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 20, rotate: -2 }}
        animate={{ opacity: 1, y: 0, rotate: -2 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className="absolute left-16 top-64 w-64 rounded-xl overflow-hidden border border-border bg-surface-card shadow-[0_20px_60px_-20px_oklch(0_0_0_/_0.8)]"
      >
        <img src={shots[2].src} alt={shots[2].label} className="w-full block" loading="lazy" />
      </motion.div>
    </div>
  );
}
