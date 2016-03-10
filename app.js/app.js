$(window).scroll(function(){
    $(".introHeader").css("opacity", 1 - $(window).scrollTop() / 250);
  });

$(window).scroll(function(){
   
     if ($(document).scrollTop() > 2150) {
      $(".exitFooter").fadeIn(1200);
    }
    else{
        $(".exitFooter").fadeOut("fast");
    }
});


 

