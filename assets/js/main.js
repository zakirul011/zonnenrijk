//========== PRELOADER ==========>
window.addEventListener("load", () => {
  if (document.querySelector(".preloader")) {
    document.querySelector(".preloader").classList.add("hide");
  }
});
//========== PRELOADER// ==========>

//========== STICKY HEADER, BACK TO TOP ==========>
const headerArea = document.querySelectorAll(".header-area");
headerArea.forEach((area) => {
  let height;
  let navbar = document.querySelector(".navbar");
  let scrollUp = document.querySelector(".scroll-up");
  window.addEventListener("resize", () => {
    addHeaderHeight();
  });
  window.addEventListener("load", () => {
    addHeaderHeight();
  });
  function addHeaderHeight() {
    height = navbar.clientHeight;
    document.documentElement.style.setProperty("--header-h", height + "px");
  }
  window.addEventListener("scroll", () => {
    if (window.scrollY > height) {
      area.classList.add("sticky");
      scrollUp.classList.add("sticky");
    } else {
      area.classList.remove("sticky");
      scrollUp.classList.remove("sticky");
    }
  });
  scrollUp.addEventListener("click", () => {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  });
});
//========== STICKY HEADER, BACK TO TOP// ==========>

//========== apply Lergest height ==========>
let serviceCards = document.querySelectorAll(".service-equal");
let testimonialCards = document.querySelectorAll(".testimonial-equal");
let projectCards = document.querySelectorAll(".project-card-equal");
let productCards = document.querySelectorAll(".product-card-equal");
window.addEventListener("load", () => {
  applyLergestheight(serviceCards);
  applyLergestheight(testimonialCards);
  applyLergestheight(projectCards);
  applyLergestheight(productCards);
});
window.addEventListener("resize", () => {
  applyLergestheight(serviceCards);
  applyLergestheight(testimonialCards);
  applyLergestheight(projectCards);
  applyLergestheight(productCards);
});
function applyLergestheight(items) {
  const itemheight = [];
  items.forEach((item) => {
    item.style.height = "auto";
    itemheight.push(item.scrollHeight);
  });
  items.forEach((item) => {
    item.style.height = Math.max.apply(null, itemheight) + "px";
  });
}
//========== apply Lergest height// ==========>

//========== FEATURES POP ==========>
const featurePops = document.querySelectorAll(".features-pop");
featurePops.forEach((wrap) => {
  let trigger = wrap.querySelector(".card-header");
  let collape = wrap.querySelector(".features-collape");
  let height = collape.scrollHeight;
  let width = collape.clientWidth;
  let btnWidth = trigger.clientWidth;

  collape.style.maxWidth = btnWidth + "px";
  trigger.style.minWidth = btnWidth + "px";

  trigger.addEventListener("click", () => {
    if (wrap.classList.contains("active")) {
      wrap.classList.remove("active");
      collape.style.maxHeight = null;
      collape.style.maxWidth = btnWidth + "px";
      trigger.style.minWidth = btnWidth + "px";
    } else {
      wrap.classList.add("active");
      collape.style.maxHeight = height + "px";
      collape.style.maxWidth = width + "px";
      trigger.style.minWidth = width + "px";
    }
  });
});
//========== FEATURES POP// ==========>

//========== FEATURES SWITCH ==========>
const featureArea = document.querySelectorAll(".features-area");
featureArea.forEach((wrap) => {
  let featureSwitch = wrap.querySelector(".form-check-input");
  if (featureSwitch.checked) {
    wrap.classList.add("checked");
  } else {
    wrap.classList.remove("checked");
  }
  featureSwitch.addEventListener("change", () => {
    if (featureSwitch.checked) {
      wrap.classList.add("checked");
    } else {
      wrap.classList.remove("checked");
    }
  });
});
//========== FEATURES SWITCH// ==========>

//========== OFFCANVASE MENU ==========>
const navToggler = document.querySelectorAll(".navbar-toggler");
navToggler.forEach((trigger) => {
  let offcanvas = document.querySelector(".offcanvas");
  let backdrop = document.querySelector(".offcanvas-backdrop");

  function toggleShow() {
    trigger.classList.toggle("show");
    offcanvas.classList.toggle("show");
    backdrop.classList.toggle("show");
  }

  trigger.addEventListener("click", () => {
    toggleShow();
  });
  backdrop.addEventListener("click", () => {
    toggleShow();
  });
});
//========== OFFCANVASE MENU// ==========>

(function ($) {
  "use strict";

  //========== MAGNIFIC POPUP ==========>
  $(".video-btn").magnificPopup({
    type: "iframe",
  });
  $(".pop-img-btn").magnificPopup({
    type: "image",
  });
  $(".gallery-item a").magnificPopup({
    type: "image",
    gallery: {
      enabled: true,
    },
  });
  //========== MAGNIFIC POPUP// ==========>

  //========== ONE PAGE NAV ==========>
  var top_offset = $(".header-area").height() - 170;
  $(".mainmenu ul, .sidebar ul").onePageNav({
    scrollOffset: top_offset,
  });
  //========== ONE PAGE NAV// ==========>

  //========== SKROLLR JS ==========>
  var skrollrSetting = {
    forceHeight: false,
    smoothScrollingDuration: 500,
  };
  var s = skrollr.init(skrollrSetting);
  function doubleAction() {
    if (window.matchMedia("(max-width: 991px)").matches) {
      s.destroy();
    } else {
      s = skrollr.init(skrollrSetting);
    }
  }
  window.addEventListener("load", () => {
    doubleAction();
  });
  window.addEventListener("resize", () => {
    doubleAction();
  });
  //========== SKROLLR JS// ==========>

  //========== TEAM SLIDER ==========>
  $(".team-slider").slick({
    slidesToShow: 3,
    dots: false,
    arrows: false,
    swipeToSlide: true,
    infinite: false,

    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 1,
          dots: true,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          dots: true,
        },
      },
    ],
  });
  //========== TEAM SLIDER// ==========>

  //========== PRODUCT SLIDER ==========>
  $(".product-slider").slick({
    slidesToShow: 3,
    dots: false,
    arrows: false,
    swipeToSlide: true,
    infinite: false,

    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 1,
          dots: true,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          dots: true,
        },
      },
    ],
  });
  //========== PRODUCT SLIDER// ==========>

  //========== PROJECT SLIDER  ==========>
  $(".project-slider").each(function () {
    $(this).slick({
      slidesToShow: 1,
      dots: true,
      arrows: false,
      swipeToSlide: true,
      infinite: true,
      autoplay: true,
      autoplaySpeed: 5000,
      appendDots: $(this).next(),
      pauseOnHover: true,
    });
  });

  //========== PROJECT SLIDER // ==========>
})(jQuery);
