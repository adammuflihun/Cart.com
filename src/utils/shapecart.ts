import { gsap } from 'gsap';

export const shapecart = () => {
  //   console.log(`Hello anjay!`);

  const elshapecart = document.querySelectorAll('.shapecart');
  //   console.log(elshapecart);

  gsap.from(elshapecart, {
    // opacity: 0,
    delay: 0.2,
    duration: 0.7,
    x: 150,
    y: 100,
    ease: 'Power4.easeOut',
    stagger: { each: 0.2, from: 'end' },
    autoAlpha: 0,
  });
};
