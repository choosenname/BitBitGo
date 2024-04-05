$(document).ready(function() {
    $('.btn-booking-popup').click(function () {
        $('.overlay, .popup-booking').addClass('active');
    });

    $('.btn-thanks-popup').click(function () {
        $('.popup-booking').removeClass('active');
        $('.popup-thanks').addClass('active');
    });

    $('.btn-more-info-popup').click(function () {
        $('.overlay, .popup-more-info').addClass('active');
    });

    $('.btn-connect-popup').click(function () {
        $('.popup-more-info').removeClass('active');
        $('.popup-connect').addClass('active');
    });

    $('.cross, .overlay').click(function() {
        $('.overlay, .popup-booking, .popup-connect, .popup-more-info, .popup-more-info').removeClass('active');
    });
});