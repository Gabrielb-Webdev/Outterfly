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
}

generateSpaceLayer("2px", ".space-1", 250, "25s");
generateSpaceLayer("3px", ".space-2", 100, "20s");
generateSpaceLayer("6px", ".space-3", 25, "15s");

let sections = document.querySelectorAll('section');

window.onscroll = () => {
  sections.forEach(sec => {
    let top = window.scrollY;
    let offset = sec.offsetTop;
    let height = sec.offsetHeight;

    if (top >= offset && top < offset + height) {
      sec.classList.add('show-animate');
    }
    else {
      sec.classList.remove('show-animate');
    }
  })
}