// BHANIXS v2 — shared behaviour: nav scroll state, mobile drawer, reveal animations.
// No frameworks. IntersectionObserver + CSS transitions only, per brief Section F1/F2.

(function () {
  "use strict";

  // ---- Nav scroll state ----
  var nav = document.querySelector(".nav");
  if (nav) {
    var onScroll = function () {
      if (window.scrollY > 80) {
        nav.classList.add("scrolled");
      } else {
        nav.classList.remove("scrolled");
      }
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
  }

  // ---- Mobile drawer ----
  var hamburger = document.querySelector(".nav-hamburger");
  var drawer = document.querySelector(".mobile-drawer");
  var drawerClose = document.querySelector(".mobile-drawer-close");

  function openDrawer() {
    if (!drawer) return;
    drawer.classList.add("open");
    document.body.classList.add("drawer-open");
  }
  function closeDrawer() {
    if (!drawer) return;
    drawer.classList.remove("open");
    document.body.classList.remove("drawer-open");
  }

  if (hamburger) hamburger.addEventListener("click", openDrawer);
  if (drawerClose) drawerClose.addEventListener("click", closeDrawer);
  if (drawer) {
    drawer.querySelectorAll("a").forEach(function (a) {
      a.addEventListener("click", closeDrawer);
    });
  }

  // ---- IntersectionObserver reveal ----
  var revealTargets = document.querySelectorAll(
    ".reveal, .reveal-stagger, .trust-strip, .process-connector"
  );

  if ("IntersectionObserver" in window && revealTargets.length) {
    var io = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            io.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15, rootMargin: "0px 0px -60px 0px" }
    );
    revealTargets.forEach(function (el) {
      io.observe(el);
    });
  } else {
    // No IO support — show everything immediately.
    revealTargets.forEach(function (el) {
      el.classList.add("visible");
    });
  }
})();
