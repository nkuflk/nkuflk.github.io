var loveTime = getLoveTime("2014-10-12 02:00:00");

function getLoveTime(loveTime) {
	var curDate = new Date();
	var curMilliSeconds = curDate.getTime();
	loveTime = loveTime.replace(/-/g, "/")
	var loveDate = new Date(loveTime);
	var loveMilliSeconds = loveDate.getTime();
	return parseInt((curMilliSeconds-loveMilliSeconds)/parseInt(1000));
}

var str = loveTime + " seconds ago, you gave me a romantic dream of my life.\nSince then, I missed you every second^500.^500.^500.^500.^500.^500.\n\nI want to tell you:\nI will use my whole life to carefully protect our love.\nAnd love you forever.\n\nMiss you\n                  By heyuntao";

$(function(){
	$(".element").typed({
		strings: [str],
		typeSpeed: 100
	});
});
