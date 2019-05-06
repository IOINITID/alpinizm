$('.slider').slick({
    speed: 300,
    slidesToShow: 4,
    slidesToScroll: 1,
    // arrows: true,
    // prevArrow: '.prev-image',
    // nextArrow: 'next-image',
    responsive: [{
            breakpoint: 1199,
            settings: {
                arrows: false
            }
        }, {
            breakpoint: 992,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
                arrows: false
            }
        },
        {
            breakpoint: 768,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
                arrows: false
            }
        },
        {
            breakpoint: 576,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                arrows: false
            }
        }
    ]
});
$('.slider-info').slick({
    // centerMode: true,
    // centerPadding: '50px',
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: true,
    prevArrow: '.prev',
    nextArrow: '.next',
    responsive: [{
            breakpoint: 991,
            settings: {
                arrows: false,
                // centerMode: true,
                // centerPadding: '40px',
                slidesToShow: 2,
                slidesToScroll: 1
            }
        },
        {
            breakpoint: 767,
            settings: {
                arrows: false,
                // centerMode: true,
                // centerPadding: '30px',
                slidesToShow: 1,
                slidesToScroll: 1
            }
        },
        {
            breakpoint: 575,
            settings: {
                arrows: false,
                // centerMode: true,
                // centerPadding: '20px',
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }
    ]
});
$('.single-slider').slick({
    arrows: false,
    dots: true,
});
document.getElementById("slick-click-one").addEventListener('click', function () {
    // $(".slider").slick('destroy');
    // $(".slider").slick('init');
    document.querySelector(".btn-one").classList.toggle("button-rotate");
});
document.getElementById("slick-click-two").addEventListener('click', function () {
    // $(".slider").slick('destroy');
    // $(".slider").slick('init');
    document.querySelector(".btn-two").classList.toggle("button-rotate");
});
document.getElementById("slick-click-three").addEventListener('click', function () {
    // $(".slider").slick('destroy');
    // $(".slider").slick('init');
    document.querySelector(".btn-three").classList.toggle("button-rotate");
});
document.getElementById("slick-click-four").addEventListener('click', function () {
    // $(".slider").slick('destroy');
    // $(".slider").slick('init');
    document.querySelector(".btn-four").classList.toggle("button-rotate");
});
document.getElementById("slick-click-five").addEventListener('click', function () {
    // $(".slider").slick('destroy');
    // $(".slider").slick('init');
    document.querySelector(".btn-five").classList.toggle("button-rotate");
});
document.getElementById("slick-click-six").addEventListener('click', function () {
    // $(".slider").slick('destroy');
    // $(".slider").slick('init');
    document.querySelector(".btn-six").classList.toggle("button-rotate");
});
document.getElementById("slick-click-seven").addEventListener('click', function () {
    // $(".slider").slick('destroy');
    // $(".slider").slick('init');
    document.querySelector(".btn-seven").classList.toggle("button-rotate");
});
document.getElementById("slick-click-eight").addEventListener('click', function () {
    // $(".slider").slick('destroy');
    // $(".slider").slick('init');
    document.querySelector(".btn-eight").classList.toggle("button-rotate");
});
document.getElementById("slick-click-nine").addEventListener('click', function () {
    // $(".slider").slick('destroy');
    // $(".slider").slick('init');
    document.querySelector(".btn-nine").classList.toggle("button-rotate");
});
document.getElementById("slick-click-ten").addEventListener('click', function () {
    // $(".slider").slick('destroy');
    // $(".slider").slick('init');
    document.querySelector(".btn-ten").classList.toggle("button-rotate");
});
document.getElementById("slick-click-eleven").addEventListener('click', function () {
    // $(".slider").slick('destroy');
    // $(".slider").slick('init');
    document.querySelector(".btn-eleven").classList.toggle("button-rotate");
});
document.getElementById("slick-click-twelve").addEventListener('click', function () {
    // $(".slider").slick('destroy');
    // $(".slider").slick('init');
    document.querySelector(".btn-twelve").classList.toggle("button-rotate");
});





// // document.querySelector(".btn-one").addEventListener('click', function () {
// //     document.getElementById("btn-one").classList.toggle("button-rotate");
// // });

// document.getElementById("slick-click-two").addEventListener('click', function () {
//     $(".slider").slick('destroy');
//     $(".slider").slick('init');
// });

// // document.getElementById("btn-two").addEventListener('click', function () {
// //     this.classList.toggle("button-rotate");
// // });


// document.getElementById("slick-click-three").addEventListener('click', function () {
//     $(".slider").slick('destroy');
//     $(".slider").slick('init');
// });

// // document.getElementById("btn-three").addEventListener('click', function () {
// //     this.classList.toggle("button-rotate");
// // });

// document.getElementById("slick-click-four").addEventListener('click', function () {
//     $(".slider").slick('destroy');
//     $(".slider").slick('init');
// });

// // document.getElementById("btn-four").addEventListener('click', function () {
// //     this.classList.toggle("button-rotate");
// // });

// document.getElementById("slick-click-five").addEventListener('click', function () {
//     $(".slider").slick('destroy');
//     $(".slider").slick('init');
// });

// // document.getElementById("btn-five").addEventListener('click', function () {
// //     this.classList.toggle("button-rotate");
// // });

// document.getElementById("slick-click-six").addEventListener('click', function () {
//     $(".slider").slick('destroy');
//     $(".slider").slick('init');
// });

// // document.getElementById("btn-six").addEventListener('click', function () {
// //     this.classList.toggle("button-rotate");
// // });

// document.getElementById("slick-click-seven").addEventListener('click', function () {
//     $(".slider").slick('destroy');
//     $(".slider").slick('init');
// });

// // document.getElementById("btn-seven").addEventListener('click', function () {
// //     this.classList.toggle("button-rotate");
// // });

// document.getElementById("slick-click-eight").addEventListener('click', function () {
//     $(".slider").slick('destroy');
//     $(".slider").slick('init');
// });

// // document.getElementById("btn-eight").addEventListener('click', function () {
// //     this.classList.toggle("button-rotate");
// // });

// document.getElementById("slick-click-nine").addEventListener('click', function () {
//     $(".slider").slick('destroy');
//     $(".slider").slick('init');
// });

// // document.getElementById("btn-nine").addEventListener('click', function () {
// //     this.classList.toggle("button-rotate");
// // });

// document.getElementById("slick-click-ten").addEventListener('click', function () {
//     $(".slider").slick('destroy');
//     $(".slider").slick('init');
// });

// // document.getElementById("btn-ten").addEventListener('click', function () {
// //     this.classList.toggle("button-rotate");
// // });

// document.getElementById("slick-click-eleven").addEventListener('click', function () {
//     $(".slider").slick('destroy');
//     $(".slider").slick('init');
// });

// // document.getElementById("btn-eleven").addEventListener('click', function () {
// //     this.classList.toggle("button-rotate");
// // });

// document.getElementById("slick-click-twelve").addEventListener('click', function () {
//     $(".slider").slick('destroy');
//     $(".slider").slick('init');
// });

// // document.getElementById("btn-twelve").addEventListener('click', function () {
// //     this.classList.toggle("button-rotate");
// // });