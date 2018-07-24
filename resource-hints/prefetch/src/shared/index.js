import $ from 'jquery';
import "slick-carousel";

$('.multiple-image-class').slick({
    dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    centerMode: true,
    variableWidth: true,
    adaptiveHeight: true
});
