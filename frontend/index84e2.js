
// 핫딜
$('.default-slick-carousel').slick({
    infinite: true,
	autoplaySpeed:6000,
    slidesToShow: 4,
    slidesToScroll: 1,
    dots: true,
    arrows: true,
    adaptiveHeight: true,
    responsive: [{
            breakpoint: 1292,
            settings: {
                dots: true,
                arrows: false
            }
        }, {
            breakpoint: 993,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
                dots: true,
                arrows: false
            }
        },
        {
            breakpoint: 769,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
                dots: true,
                arrows: false
            }
        }
    ]
});

// 메인 배너
$('.testimonial-carousel').slick({
    centerMode: true,
    centerPadding: '0%',
    slidesToShow: 3,
	autoplay: true,
	autoplaySpeed:6000,
	pauseOnFocus: false,
	pauseOnHover : false,
    dots: true,
    arrows: true,
    adaptiveHeight: true,
    responsive: [{
        breakpoint: 1600,
        settings: {
            centerPadding: '0%',
            slidesToShow: 3,
        }
    }, {
        breakpoint: 1292,
        settings: {
            centerPadding: '0%',
            dots: true,
            arrows: false
        }
    }, {
        breakpoint: 993,
        settings: {
            centerPadding: '0%',
            dots: true,
            arrows: false
        }
    }, {
        breakpoint: 769,
        settings: {
            centerPadding: '0%',
            slidesToShow: 1,
            dots: true,
            arrows: false
        }
    }]
});


$('.m-intro-banner').slick({
    centerMode: true,
    centerPadding: '0%',
    slidesToShow: 1,
	autoplay: true,
	autoplaySpeed:6000,
	pauseOnFocus: false,
	pauseOnHover : false,
    dots: false,
    arrows: true,
    adaptiveHeight: true,
    responsive: [{
        breakpoint: 1600,
        settings: {
            centerPadding: '0%',
            slidesToShow: 1,
        }
    }, {
        breakpoint: 1292,
        settings: {
            centerPadding: '0%',
            dots: true,
            arrows: false
        }
    }, {
        breakpoint: 993,
        settings: {
            centerPadding: '0%',
            dots: true,
            arrows: false
        }
    }, {
        breakpoint: 769,
        settings: {
            centerPadding: '0%',
            dots: true,
            arrows: false
        }
    }]
});


// 베스트샵
$('.default-slick-carousel2').slick({
    infinite: false,
    slidesToShow: 4,
    slidesToScroll: 1,
    dots: false,
    arrows: true,
    adaptiveHeight: true,
    responsive: [{
            breakpoint: 1292,
            settings: {
                dots: false,
                arrows: true
            }
        }, {
            breakpoint: 993,
            settings: {
                slidesToShow: 4,
                slidesToScroll: 4,
                dots: true,
                arrows: false
            }
        },
        {
            breakpoint: 769,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
                dots: true,
                arrows: false
            }
        },
		{
            breakpoint: 481,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
                dots: true,
                arrows: false
            }
        },
    ]
});
