 $(document).ready(function (){
	
// 	// DROPDOWN TOGGLE
	$('.dropdown-link').on('click', function(e) {
		e.stopPropagation();
		if($(this).siblings(".dropdown-content").hasClass("show"))
		{
			$(".dropdown-content").removeClass("show");
		}
		else 
		{
			$(".dropdown-content").removeClass("show");
			$(this).siblings(".dropdown-content").addClass("show");
		}
	});
	$(".dropdown-content").on("click",function(e)
	{
		e.stopPropagation();
	})
	$(document).click(function(){
    	$(".dropdown-content").removeClass("show");
	});
	$(".dropdown-list").on("click",function()
	{
		if($(this).siblings(".list-all-subtypes").hasClass("show"))
		{
			$(".list-all-subtypes").removeClass("show");
		}
		else
		{
			$(this).siblings(".list-all-subtypes").addClass("show");
		}
	});
});

// 	document.querySelector('.dropdown-link').addEventListener('click', function (e) {
// 		if(e.target.siblings('.dropdown-content').classList.consists('show')) {
// 			e.target.siblings('.dropdown-content').classList.remove('show')
// 		}
// 		else {
// 			e.target.siblings('.dropdown-content').classList.add('show')
// 		}
// 	})
// })
/* $(document).ready(function (){
	
	$('.dropdown-link').on('click', function() {
			$('.dropdown-content').hide();
	$(this).siblings('.dropdown-content').show(500);
	});
	$("#content-bar").on("click",function()
	{
		$('.dropdown-content').hide();
	});
	$("#toggle-sidebar").on("click",function()
	{
		$("#left-nav-bar").toggle(500);
	});
});*/
