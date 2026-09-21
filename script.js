document.addEventListener("DOMContentLoaded", () => {
  // Pequeño efecto de entrada: los girasoles aparecen uno tras otro.
  document.querySelectorAll(".sunflower").forEach((flower, i) => {
    flower.animate(
      [
        { opacity: 0, transform: "scale(.2) rotate(-25deg)" },
        { opacity: 1, transform: "scale(1) rotate(0)" }
      ],
      { duration: 700, delay: 500 + i * 130, fill: "both", easing: "cubic-bezier(.2,.8,.2,1)" }
    );
  });
});
