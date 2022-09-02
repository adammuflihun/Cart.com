// import { greetUser } from '$utils/greet';
import { gsap } from 'gsap';

window.Webflow ||= [];
window.Webflow.push(() => {
  // const name = 'John Adam';
  // greetUser(name);
});

$('.accordion-header').click(function () {
  // let g = gsap.utils.selector(this); // or use selector text like ".class"

  $('.accordion .text-content-slide-landing ').hide();
  $('.accordion .vertical-text ').show();
  $('.accordion .image-arrow-down ').show();
  $(this).siblings('.image-arrow-down').hide();
  $(this).find('.vertical-text ').hide();
  $(this).siblings('.text-content-slide-landing ').show();
  gsap.fromTo(
    '.text-content-slide-landing',
    { opacity: 0 },
    { opacity: 1, duration: 0.5, delay: 0.6 }
  );
  $('.accordion-header').css({ 'pointer-events': 'auto' });
  $(this).css({ 'pointer-events': 'none' });
});
