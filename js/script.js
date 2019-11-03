// $(function(){
//     //jquery chaining
//     $('h1').hide(500).show(500);
// });

// $(window).on("load",function(){
// alert("window is loaded!");
// });

/* ===============================================
                Preloader
============================================== */

$(window).on('load', function () { //makes sure whole website is loaded
    $('#status').fadeOut();
    $('#preloader').delay(750).fadeOut();
});


/* ===============================================
                      Team
    ============================================== */
$(function () {
    // $(".owl-carousel").owlCarousel();
    $('.owl-carousel').owlCarousel({
        loop: true,
        margin: 10,
        nav: true,
        autoplay: true,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 3
            },
            1000: {
                items: 2
            }
        }
    })
});

/* =========================================
        Progress Bars
=============================================*/

$(function () {
    $("#progress-elements").waypoint(function () {
        $('.progress-bar').each(function () {
            $(this).animate({
                width: $(this).attr("aria-valuenow") + "%"
            }, 4000);
        });
        this.destroy();

    }, {
        offset: 'botoom-in-view'
    });
});
/*========================================
        Responsive Tabs
=================================*/
$(function () {
    $('#services-tab').responsiveTabs({
        // animation: 'fade', // The panels will fade in and out
        animation: 'slide', // The panels will slide up and down

    });
})

/* ==================================================
        Portfolio
======================================================*/
$(window).on('load', function () {
    // initialize isotope plugin
    $('#isotope-container').isotope({

    });
    // filter items on button click
    $('#isotope-filters').on('click', 'button', function () {
        //get filter values
        var filterValue = $(this).attr('data-filter');
        $('#isotope-container').isotope({
            filter: filterValue
        });
        $('#isotope-filters').find('.active').removeClass('active');
        $(this).addClass('active');
    });
});

/**=======================================================
 * Magnifier
 =========================================================*/
$(function () {
    $('#portfolio-wrapper').magnificPopup({
        delegate: 'a', // child items selector, by clicking on it popup will open
        type: 'image',
        gallery: {
            // options for gallery
            enabled: true
        }
        // other options
    });
});

/* ===============================================
                      Testimonials
    ============================================== */
$(function () {
    // $(".owl-carousel").owlCarousel();
    $('#testimonials-slider').owlCarousel({
        loop: true,
        margin: 10,
        nav: true,
        autoplay: true,
        items: 1,
        autoplayHoverPause: true,
        navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>']
    });
});

/* =========================================
        Counter UP
   ========================================*/
$(function () {
    $('.counter').counterUp({
        delay: 10,
        time: 1000
    });
});
/* ===============================================
                      Clients
    ============================================== */
$(function () {
    $('#client-list').owlCarousel({
        loop: true,
        margin: 10,
        nav: true,
        autoplay: true,
        items: 1,
        autoplayHoverPause: true,
        navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>']
    });
});

/* ==========================================
        Google Map
  ============================================ */
$(window).on('load', function () {
    //Map Variables
    var address = "Hitech City ,Hyderabad";
    var Lat_Lng = {
        lat: 17.439660,
        lng: 78.396080
    };
    // 1.Map Rendering
    var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 10,
        center: Lat_Lng
    });
    // 2. Add Marker
    var marker = new google.maps.Marker({
        position: Lat_Lng,
        map: map,
        title: "Click To See Address"
    });

    var infowindow = new google.maps.InfoWindow({
        content: address
    });
    marker.addListener('click', function () {
        infowindow.open(map, marker);
    });
});

/* ==========================================
        Navigation
   ==========================================*/
$(function () {
    $(window).scroll(function () {
        // alert("You just scrolled up!");
        if ($(window).scrollTop() > 50) {
            $("nav").addClass("white-nav-top");
            $(".navbar-brand img").attr("src","imgs/logo/logo-dark.png");
        } else {
            $("nav").removeClass("white-nav-top");
            $(".navbar-brand img").attr("src","imgs/logo/logo.png");
        }
    });
});