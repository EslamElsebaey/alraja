$(window).on("load", function () {
  $(".preloader").fadeOut();
});

$(document).ready(function () {
  // Main Swiper
  const mainSwiper = new Swiper(".mainBanner .swiper", {
    loop: true,
    autoplay: true,
    draggable: true,
    speed: 800,
    pagination: {
      el: ".mainBanner .swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".mainBanner .swiper-button-next",
      prevEl: ".mainBanner .swiper-button-prev",
    },
    breakpoints: {
      320: {
        slidesPerView: 1,
        spaceBetween: 0,
      },
    },
  });

  // Brands Swiper

  const brandsSwiper = new Swiper(".brands .swiper", {
    loop: true,
    autoplay: true,
    pagination: {
      el: ".brands .swiper-pagination",
      clickable: true,
    },
    breakpoints: {
      350: {
        slidesPerView: 3,
        spaceBetween: 20,
      },
      400: {
        slidesPerView: 3,
        spaceBetween: 25,
      },
      700: {
        slidesPerView: 4,
        spaceBetween: 35,
      },
      992: {
        slidesPerView: 5,
        spaceBetween: 25,
      },
      1100: {
        slidesPerView: 6,
        spaceBetween: 50,
      },
    },
  });

  // ******************************************************************************************
  // show and hide search

  $(".open-search").click(function () {
    $(".search").addClass("show-search");
    $("body").addClass("overflow-hidden");
  });

  $(".close-searh-btn").click(function () {
    $(".search").removeClass("show-search");
    $("body").removeClass("overflow-hidden");
  });

  // *********************************************************************************************

  // to top button

  // $(window).scroll(function () {
  //   if ($(window).scrollTop() > 200) {
  //     $(".toTop").addClass("showToTop");
  //   } else {
  //     $(".toTop").removeClass("showToTop");
  //   }
  // });

  // $(".toTop").click(function () {
  //   $(window).scrollTop(0);
  // });

  //**********************************************************************************************

  // open and close sideBar

  $(".bars").click(function () {
    $("nav").addClass("show-site-nav");
    $("body").addClass("overflow-hidden");
  });

  $(".close-btn").click(function () {
    $("nav").removeClass("show-site-nav");
    $("body").removeClass("overflow-hidden");
  });

  //*********************************************************************************************

  // mobile dropdoen Menu

  if ($(window).width() < 992) {
    $(".dropdown-li").on("click", function () {
      $(this).children(".slider-div").slideToggle(300);
      $(".dropdown-li > a").toggleClass("arrow-rotate");
    });

    $(".submenu-dropdown-li").on("click", function (e) {
      e.stopPropagation();
      $(this).children(".slider-div").slideToggle(300);
      $(this).children("a").toggleClass("sub-arrow-rotate");
    });
  }

  //*********************************************************************************************

  // Fixed Nav

  // $(window).on("scroll", function () {
  //   if ($(window).scrollTop() > 40) {
  //     $("header").addClass("sticky-header");
  //   } else {
  //     $("header").removeClass("sticky-header");
  //   }
  // });

  //**********************************************************************************************

  // Footer mobile nav

  if ($(window).width() < 992) {
    $(".footer-item-title").on("click", function () {
      $(this).siblings(".footer-ul-wrapper").slideToggle(300);
      $(this).toggleClass("rotate-arrow");
      $(".footer-item-title")
        .not(this)
        .siblings(".footer-ul-wrapper")
        .slideUp(300);
      $(".footer-item-title").not(this).removeClass("rotate-arrow");
    });
  }

  // ********************************************************************************************
});
