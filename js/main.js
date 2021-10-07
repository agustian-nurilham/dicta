M.AutoInit();

//efect mouse parallax--------------------------------------------------------------------------------------------------------------------------------------------
window.onload = function () {
  var parallaxBox = document.getElementById("box");
  var c1left = document.getElementById("l1").offsetLeft,
    c1top = document.getElementById("l1").offsetTop,
    c2left = document.getElementById("l2").offsetLeft,
    c2top = document.getElementById("l2").offsetTop,
    c3left = document.getElementById("l3").offsetLeft,
    c3top = document.getElementById("l3").offsetTop,
    c4left = document.getElementById("l4").offsetLeft,
    c4top = document.getElementById("l4").offsetTop,
    c5left = document.getElementById("l5").offsetLeft,
    c5top = document.getElementById("l5").offsetTop;

  parallaxBox.onmousemove = function (event) {
    event = event || window.event;
    var x = event.clientX - parallaxBox.offsetLeft,
      y = event.clientY - parallaxBox.offsetTop;

    mouseParallax("l1", c1left, c1top, x, y, 20);
    mouseParallax("l2", c2left, c2top, x, y, -30);
    mouseParallax("l3", c3left, c3top, x, y, 0);
    mouseParallax("l4", c4left, c4top, x, y, -10);
    mouseParallax("l5", c5left, c5top, x, y, 50);
  };
};

function mouseParallax(id, left, top, mouseX, mouseY, speed) {
  var obj = document.getElementById(id);
  var parentObj = obj.parentNode,
    containerWidth = parseInt(parentObj.offsetWidth),
    containerHeight = parseInt(parentObj.offsetHeight);
  obj.style.left =
    left -
    ((mouseX - (parseInt(obj.offsetWidth) / 2 + left)) / containerWidth) *
    speed +
    "px";
  obj.style.top =
    top -
    ((mouseY - (parseInt(obj.offsetHeight) / 2 + top)) / containerHeight) *
    speed +
    "px";
}

//form login--------------------------------------------------------------------------------------------------------------------------------------------------------
function check(form) {
  if (form.pass.value == "yourpanda") {
    $(".opening").addClass("dnone");
    $("body").removeClass("hiden-scroll");
    $(window).scrollTop(0);
  } else {
    alert("Passwordnya belom cocok weh"); /*displays error message*/
  }
}

//event play music-------------------------------------------------------------------------------------------------------
$(document).ready(function () {
  var audioElement = document.createElement("audio");
  audioElement.setAttribute("src", "img/music.mp3");

  audioElement.addEventListener(
    "ended",
    function () {
      this.play();
    },
    false
  );

  $("#playMusic").click(function () {
    audioElement.play().loop;
  });

  $("#pauseMusic").click(function () {
    audioElement.pause();
    $(".opening").removeClass("dnone");
    $("body").addClass("hiden-scroll");
    alert("See ya my panda!");
  });

  $("#ily").click(function () {
    alert("I LOVE YOU!");
  });
});

//smooth scrolling------------------------------------------------------------------------------------------------------------
$(document).on("click", 'a[href^="#"]', function (event) {
  event.preventDefault();

  $("html, body").animate(
    {
      scrollTop: $($.attr(this, "href")).offset().top,
    },
    1500
  );
});

