var bb =  { };

bb.baseUrl = "http://127.0.0.1";

bb.searchUrl = function(port,query) {
	console.log("Base url " + bb.baseUrl);
	return bb.baseUrl + ":" + port + "/search?query=" + query;
};