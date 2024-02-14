import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';



gsap.registerPlugin(ScrollTrigger);
gsap.defaults({ ease: 'none', duration: 2 });

const tl = gsap.timeline();
tl.from('#projets', { xPercent: -100 })
  .from('#parcours', { xPercent: 100 });

/*ScrollTrigger.create({
  animation: tl,
  trigger: '#main',
  start: 'top top',
  end: '+=4000',
  scrub: true,
  pin: true,
  anticipatePin: 1,
});*/
