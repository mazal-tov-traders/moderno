$(function () {

  $('.product-slider__inner').slick({
    dots: true,
    arrows: false,
    slidesToShow: 4,
    slidesToScroll: 4
  });

  




  $('.icon-list').on('click', function () {
    $('.product__item').addClass('list');
    $('.icon-list').addClass('active');
    $('.icon-th-large').removeClass('avtive');
  });
  $('.icon-th-large').on('click', function () {
    $('.product__item').removeClass('list');
    $('.icon-th-large').addClass('avtive');
    $('.icon-list').removeClass('active');
  });


  $('.menu__btn').on('click', function(){
    $('.menu__list').slideToggle();
  });

  $('.header__btn-menu').on('click', function () {
    $('.header__box').toggleClass('active');
  });


  $(".js-range-slider").ionRangeSlider({
    type: "double",
    min: 0,
    max: 1000,
    from: 0,
    to: 600,
    prefix: "$"
  });




  var mixer = mixitup('.products__inner-box');

});