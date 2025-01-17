//========== PRELOADER ==========>
window.addEventListener("load", () => {
  if (document.querySelector(".preloader")) {
    document.querySelector(".preloader").classList.add("hide");
  }
});
//========== PRELOADER// ==========>

//========== STICKY HEADER, BACK TO TOP ==========>
const headerArea = document.querySelectorAll(".header-sticky");
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
let blogEqual = document.querySelectorAll(".blog-equal");
window.addEventListener("load", () => {
  applyLergestheight(serviceCards);
  applyLergestheight(testimonialCards);
  applyLergestheight(projectCards);
  applyLergestheight(productCards);
  applyLergestheight(blogEqual);
});
window.addEventListener("resize", () => {
  applyLergestheight(serviceCards);
  applyLergestheight(testimonialCards);
  applyLergestheight(projectCards);
  applyLergestheight(productCards);
  applyLergestheight(blogEqual);
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

//========== STICKY SIDEBAR// ==========>
function offset(elt) {
  var rect = elt.getBoundingClientRect(),
    bodyElt = document.documentElement;
  return {
    top: rect.top + bodyElt.scrollTop,
    left: rect.left + bodyElt.scrollLeft,
  };
}

window.addEventListener("load", function () {
  if (document.querySelector(".stickybox")) {
    const headerHeight = document.querySelector(".header-area").clientHeight;
    const gap = 10;
    const sidebar = document.querySelector(".stickybox");
    const wrap = sidebar.parentElement;
    const top = offset(sidebar).top - headerHeight - gap;
    const wrapTop = offset(wrap).top;
    const maxY =
      wrapTop + wrap.offsetHeight - sidebar.offsetHeight - headerHeight - gap;
    sidebar.style.setProperty("--top", maxY - top + "px");
    sidebar.style.setProperty("--width", wrap.offsetWidth + "px");
    sidebar.style.setProperty("--gap", gap + "px");

    window.addEventListener("scroll", function () {
      let y = document.scrollingElement.scrollTop;

      if (y > top) {
        if (y < maxY) {
          sidebar.classList.add("fixed");
          sidebar.classList.remove("bottom");
        } else {
          sidebar.classList.remove("fixed");
          sidebar.classList.add("bottom");
        }
      } else {
        sidebar.classList.remove("fixed");
      }
    });
  }
});
//========== STICKY SIDEBAR// ==========>

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
