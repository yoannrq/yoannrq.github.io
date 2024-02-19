const navAPropos = document.getElementById('nav-a-propos')
const navProjets = document.getElementById('nav-projets')
const navParcours = document.getElementById('nav-parcours')
const sectionAPropos = document.getElementById('a-propos');
const sectionProjets = document.getElementById('projets');
const sectionParcours = document.getElementById('parcours');

window.addEventListener('scroll', function() {
  // Obtenir la position de défilement actuelle
  let scrollPosition = window.scrollY;

  // Calculer les positions des sections
  let aProposPosition = sectionAPropos.offsetTop;
  let projetsPosition = sectionProjets.offsetTop;
  let parcoursPosition = sectionParcours.offsetTop;

  // Réinitialisez toutes les classes
  [navAPropos, navProjets, navParcours].forEach(nav => {
    nav.classList.remove('text-cyan-400', 'font-bold');
  });

  // Mettre à jour la classe en fonction de la position de défilement
  if (scrollPosition >= parcoursPosition - 75) {
    navParcours.classList.add('text-cyan-400', 'font-bold');
  } else if (scrollPosition >= projetsPosition - 75) {
    navProjets.classList.add('text-cyan-400', 'font-bold');
  } else {
    navAPropos.classList.add('text-cyan-400', 'font-bold');
  }
});