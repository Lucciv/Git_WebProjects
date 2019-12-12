$(document).ready(function () {
	// textScroll
	jQuery(".txtScroll-left").slide({titCell:".hd ul",mainCell:".bd ul",autoPage:true,effect:"left",autoPlay:true,scroll:3,vis:4,trigger:"click"});
	// Toggle
	var strNum = $(".ba_wordContent h5,.ba_wordContent p").text().length;
	if (strNum > 200) {
	  $("#ba_togglebox").hide();
	}
})
