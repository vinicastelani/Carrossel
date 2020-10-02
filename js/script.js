var slices = [];
var current = 0,
  previous = -1,
  next = 1;

function getSlicePositions(target) {
  var div = document.getElementsByClassName(target);
  Array.from(div).forEach((el, index) => {
    el.id = index;
    slices.push({
      width: el.offsetWidth,
      offsetLeft: el.offsetLeft,
    });
  });
  return slices;
}
function slideLeft() {
  activeSlice();
  current > 0
    ? $(".row").animate({ scrollLeft: slices[previous].offsetLeft }, 1000) &&
      (current -= 1)
    : false;
  arrowStatus();

  previous = current - 1;
  next = current + 1;
}
function slideRight() {
  activeSlice();
  current < slices.length - 1
    ? $(".row").animate({ scrollLeft: slices[next].offsetLeft }, 1000) &&
      (current += 1)
    : false;
  arrowStatus();
  previous = current - 1;
  next = current + 1;
}

function arrowStatus() {
  current < slices.length - 1
    ? $(".arrow_right").animate({ opacity: "1" })
    : $(".arrow_right").animate({ opacity: "0.1" });
  current > 0
    ? $(".arrow_left").animate({ opacity: "1" })
    : $(".arrow_left").animate({ opacity: "0.1" });
}

function activeSlice() {
  return $(".row").scrollLeft() == slices[current].offsetLeft ? true : false;
}

$(window).on("load", function () {
  setTimeout(() => {
    $(".loader").parent().fadeOut();
    $("#panel").animate({ opacity: "1" }, 2000);
  }, 1000);
});
