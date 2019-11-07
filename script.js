function follow_google_maps() {
    console.log("Hello");
    var win = window.open("https://www.google.com/maps/place/Adarsa+Marg-1,+Kathmandu+44600/@27.6912386,85.328576,17z/data=!3m1!4b1!4m5!3m4!1s0x39eb19bcf6b89097:0xf93f3a3f0c96e261!8m2!3d27.6912386!4d85.3307647");
    win.focus();
}

$(document).ready(function () {

    $("a").on('click', function (event) {
        if (this.hash !== "") { // check of the anchor tag has a hash or id
            event.preventDefault();
            var hash = this.hash;
            $('html, body').animate({
                scrollTop: $(hash).offset().top //scrolls the window smoothly to the div where the id has been assigned
            }, 800, function () {
                window.location.hash = hash;
            });
        }
    });


    $(window).scroll(function () {
        // check if the window has been scrolled
        if ($(this).scrollTop() > 0) {
            $('.navbar').addClass('solid');
        } else {
            $('.navbar').removeClass('solid');
        }
    });
});