console.log("hello from js");
document.addEventListener("DOMContentLoaded", function () {
  var elems = document.querySelectorAll(".tooltipped");
  var instances = M.Tooltip.init(elems, { transitionMovement: 5, margin: 4 });
});

document.addEventListener("DOMContentLoaded", function () {
  var elems = document.querySelectorAll("select");
  var instances = M.FormSelect.init(elems);
});

document.addEventListener("DOMContentLoaded", function () {
  var elems = document.querySelectorAll(".carousel");
  var instances = M.Carousel.init(elems, {
    fullWidth: true,
    indicators: true,
    dist: "100",
    duration: "200",
  });
});

document.addEventListener("DOMContentLoaded", function () {
  var elems = document.querySelectorAll(".sidenav");
  var instances = M.Sidenav.init(elems);
});
document.addEventListener("DOMContentLoaded", function () {
  var elems = document.querySelectorAll(".modal");
  var instances = M.Modal.init(elems);
});

document.addEventListener("DOMContentLoaded", function () {
  var elems = document.querySelectorAll(".collapsible");
  var instances = M.Collapsible.init(elems);
});
document.addEventListener("DOMContentLoaded", function () {
  var elems = document.querySelectorAll(".fixed-action-btn");
  var instances = M.FloatingActionButton.init(elems);
});
document.addEventListener("DOMContentLoaded", function () {
  var elems = document.querySelectorAll("select");
  var instances = M.FormSelect.init(elems);
});

$(document).ready(function () {
  $(window).scroll(function () {
    if ($("body , html").scrollTop() > 64) {
      $(".list_active").css({
        position: "fixed",
        zIndex: "1",
        top: "0px",
        backgroundColor: "#353755ca",
      });
      $(".progress_animate").css({
        position: "fixed",
        zIndex: "1",
        top: "45px",
        // backgroundColor: "#353755ca",
      });
    } else {
      $(".list_active").css({
        position: "relative",
        backgroundColor: "#353755",
      });
      $(".progress_animate").css({
        position: "relative",
        top: "0",
        // backgroundColor: "#353755ca",
      });
    }
  });

  $(".list_active .tab a").on("click", function () {
    $(this)
      .addClass("active")
      .parent()
      .siblings()
      .find("a")
      .removeClass("active");
  });

  var guideSection = $(".big_section_guide").offset().top - 100;
  var collapsibleSection = $(".big_collapsible_section").offset().top - 150;

  $(window).scroll(function () {
    if ($(window).scrollTop() >= guideSection) {
      $(".list_active .tab .guide")
        .addClass("active")
        .parent()
        .siblings()
        .find("a")
        .removeClass("active");
    } else {
      $(".list_active .tab a").removeClass("active");
    }

    if ($(window).scrollTop() >= collapsibleSection) {
      $(".list_active .tab .question")
        .addClass("active")
        .parent()
        .siblings()
        .find("a")
        .removeClass("active");
    }
  });
});
