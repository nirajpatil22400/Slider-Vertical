  const sliderThumbs = new Swiper(".slider__thumbs .swiper-container", {
            direction: "vertical",
            slidesPerView: 5,
            spaceBetween: 24,
            navigation: {
                nextEl: ".slider__next",
                prevEl: ".slider__prev",
            },
            freeMode: true,
            loop: true,
            breakpoints: {
                0: {
                    direction: "horizontal",
                },
                768: {
                    direction: "vertical",
                },
            },
        });

        const sliderImages = new Swiper(".slider__images .swiper-container", {
            direction: "vertical",
            slidesPerView: 1,
            spaceBetween: 500,
            mousewheel: true,
            navigation: {
                nextEl: ".slider__next",
                prevEl: ".slider__prev",
            },
            grabCursor: true,
            loop: true,
            thumbs: {
                swiper: sliderThumbs,
            },
            breakpoints: {
                0: {
                    direction: "vertical",
                },
                768: {
                    direction: "vertical",
                },
            },
        });
