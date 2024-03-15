AOS.init({
  once: true
})



// talent slider start js

$('.politics-slider').slick({
  dots: false,
  speed: 300,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 3000,
  // responsive: [
  //   {
  //     breakpoint: 1099,
  //     settings: {
  //       slidesToShow: 3,
  //       slidesToScroll: 1,
  //       infinite: true,
  //       centerMode: true,
  //       dots: true
  //     }
  //   },
  //   {
  //     breakpoint: 830,
  //     settings: {
  //       slidesToShow: 2,
  //       slidesToScroll: 1,
  //       centerMode: true,
  //     }
  //   },
  //   {
  //     breakpoint: 580,
  //     settings: {
  //       slidesToShow: 1,
  //       slidesToScroll: 1,
  //       centerMode: false,
  //     }
  //   }
  // ]
});
// talent slider end js



// step form start
// $(document).ready(function () {
//   $(".step .next").click(function () {
//     let a = $(this).parents(".step");
//     a.removeClass("active_step");
//     a.next().addClass("active_step");
//   });
//   $(".step .prev").click(function () {
//     let a = $(this).parents(".step");
//     a.removeClass("active_step");
//     a.prev().addClass("active_step");
//   });
// });
// step form end



// download button start
document.addEventListener("DOMContentLoaded", function () {
  this.addEventListener("click", e => {
    let tar = e.target;
    if (tar.hasAttribute("data-dl")) {
      let dlClass = "dl-working";
      if (!tar.classList.contains(dlClass)) {
        let lastSpan = tar.querySelector("span:last-child"),
          lastSpanText = lastSpan.textContent,
          timeout = getMSFromProperty("--dur", ":root");

        tar.classList.add(dlClass);
        lastSpan.textContent = "Downloading…";
        tar.disabled = true;

        setTimeout(() => {
          lastSpan.textContent = "Completed!";
        }, timeout * 0.9);

        setTimeout(() => {
          tar.classList.remove(dlClass);
          lastSpan.textContent = lastSpanText;
          tar.disabled = false;
        }, timeout + 1e3);
      }
    }
  });
});

function getMSFromProperty(property, selector) {
  let cs = window.getComputedStyle(document.querySelector(selector)),
    transDur = cs.getPropertyValue(property),
    msLabelPos = transDur.indexOf("ms"),
    sLabelPos = transDur.indexOf("s");

  if (msLabelPos > -1)
    return transDur.substr(0, msLabelPos);
  else if (sLabelPos > -1)
    return transDur.substr(0, sLabelPos) * 1e3;
}
// download button end