export const channelFunction = () => {
  console.log('ancol tekoncol');
  $('.block-channel-timeline').on('click', function () {
    $(this).find('.circle-timeline-channel').addClass('active');
  });
  $('.block-channel-timeline').on('click', function () {
    $(this)
      .siblings('.block-channel-timeline')
      .find('.circle-timeline-channel')
      .removeClass('active');
  });
};
