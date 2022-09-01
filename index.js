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
  console.log(current[0], $(this).children('a'))
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

const nameRegex = /^[a-zA-Z ]{3,30}$/;
const emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
const phoneRegex = /^[0-9]{10}$/;
const branch = ["IT", "CE", "Other", "MECH", "AI&DS", "AI&ML", "EXTC"];
const year = ["1", "2", "3", "4"];
// const arenaIdURL = (name) => {
//   return `http://arena.siesgst.ac.in/api/user?username=${name}`
// }
// const headers = {
//   'Accept': 'application/vnd.arena+json;version=1',
//   'Access-Control-Allow-Origin': '*'
// }
function submitForm(event) {
  event.preventDefault();
  const name = $("[name='name']").val();
  const email = $("[name='email']").val();
  const phoneNo = $("[name='phoneNo']").val();
  const branch = $("[name='branch']").val();
  const year = $("[name='year']").val();
  const arenaId = $("[name='arenaId']").val();
  const collegeName = $("[name='collegename']").val();
  const teamName = $("[name='teamName']").val();
  const transactionId = $("[name='transactionId']").val();
  const name2 = $("[name='name2']").val();
  const email2 = $("[name='email2']").val();
  const phoneNo2 = $("[name='phoneNo2']").val();
  const branch2 = $("[name='branch2']").val();
  const year2 = $("[name='year2']").val();
  const arenaId2 = $("[name='arenaId2']").val();
  const collegeName2 = $("[name='collegename2']").val();

  // Validating Data
  if (!nameRegex.test(name)) {
    alert("Person1 Name is not valid");
    return;
  }
  if (!emailRegex.test(email)) {
    alert("Person1 Email is not valid");
    return;
  }
  if (!phoneRegex.test(phoneNo)) {
    alert("Person1 Phone Number is not valid");
    return;
  }
  if (!nameRegex.test(name2)) {
    alert("Person2 Name is not valid");
    return;
  }
  if (!emailRegex.test(email2)) {
    alert("Person2 Email is not valid");
    return;
  }
  if (!phoneRegex.test(phoneNo2)) {
    alert("Person2 Phone Number is not valid");
    return;
  }
  if (!branch.includes(branch)) {
    alert("Branch is not valid");
    return;
  }
  if (!year.includes(year)) {
    alert("Year is not valid");
    return;
  }

  // sending data to server
  const URL = 'http://localhost:3000/bug4ever/register';
  const data = {
    name,
    email,
    phoneNo,
    branch,
    year,
    arenaId,
    collegeName,
    teamName,
    transactionId,
    name2,
    email2,
    phoneNo2,
    branch2,
    year2,
    arenaId2,
    collegeName2
  }
  // $.ajax({
  //   url: URL,
  //   type: 'POST',
  //   data: data,
  //   success: function (response) {
  //     alert("Successfully Registered");
  //   },
  //   error: function (error) {
  //     alert("Error in registering");
  //   }
  // });

}