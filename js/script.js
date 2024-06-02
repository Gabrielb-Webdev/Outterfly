document.addEventListener("DOMContentLoaded", function() {
  const logoGreen = document.getElementById('logo-green');
  const logoRed = document.querySelector('.line-red');
  const redCircle = document.querySelector('.red');

  // Escuchar el evento 'animationend' en el logo verde
  logoGreen.addEventListener('animationend', () => {
      // Cuando la animación del logo verde termine, agregar la clase para mostrar el círculo rojo
      logoRed.classList.add('show-red');
  });

  // Escuchar el evento 'animationend' en el logo rojo
  logoRed.addEventListener('animationend', () => {
      // Cuando la animación del logo rojo termine, mostrar el círculo rojo y agregar su clase de animación
      redCircle.classList.remove('hidden');
      redCircle.classList.add('red');
  });

  // Agregar la clase de animación al logo verde
  logoGreen.classList.add('line-green');
});

document.addEventListener("DOMContentLoaded", function() {
  const greenBall = document.querySelector('.green');
  greenBall.classList.add('green');
});

document.addEventListener('DOMContentLoaded', () => {
  const navLinks = document.querySelectorAll('.navigation a');

  navLinks.forEach(link => {
      link.addEventListener('click', (event) => {
          event.preventDefault();
          const sectionId = link.getAttribute('data-section');
          const section = document.getElementById(sectionId);
          section.scrollIntoView({ behavior: 'smooth' });
          
          // Actualizar la clase activa
          navLinks.forEach(navLink => navLink.classList.remove('active'));
          link.classList.add('active');
      });
  });
});

const button = document.querySelector('.button');

button.addEventListener('click', function() {
    button.classList.remove('done');
    button.classList.add('download');
    setTimeout(function() {
        button.classList.remove('download');
        button.classList.add('done');
    }, 3000);
});

let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('.navigation a');
let header = document.querySelector('header');

window.onscroll = () => {
  let top = window.scrollY;

  sections.forEach(sec => {
    let offset = sec.offsetTop - 500; // Ajuste de compensación según sea necesario
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

document.addEventListener('DOMContentLoaded', () => {
  // Función para crear animaciones de formación
  function createFormingAnimation(el, delay = 0) {
      return new mojs.Html({
          el: el,
          opacity: { 0: 1 }, // Opacidad de 0 a 1
          scale: { 0: 1 }, // Escala de 0 a 1
          duration: 1000, // Duración de la animación en ms
          delay: delay, // Retraso antes de que comience la animación
          easing: 'quad.out' // Efecto de aceleración cuadrática
      }).play();
  }

  // Aplicar la animación a cada imagen SVG
  createFormingAnimation('#logo-green');
  createFormingAnimation('.green', 200);
  createFormingAnimation('.animate:nth-child(4)', 600); // U
  createFormingAnimation('.animate:nth-child(5)', 800); // T ABAJO
  createFormingAnimation('.animate:nth-child(6)', 1000); // T ARRIBA
  createFormingAnimation('.animate:nth-child(7)', 1200); // E
  createFormingAnimation('.animate:nth-child(8)', 1400); // R
  createFormingAnimation('.animate:nth-child(9)', 1600); // F
  createFormingAnimation('.animate:nth-child(10)', 1800); // L
  createFormingAnimation('.animate:nth-child(11)', 2000); // Y
  createFormingAnimation('.red', 2200);
});

document.addEventListener('DOMContentLoaded', function() {
    const navLinks = document.querySelectorAll('nav a');
    const sections = document.querySelectorAll('section');
    const menuToggle = document.querySelector('.menu-toggle');
    const navigation = document.querySelector('nav.navigation');
    const overlay = document.querySelector('.overlay');

    navLinks.forEach(link => {
        link.addEventListener('click', function(event) {
            event.preventDefault();
            const targetSection = document.getElementById(this.getAttribute('data-section'));

            sections.forEach(section => section.classList.remove('show-animate'));
            targetSection.classList.add('show-animate');

            // Cerrar el menú después de hacer clic en un enlace
            if (window.innerWidth <= 950) {
                navigation.classList.remove('open');
                overlay.classList.remove('show');
            }
        });
    });

    menuToggle.addEventListener('click', function() {
        if (navigation.classList.contains('open')) {
            navigation.classList.remove('open');
            overlay.classList.remove('show');
        } else {
            navigation.classList.add('open');
            overlay.classList.add('show');
        }
    });

    overlay.addEventListener('click', function() {
        navigation.classList.remove('open');
        overlay.classList.remove('show');
    });

    // Ajustar el menú cuando se redimensiona la ventana
    window.addEventListener('resize', function() {
        if (window.innerWidth > 950) {
            navigation.classList.remove('open');
            overlay.classList.remove('show');
        }
    });
});

document.addEventListener('DOMContentLoaded', () => {
  const cards = document.querySelectorAll('.custom-card');
  const images = document.querySelectorAll('.image-container img');
  const modalCloses = document.querySelectorAll('.modal-close');
  const html = document.documentElement;

  const openModal = (target) => {
      const modal = document.getElementById(target);

      // Animate the modal
      const modalContent = modal.querySelector('.modal-content');
      new mojs.Html({
          el: modalContent,
          angle: { 0: 360 },
          opacity: { 0: 1 },
          scale: { 0.5: 1 },
          duration: 500,
          easing: 'cubic.out'
      }).play();

      modal.classList.add('is-active');
      html.style.overflow = 'hidden';
  };

  cards.forEach(card => {
      card.addEventListener('click', () => {
          const target = card.getAttribute('data-target');
          openModal(target);
      });
  });

  images.forEach(image => {
      image.addEventListener('click', () => {
          const target = image.getAttribute('data-target');
          openModal(target);
      });
  });

  modalCloses.forEach(close => {
      close.addEventListener('click', () => {
          const modal = close.closest('.modal');
          modal.classList.remove('is-active');
          html.style.overflow = '';
      });
  });
});


