
$(document).ready(function(){

	var st = $(this).scrollTop(); 

    $(".scrool_bg, p, h1").css({

    "transform" : "translate(0%, " + st + "%"

 });

      
});
