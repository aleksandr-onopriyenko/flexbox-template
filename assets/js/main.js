(function ($) {

  $(document).ready(function() {
      $('.body').niceScroll();
  });

  $('.burger').on('click', function() {
    $(this).toggleClass('burger--active');
    $('.header-menu__list').toggleClass('header-menu__list--active')
  });

})(jQuery);