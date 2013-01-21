bb.parseResult = {};
bb.parseResult.cell = '<div class="parseResult">'
	+'<p class="pr_title">titlesdf sdafu ghsdo fgsdo ufguisd gfiu </p>'
	+'<p class="pr_unknown">Unknown words:</p>'
	+'</div>';


bb.parseResult.generateCell = function(result) {
	var ret = jQuery(bb.parseResult.cell);
	console.log(result);
	ret.find(".pr_title").text("" + result.input);
	return ret;
};

