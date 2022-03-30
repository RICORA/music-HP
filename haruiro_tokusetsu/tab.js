$(function(){
   $("#menu li a").on("click", function() {
       $("#box div").hide();
       $($(this).attr("href")).fadeToggle(500);
   });
   return false;
});