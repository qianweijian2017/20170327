$(function(){ 
	$("li.dropdown[hover=1]").hover(function(){ 
		$(this).addClass("open");
	},function(){
		$(this).removeClass("open");
	})


	// 首页商品的提示信息
	$('[data-toggle="tooltip"]').tooltip();

})