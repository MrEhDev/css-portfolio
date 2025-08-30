document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll(".project-card").forEach(card => {
    const overlay = card.querySelector(".overlay");

    card.addEventListener("mouseenter", e => {
      const rect = card.getBoundingClientRect();
      const x = ((e.clientX - rect.left) / rect.width) * 100;
      const y = ((e.clientY - rect.top) / rect.height) * 100;

      overlay.style.setProperty("--x", `${x}%`);
      overlay.style.setProperty("--y", `${y}%`);
      overlay.style.opacity = 1;
      overlay.style.pointerEvents = "auto";
    });

    card.addEventListener("mouseleave", () => {
      overlay.style.opacity = 0;
      overlay.style.pointerEvents = "none";
    });
  });
});
