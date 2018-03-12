var submitButton = $("#submitButton");


submitButton.on("click", function(event){
	event.preventDefault();
	var initValue = parseInt($("#initValue").val());
	var noStyleFee = initValue - 20;
	var discount = noStyleFee / 4;

	$("#subtotalDisplay").text(initValue);
	$("#noStyleDisplay").text(noStyleFee);
	$("#discountDisplay").text(discount);

	$("#initValue").val("");

}); 