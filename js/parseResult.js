bb.parseResult = {};
bb.parseResult.cell = '<div class="parseResult"><p class="pr_title">TITLE</p><p class="pr_result">RESULT</p><p class="pr_unknown">Unknown words:</p></div>';

bb.parseResult.unknownWord = '<a href="google.com">TEST</a>';


bb.parseResult.generateCell = function(result) {
	var ret = jQuery(bb.parseResult.cell);
	console.log(result);
	ret.find(".pr_title").text(result.input);
	ret.find(".pr_result").text(result.result);
	if(result.result=="SUCCESS") {
		ret.addClass("pr_success");
	} else {
		ret.addClass("pr_failure");
	}
	result.unknownWords.forEach(function(element) {
		var html = '<a href="google.com" onclick="unknowClicked()">' + element + '</a>'; 
		var item = jQuery(html);
		ret.append(item);
	});
	return ret;
};

