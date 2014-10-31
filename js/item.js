jQuery.support.cors = true;
$.support.cors = true;
var devKey = "4npra7dguufgq5575kkbdj9p";
$("#submitSearch").click(function(){
	var item = document.getElementById("itemSearch").value;
	var returnData;
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
	  		$.getJSON(response, function(json))
	  		var count = Object.keys(returnData.parse).length;
			var data = [];
			for(var i = 0; i < count; i++){
     			 data.push(returnData.parse[i]);
    		}
	  		var products = _.pluck(data, "products");
	  		console.log(products);
	  	}
	  });
});
