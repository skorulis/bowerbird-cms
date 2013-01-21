
function clicked() {
	
	var port = $("#port").val();
	var query = $("#query").val();
	var url = bb.searchUrl(port,query);
	console.log("URL " + url);
	$.ajax({
        url: url,
        type: 'GET',
        dataType: 'html',
        success:gotSearch,
        error: ajaxError
	});
}

function gotSearch(data,textStatus,xhr) {
	var obj = jQuery.parseJSON(data);
	console.log(obj);
	var container = jQuery("#results");
	obj.data.forEach(function(element) {
		var cell = bb.parseResult.generateCell(element);
		container.append(cell);
	});
	
}

function ajaxError(xhr, textStatus, errorThrown) {
	console.log(textStatus);
	console.log(errorThrown);
	console.log(xhr);
}
