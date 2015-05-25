setInterval(function(){	
	var lowestCost = 100;
	$(".iap-cell").each(function(){
		if ($(this).find(".energy").is(":visible") && $(this).data("cost") < lowestCost){
			lowestCost = $(this).data("cost");
		}
	});
	$(".iap-cell").each(function(){
		if ($(this).find(".energy").is(":visible") && $(this).data("cost") == lowestCost && $(this).data("cost") <= $("#coins").data("amount")){
			$(this).click();
			$("#cell-upgrade").click();
		}
	});
},1000);