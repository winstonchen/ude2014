jQuery.support.cors = true;
$.support.cors = true;
var devKey = "4npra7dguufgq5575kkbdj9p";
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
	  		var data = response;
	  		console.log(data.products);
	    }
	});
});
