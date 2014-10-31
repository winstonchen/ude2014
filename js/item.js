jQuery.support.cors = true;
$.support.cors = true;
function search(){
	$("#submitSearch").click(function(){
		var item = document.getElementById("itemSearch").value;
		$.ajax({
		  	url: "http://api.remix.bestbuy.com/v1/products(search="+item+")",
		  	dataType:"jsonp",
		  	cache: true,
		  	data: {
		  		format: 'json',
		  		apiKey: '4npra7dguufgq5575kkbdj9p'
		  	},
		  	success: function(response){
		  		$('#displayItems').children('div').remove();
		  		var data = response;
		  		console.log(data);
		  		for(var i = 0; i < 10; i++){
		  			$("#displayItems").append("<div class = 'item'><p class = 'itemname'> "+data.products[i].name+ "</p><p class = 'itemPrice'>"+data.products[i].salePrice+"<img src = '"+data.products[i].image+"'></div>");
		  			if(data.products[i].customerReviewAverage == null){
		  				$("#displayItems").append("<p class = 'rating'> Rating: No Review</p>");
		  			} else {
		  				$("#displayItems").append("<p class = 'rating'> Rating: "+data.products[i].customerReviewAverage+"</p>");
		  			}
		  		}
		  	}
		});
	});
}