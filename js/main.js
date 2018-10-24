   
/*$('svg').on('mousemove',function(e) {
    
    $('.a').attr('cx',e.pageX).attr('cy',e.pageY)
      
}) */

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