var btns = $(".nav-item")
for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function () {
    var current = document.getElementsByClassName("active")
    current[0].className = current[0].className.replace("nav-link active", "nav-link")
    this.children[0].className = "nav-link active"
  })
}
$(document).ready(function () {
  $(window).scroll(function () {
    if ($(this).scrollTop() > 50) {
      $('#back-to-top').fadeIn();
    } else {
      $('#back-to-top').fadeOut();
    }
  });
  // scroll body to 0px on click
  $('#back-to-top').click(function () {
    $('body,html').animate({
      scrollTop: 0
    }, 200);
    return false;
  });
});

var TopOffset = 100;

$('a[data-smooth]').click(function () {
  var current = document.getElementsByClassName("active")
  console.log(current[0],$(this).children('a'))
  const selected = $(this).children('a')
  console.log(selected.prevObject[0].className)
  current[0].className = current[0].className.replace("nav-link active", "nav-link")
  selected.prevObject[0].className = "nav-link active"
  if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
    var target = $(this.hash);
    target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
    if (target.length) {
      $('html, body').animate({
        scrollTop: target.offset().top - TopOffset
      }, 200);
      return false;
    }
  }

});