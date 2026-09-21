document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll(".sunflower").forEach((flower, i) => {
    flower.animate(
      [
        { opacity: 0, transform: "scale(0) rotate(-45deg)" },
        { opacity: 1, transform: "scale(1) rotate(0deg)" }
      ],
      { 
        duration: 800, 
        delay: 400 + i * 150, 
        fill: "both", 
        easing: "cubic-bezier(0.175, 0.885, 0.32, 1.275)" // Efecto rebote tierno
      }
    );
  });
});