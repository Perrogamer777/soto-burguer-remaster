window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
    document.getElementById("barra").style.top = "0";
  } else {
    document.getElementById("barra").style.top = "-500px";
  }
}