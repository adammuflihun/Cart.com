// import { greetUser } from '$utils/greet';
import { gsap } from 'gsap';

window.Webflow ||= [];
window.Webflow.push(() => {
  // const name = 'John Adam';
  // greetUser(name);
});

$('.accordion-header').click(function () {
  let g = gsap.utils.selector(this); // or use selector text like ".class"

  $('.accordion .text-content-slide-landing ').hide();
  $('.accordion .text-content-slide-landing ').addClass('hide');
  $('.accordion .vertical-text ').show();
  $('.accordion .image-arrow-down ').show();
  $(this).siblings('.image-arrow-down').hide();
  $(this).find('.vertical-text').hide();
  $(this).siblings('.text-content-slide-landing').removeClass('hide');
  $(this).siblings('.text-content-slide-landing').show();

  gsap.fromTo(
    $(this).siblings('.text-content-slide-landing'),
    { opacity: 0 },
    { opacity: 1, duration: 1, delay: 0.3, autoAlpha: 1 }
  );

  gsap.to($(this).parent('.accordion .text-content-slide-landing'), { opacity: 0 });

  $('.accordion-header').css({ 'pointer-events': 'auto' });
  $(this).css({ 'pointer-events': 'none' });
  $('#accordion1').css({ display: 'none' });
  $('.accordion-header:nth-child(1)').css({ 'pointer-events': 'none' });
});

$('#button-learn-more-head').on('click', function () {
  $('.accordion.second').find('.vertical-text').hide();

  $('.accordion.second')
    .find('.text-content-slide-landing')
    .css({ display: 'block', height: '100%', width: '100%' });
  gsap.fromTo(
    $('.second').find('.text-content-slide-landing'),
    { opacity: 0 },
    { opacity: 1, duration: 1, delay: 0.3, autoAlpha: 1 }
  );
});
