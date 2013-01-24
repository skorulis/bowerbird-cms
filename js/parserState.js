bb = bb || {};
bb.ps = {};

bb.ps.termCell = '<li><input type="text" class="ps_term" /><a class="ps_addButton ui-state-default ui-corner-all" onclick="bb.ps.removeTerm(this)"><span class="ui-icon ui-icon-circle-minus"></span></a></li>';

bb.ps.addTerm = function() {
	var parent = $(".parseResult").find("ul.ps_term_list");
	console.log(parent.children().length);
	var newCell = $(bb.ps.termCell);
	parent.append(newCell);
};

bb.ps.removeTerm = function(itemNumber) {
	console.log(item);
};