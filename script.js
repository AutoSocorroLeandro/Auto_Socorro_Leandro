const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
      }
    });
  },
  { threshold: 0.16 }
);

document.querySelectorAll(".reveal").forEach((element, index) => {
  element.style.transitionDelay = `${Math.min(index * 90, 360)}ms`;
  observer.observe(element);
});

const statusPill = document.querySelector(".status-pill");

if (statusPill) {
  statusPill.classList.add("blink-on");

  setInterval(() => {
    statusPill.classList.toggle("blink-on");
  }, 420);
}
