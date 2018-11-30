window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
    document.getElementById("navbar").style.height = "60px";
    document.getElementById("navbar-image").style.width = "50px";
    document.getElementById("navbar-image").style.height = "50px";
  } else {
    document.getElementById("navbar").style.height = "100px";
    document.getElementById("navbar-image").style.width = "90px";
    document.getElementById("navbar-image").style.height = "90px";
  }
}