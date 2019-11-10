function follow_google_maps() {
    console.log("Hello");
    var win = window.open("https://www.google.com/maps/place/Adarsa+Marg-1,+Kathmandu+44600/@27.6912386,85.328576,17z/data=!3m1!4b1!4m5!3m4!1s0x39eb19bcf6b89097:0xf93f3a3f0c96e261!8m2!3d27.6912386!4d85.3307647");
    win.focus();
}

// $(window).scroll(function () {
//     nav = $(".navbar-nav");
//     menuItems = nav.find("li");

//     var hT = $('#contact').offset().top,
//         hH = $('#contact').innerHeight() - 200,
//         wH = $(window).height(),
//         wS = $(this).scrollTop();

//     var hT1 = $('#food-menu').offset().top,
//         hH1 = $('#food-menu').innerHeight() - 200,
//         wH1 = $(window).height(),
//         wS1 = $(this).scrollTop();


//     if (wS >= (hT + hH - wH)) {
//         menuItems.removeClass("active-link");
//         $('#contact-link').addClass("active-link");
//     }

//     else if (wS1 >= (hT1 + hH1 - wH1)) {
//         menuItems.removeClass("active-link");
//         $('#menu-link').addClass("active-link");
//     }

//     else {
//         menuItems.removeClass("active-link");
//         $('#home-link').addClass("active-link");
//     }
// });

window.onscroll = function () { scrollFunction() };

function scrollFunction() {
    if (document.body.scrollTop > 30 || document.documentElement.scrollTop > 30) {
        document.getElementById('navigator').style.display = "block";
    } else {
        console.log("True");
        document.getElementById('navigator').style.display = "none";
    }
}

function scrollUp() {
    console.log("Up up and away!!");
    window.scrollTo({ top: 0, behavior: 'smooth' });
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
            $('#header-address').addClass('header-address-transition');

        } else {
            $('.navbar').removeClass('solid');
            $('#header-address').removeClass('header-address-transition');
        }
    });
});

$(document).ready(function () {
    nav = $(".navbar-nav");
    menuItems = nav.find("li");
    $(menuItems).click(function () {
        $(menuItems).removeClass("active-link");
        $(this).addClass("active-link");
    });
});


