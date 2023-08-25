import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export const animateKeyboardOnScroll = (position, target, onUpdate) => {
  const tl = gsap.timeline();

  const introOneSection = document.getElementById('intro-one');

  const introOneAnimationSite = introOneSection.querySelector(
    '.spacer-for-animation'
  );

  const introTwoSection = document.getElementById('intro-two');
  const introTwoAnimationSite = introTwoSection.querySelector(
    '.spacer-for-animation'
  );

  console.log('this is the animation site elemtn', introOneAnimationSite);

  tl.to(position, {
    x: -0.0000000949,
    y: 10.0,
    z: 0.0000099995,
    ease: 'linear',
    scrollTrigger: {
      trigger: introOneSection,
      start: 'top bottom',
      endTrigger: introOneAnimationSite,
      end: 'bottom center',
      immediateRender: false,
      scrub: 1,
      markers: true
    },
    onUpdate
  }).to(position, {
    x: 6.5017929076,
    y: 5.0078215658,
    z: 6.2628404938,
    ease: 'linear',
    scrollTrigger: {
      trigger: introOneAnimationSite,
      start: 'bottom+=10px center',
      endTrigger: introTwoAnimationSite,
      end: 'bottom center',
      immediateRender: false,
      scrub: 1,
      markers: true
    },
    onUpdate
  });
};
