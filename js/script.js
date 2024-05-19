let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('.navigation a');
let header = document.querySelector('header');

window.onscroll = () => {
  let top = window.scrollY;

  sections.forEach(sec => {
    let offset = sec.offsetTop - 200; // Ajuste de compensación según sea necesario
    let height = sec.offsetHeight;

    if (top >= offset && top < offset + height) {
      sec.classList.add('show-animate');

      // Obtener el índice de la sección actual
      let secIndex = [...sections].indexOf(sec);

      // Actualizar los enlaces de navegación activos
      navLinks.forEach((link, index) => {
        if (index === secIndex) {
          link.classList.add('active');
        } else {
          link.classList.remove('active');
        }
      });
    } else {
      sec.classList.remove('show-animate');
    }
  });

  // Añadir o quitar la clase 'scrolled' al header
  if (top > 50) {
    header.classList.add('scrolled');
  } else {
    header.classList.remove('scrolled');
  }
};

const COLORS = ["#fff2", "#fff4", "#fff7", "#fffc"];

const generateSpaceLayer = (size, selector, totalStars, duration) => {
  const layer = [];
  for (let i = 0; i < totalStars; i++) {
    const color = COLORS[~~(Math.random() * COLORS.length)];
    const x = Math.floor(Math.random() * 100);
    const y = Math.floor(Math.random() * 100);
    layer.push(`${x}vw ${y}vh 0 ${color}, ${x}vw ${y + 100}vh 0 ${color}`);
  }
  const container = document.querySelector(selector);
  container.style.setProperty("--size", size);
  container.style.setProperty("--duration", duration);
  container.style.setProperty("--space-layer", layer.join(","));
};

generateSpaceLayer("2px", ".space-1", 250, "25s");
generateSpaceLayer("3px", ".space-2", 100, "20s");
generateSpaceLayer("6px", ".space-3", 25, "15s");
