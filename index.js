var btns = $(".nav-item")
for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function () {
    var current = document.getElementsByClassName("active")
    current[0].className = current[0].className.replace("nav-link active", "nav-link")
    this.children[0].className = "nav-link active"
  })
}