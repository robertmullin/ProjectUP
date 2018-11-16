

$(document).ready(function(){
   $('img').svgmagic();
}); 

$(document).ready(function() {
  var $reveal = $(".reveal"),
      revealWHalf = $reveal.width() / 2;
  $(document).on("mousemove", function(e) {
    $reveal.css({"left": e.pageX - revealWHalf, "top": e.pageY - revealWHalf});
  });
});

// MOBILE MENU 

function myFunction() {
  var x = document.getElementsByTagName("nav");
  if (x[0].style.display === "flex") {
    x[0].style.display = "none";
  } else {
    x[0].style.display = "flex";
  }
} 




