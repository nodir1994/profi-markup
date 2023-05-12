$(document).ready(function () {
  var swiperSpecial = new Swiper('.our_specials .swiper-container', {
    slidesPerView: 4,
    spaceBetween: 24,
    autoplay: {
      delay: 18000
    },
    loop: true,
    pagination: {
      el: '.our_specials .swiper-pagination',
      type: 'bullets',
      clickable: true
    }
  });


  var swiperWhyMe = new Swiper('.why_us .swiper-container', {
    slidesPerView: 'auto',
    spaceBetween: 24,
    autoplay: {
      delay: 300000
    },
    loop: true,
    centeredSlides: true,
    pagination: {
      el: '.why_us .swiper-pagination',
      type: 'bullets',
      clickable: true
    }
  });

  var swiperFaculties = new Swiper('.home_faculty .swiper-container', {
    slidesPerView: 3,
    spaceBetween: 24,
    navigation: {
      nextEl: '.home_faculty .swiper-button-next',
      prevEl: '.home_faculty .swiper-button-prev',
    },
    autoplay: {
      delay: 10300
    },
    loop: true,
    pagination: {
      el: '.home_faculty .swiper-pagination',
      type: 'bullets',
      clickable: true
    }
  });

  var swiperReviews = new Swiper('.home_reviews_swiper', {
    slidesPerView: 1,
    spaceBetween: 0,
    navigation: {
      nextEl: '.home_reviews .swiper-button-next',
      prevEl: '.home_reviews .swiper-button-prev',
    },
    autoplay: {
      delay: 10000
    },
    loop: true,
    pagination: {
      el: '.home_reviews .swiper-pagination',
      type: 'bullets',
      clickable: true
    }
  });


  var swiperPartner = new Swiper('.home_partners_swiper', {
    slidesPerView: 6,
    spaceBetween: 24,
    autoplay: {
      delay: 17000
    },
    loop: true
  });

  var swiper = new Swiper('.swiper_news .swiper-container', {
    slidesPerView: 3,
    spaceBetween: 16,
    autoplay: {
      delay: 12000
    },
    loop: true,
    pagination: {
      el: '.swiper_news .swiper-pagination',
      type: 'bullets',
      clickable: true
    },
    navigation: {
      nextEl: '.swiper_news .swiper-button-next',
      prevEl: '.swiper_news .swiper-button-prev',
    },
  });

  $('.btn_favourite').on('click', function (e) {
    e.preventDefault()
    $(this).toggleClass('active')
  })

  $('.language_block').on('click', function (e) {
    e.preventDefault()
    $(this).toggleClass('active')
  })



  $('[data-fancybox]').fancybox({
    youtube: {
      controls: 1,
      showinfo: 1
    },
    vimeo: {
      color: 'f00'
    }
  });

  $("body").click(function (e) {
    if (
      !$(e.target).is(
        ".language_block *,.language_block"
      )
    ) {
      $(".language_block").removeClass("active");
    }
  });
});
