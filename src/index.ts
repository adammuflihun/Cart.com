// import { greetUser } from '$utils/greet';
import { gsap } from 'gsap';

import { channelFunction } from '$utils/channel';
import { shapecart } from '$utils/shapecart';

// $('.shapecart').css('visibility', 'hidden');

window.Webflow ||= [];
window.Webflow.push(() => {
  console.log('loading from local');
  shapecart();
  channelFunction();

  $(document).ready(function () {
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
        { opacity: 1, duration: 0.3, delay: 0.3, autoAlpha: 1 }
      );

      $('.accordion-header').css({ 'pointer-events': 'auto' });
      $(this).css({ 'pointer-events': 'none' });
      $('#accordion1').css({ display: 'none' });
      $('.accordion-header:nth-child(1)').css({ 'pointer-events': 'none' });
    });

    $('#button-learn-more-head').on('click', function () {
      $('.accordion.second')
        .find('.vertical-text')
        .css({ display: 'none', 'pointer-events': 'none' });
      $('.accordion.second').find('.accordion-header').css({ 'pointer-events': 'none' });

      $('.accordion.active').hide();

      $('.accordion.second')
        .find('.text-content-slide-landing')
        .css({ display: 'flex', height: '100%', width: '100%' });
      gsap.fromTo(
        $('.second').find('.text-content-slide-landing'),
        { opacity: 0 },
        { opacity: 1, duration: 1, delay: 0.3, autoAlpha: 1 }
      );
    });
  });

  $(window)
    .resize(function () {
      if (window.matchMedia('(max-width: 991px)').matches) {
        $('#button-storefront').click(function () {
          $('html, body').animate(
            {
              scrollTop: $('#section-storefront').position().top + 20,
            },
            0
          );
        });

        $('#button-growth').click(function () {
          $('html, body').animate(
            {
              scrollTop: $('#section-growth').position().top + 100,
            },
            0
          );
        });

        $('#button-channel').click(function () {
          $('html, body').animate(
            {
              scrollTop: $('#section-channel').position().top + 150,
            },
            0
          );
        });

        $('#button-fulfillment').click(function () {
          $('html, body').animate(
            {
              scrollTop: $('#section-fulfillment').position().top + 200,
            },
            0
          );
        });

        $('#button-customer').click(function () {
          $('html, body').animate(
            {
              scrollTop: $('#section-customer').position().top + 300,
            },
            0
          );
        });

        $('#button-unified').click(function () {
          $('html, body').animate(
            {
              scrollTop: $('#section-unified').position().top + 350,
            },
            0
          );
        });
      } else {
      }
    })
    .resize(); // trigger on page load
});
