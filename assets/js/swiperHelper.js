const swiper = new Swiper(".slide-content", {
    // Optional parameters
    slidesPerView:3,
    spaceBetween:25,
    loop:true,
    centerSlide:true,
    fade:true,
    grabCursor:'true',
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    navigation:{
        nextEl:".swiper-button-next",
        prevEl:".swiper-button-prev"
    },
  });