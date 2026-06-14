const scroll = new LocomotiveScroll({
  el: document.querySelector("main"),
  smooth: true,
});

function page2_animation() {
  let page2 = document.querySelector("#page2");
  let elem_h1 = document.querySelectorAll(".elem");

  elem_h1.forEach(function (e) {
    e.addEventListener("mouseenter", function () {
      let image = e.getAttribute("data-img");
      page2.style.backgroundImage = `url(${image})`;
    });
  });
}
page2_animation()