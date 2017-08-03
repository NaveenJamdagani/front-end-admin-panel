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
		$(this).siblings(".list-all-subtypes").toggleClass("show")
	});
	$(".toggle-left-navbar").on("click",function()
	{
		$(".left-nav-dropdown").toggleClass("active");
		$(".content-bar").toggleClass("active");

	});
	$("#sign-up-class").on("click",function()
	{
		$("#login-form").toggleClass("active");
		$("#sign-up-form").toggleClass("active");
	});
	window.onload = function () {
	var chart = new CanvasJS.Chart("chartContainer", {
		theme: "theme2",//theme1
		title:{
			text: "Basic Column Chart - CanvasJS"              
		},
		animationEnabled: false,   // change to true
		data: [              
		{
			// Change type to "bar", "area", "spline", "pie",etc.
			type: "column",
			dataPoints: [
				{ label: "apple",  y: 10  },
				{ label: "orange", y: 15  },
				{ label: "banana", y: 25  },
				{ label: "mango",  y: 30  },
				{ label: "grape",  y: 28  }
			]
		}
		]
	});
	chart.render();
}
});
