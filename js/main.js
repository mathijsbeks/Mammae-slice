$( document ).ready(function() {
  
$('.fancybox-media').fancybox({
		openEffect  : 'none',
		closeEffect : 'none',
		helpers : {
			media : {}
		}
	});

$("nav .search").click(function(e) {
  $("#search_container").toggle();
  $("#btn").toggle();
  e.preventDefault();
  $( "#search" ).focus();
});

if ($("body").hasClass("home")) {
  $('.promo').hover(function(){
  	$(this).addClass("active");
  	$(this).next().addClass("active");
  }, function() {
  	$(this).removeClass("active");
  	$(this).next().removeClass("active");
  }
  );
}

});