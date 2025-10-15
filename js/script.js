// Smooth scroll
document.querySelectorAll('a[href^="#"]').forEach((link) => {
  link.addEventListener("click", function (e) {
    e.preventDefault();
    const seccion = document.querySelector(this.getAttribute("href"));
    if (seccion) {
      seccion.scrollIntoView({ behavior: "smooth" });
    }
  });
});

// Toggle modo oscuro
const themeToggle = document.getElementById("theme-toggle");
const body = document.body;

// Cargar preferencia guardada
const savedTheme = localStorage.getItem("theme");
if (savedTheme === "dark") {
  body.classList.add("dark-mode");
}

// Toggle al hacer click
themeToggle.addEventListener("click", () => {
  body.classList.toggle("dark-mode");

  // Guardar preferencia
  if (body.classList.contains("dark-mode")) {
    localStorage.setItem("theme", "dark");
  } else {
    localStorage.setItem("theme", "light");
  }
});
