jQuery.support.cors = true;
$.support.cors = true;
$("#submitSearch").click(function(){
	var item = document.getElementById("itemSearch").value;
	$.ajax({
	  	url: "http://api.remix.bestbuy.com/v1/products(search="+item+")",
	  	dataType:"jsonp",
	  	cache: true,
	  	data: {
	  		format: 'json',
	  		show: 'sku,name,salePrice',
	  		apiKey: '4npra7dguufgq5575kkbdj9p'
	  	},
	  	success: function(response){
	  		$('#displayItems').children('div').remove();
	  		var data = response;
	  		for(var i = 0; i < 10; i++){
	  			$("#displayItems").append("<div class = 'item'><p class = 'itemname'> "+data.products[i].name+ "</p><p class = 'itemPrice'>"+data.products[i].salePrice+"</div>");
	  		}
	    }
	});
	//https://api.remix.bestbuy.com/v1/products/3365028.json?apiKey=4npra7dguufgq5575kkbdj9p
});
