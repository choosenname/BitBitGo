$(document).ready(function() {
    $('.btn-booking-popup').click(function () {
        $('.overlay, .popup-booking').addClass('active');
    });

    $('.cross, .overlay').click(function() {
        $('.overlay, .popup-booking').removeClass('active');
    });
});