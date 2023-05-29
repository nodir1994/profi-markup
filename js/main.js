$(document).ready(function () {

  $(window).scroll(function () {
    if ($(this).scrollTop() >  $(window).height()) {
      $('.scrollup').addClass('showed');
    } else {
      $('.scrollup').removeClass('showed');
    }
  });

  $('.scrollup').click(function () {
    $("html, body").animate({ scrollTop: 0 }, 600);
    return false;
  });

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
    },
    breakpoints: {
      767: {
        slidesPerView: 1
      },
      991: {
        slidesPerView: 2

      },
      1250: {
        slidesPerView: 3
      },
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
    },
    breakpoints: {
      767: {
        spaceBetween: 10,
      }
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
    },
    breakpoints: {
      767: {
        slidesPerView: 1
      },
      991: {

      },
      1250: {
        slidesPerView: 2
      },
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
    loop: true,
    pagination: {
      el: '.home_partners_swiper .swiper-pagination',
      type: 'bullets',
      clickable: true
    },
    breakpoints: {
      767: {
        slidesPerView: 2
      },
      991: {
        slidesPerView: 4
      }
    }
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
    breakpoints: {
      767: {
        slidesPerView: 1
      },
      991: {
        slidesPerView: 2
      },
      1250: {
        slidesPerView: 2
      },
    }
  });

  var home_advantages = new Swiper('.home_advantages .swiper-container', {
    slidesPerView: 3,
    spaceBetween: 24,
    simulateTouch: false,
    pagination: {
      el: '.home_advantages .swiper-pagination',
      type: 'bullets',
      clickable: true
    },
    breakpoints: {
      767: {
        slidesPerView: 1,
      },
      991: {
        slidesPerView: 1.6,
        simulateTouch: true,
      },

    }
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

    if (
      !$(e.target).is(
        ".mobile__menu .right_block, .mobile__menu .right_block *"
      )
    ) {
      $('.mobile__menu').removeClass('active')
      $('body').removeClass('opened')

    }
  });

  $(document).on('click', '.open_sidebar', function () {
    $('.mobile__menu').addClass('active')
    $('body').addClass('opened')
  })

  $(document).on('click', '.toggle_password span', function () {
    $(this).parent().toggleClass('show')
    var x = document.getElementById("myInput");
    if (x.type === "password") {
      x.type = "text";
    } else {
      x.type = "password";
    }
  })

  $(document).on('click', '.mobile__menu .close', function () {
    $('.mobile__menu').removeClass('active')
    $('body').removeClass('opened')
  })

  if ($(window).width() < 1024) {
    $('section.home_faculty .right__faculty .swiper-container').after($('section.home_faculty .all_faculty '))
  }

  $(document).on('click','.home_faculty ul li a',function(e){
    e.preventDefault();  
      $('.home_faculty ul li a').removeClass('active')
      $(this).addClass('active')
  })

});
