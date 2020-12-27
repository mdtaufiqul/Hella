"use strict";

!function ($) {
  'use strict';

  jQuery(document).on("ready", function () {
    $('.wn-slider').slick({
      dots: true,
      infinite: true,
      speed: 300,
      slidesToShow: 1,
      centerMode: true,
      variableWidth: true,
      prevArrow: "<img class='a-left control-c prev slick-prev' src='assets/images/icon/arrow.svg'>",
      nextArrow: "<img class='a-right control-c next slick-next' src='assets/images/icon/arrow.svg'>",
      onInit: function onInit() {
        $('.slick-active').prev().addClass('prev');
        $('.slick-active').next().addClass('next');
      },
      onBeforeChange: function onBeforeChange() {
        $('.slick-slide').removeClass('prev next');
      },
      onAfterChange: function onAfterChange() {
        $('.slick-active').prev().addClass('prev');
        $('.slick-active').next().addClass('next');
      }
    });
  });
}(jQuery);