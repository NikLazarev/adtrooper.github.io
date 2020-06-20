$(function () {
  // home page
  $('#description-slider').slick({
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    adaptiveHeight: true
  });

  $('#review-slider').slick({
    infinite: true,
    speed: 300,
    centerMode: true,
    slidesToShow: 3,
    variableWidth: true
  });
});
