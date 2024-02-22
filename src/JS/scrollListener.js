const aboutNav = document.getElementById('nav-about');
const projectsNav = document.getElementById('nav-projects');
const careerNav = document.getElementById('nav-career');
const aboutSection = document.getElementById('about');
const projectsSection = document.getElementById('projects');
const careerSection = document.getElementById('career');

window.addEventListener('scroll', () => {
  // Get the current scrolling position
  const scrollPosition = window.scrollY;

  // Calculate the positins of each sections
  const aboutPosition = aboutSection.offsetTop;
  const projectsPosition = projectsSection.offsetTop;
  const careerPosition = careerSection.offsetTop;

  // Reseting class
  [aboutNav, projectsNav, careerNav].forEach((nav) => {
    nav.classList.remove('text-cyan-400', 'font-bold');
  });

  // Set class
  if (scrollPosition >= careerPosition - 150) {
    careerNav.classList.add('text-cyan-400', 'font-bold');
  } else if (scrollPosition >= projectsPosition - 150) {
    projectsNav.classList.add('text-cyan-400', 'font-bold');
  } else {
    aboutNav.classList.add('text-cyan-400', 'font-bold');
  }
});
