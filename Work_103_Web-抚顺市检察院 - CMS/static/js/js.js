// 外链文件版本控制
// var linkstyle = document.getElementById('style1');
// linkstyle.href = 'static/css/css.css?v=' + new Date().getTime();

// 细览文章功能
$(function() { //字体大中小
	$(".index_switchsize span").click(function() {
		//获取para的字体大小
		var thisEle = $(".pages_content p,.pages_content,.pages_content font,.pages_content span,.pages_content div").css("font-size");
		//parseFloat的第二个参数表示转化的进制，10就表示转为10进制
		var textFontSize = parseFloat(thisEle, 10);
		//javascript自带方法
		var unit = thisEle.slice(-2); //获取单位
		var cName = $(this).attr("class");
		if (cName == "bigger") {
			if (textFontSize <= 22) {
				textFontSize += 2;
			}
		} else if (cName == "smaller") {
			textFontSize -= 2;
		}
		//设置para的字体大小
		$(".pages_content p,.pages_content,.pages_content font,.pages_content span,.pages_content div").css("font-size", textFontSize + unit);
	});
	$(".index_switchsize .medium").click(function() {
		$(".pages_content p,.pages_content,.pages_content font,.pages_content span,.pages_content div").css("font-size", "16px");
	})


	//打印
	var printAreaCount = 0;
	$.fn.printArea = function() {
		var ele = $(this);
		var idPrefix = "printArea_";
		removePrintArea(idPrefix + printAreaCount);
		printAreaCount++;
		var iframeId = idPrefix + printAreaCount;
		var iframeStyle = 'position:absolute;width:0px;height:0px;left:-500px;top:-500px;';
		iframe = document.createElement('IFRAME');
		$(iframe).attr({
			style: iframeStyle,
			id: iframeId
		});
		document.body.appendChild(iframe);
		var doc = iframe.contentWindow.document;
		$(document).find("link").filter(function() {
			return $(this).attr("rel").toLowerCase() == "stylesheet";
		}).each(
			function() {
				doc.write('<link type="text/css" rel="stylesheet" href="' +
					$(this).attr("href") + '" >');
			});
		doc.write('<div class="' + $(ele).attr("class") + '">' + $(ele).html() +
			'</div>');
		doc.close();
		var frameWindow = iframe.contentWindow;
		frameWindow.close();
		frameWindow.focus();
		frameWindow.print();
	}
	var removePrintArea = function(id) {
		$("iframe#" + id).remove();
	};
	//打印调用
	$("#btnPrint").click(function() {
		$("#UCAP-CONTENT").printArea();
	});

	var list01li = $('.list01 li');
	var li_len = list01li.length;
	if (li_len == 0){
		$('.xg-list').hide();
	}
})

//滚动条（从上到下）
$(function() {
  $('.jq22').liMarquee({
    direction: 'up', //滚动方向
    scrollamount: 30 //滚动速度
  });
});

//滚动条（从左到右）
var demoN1 = document.getElementById("rolldemoN1");
var demob1 = document.getElementById("rolldemoB1");
var demob2 = document.getElementById("rolldemoB2");
demob2.innerHTML = document.getElementById("rolldemoB1").innerHTML;

function MarqueeN1() {
    if (demoN1.scrollLeft - demob2.offsetWidth >= 0) {
        demoN1.scrollLeft -= demob1.offsetWidth;
    } else {
        demoN1.scrollLeft++;
    }
}
var myvarN1 = setInterval(MarqueeN1, 30);
demoN1.onmouseout = function() {
    myvarN1 = setInterval(MarqueeN1, 30);
}
demoN1.onmouseover = function() {
    clearInterval(myvarN1);
}

//滚动条（从左到右）
var demoN2 = document.getElementById("rolldemoN2");
var demos1 = document.getElementById("rolldemoS1");
var demos2 = document.getElementById("rolldemoS2");
demos2.innerHTML = document.getElementById("rolldemoS1").innerHTML;

function MarqueeN2() {
    if (demoN2.scrollLeft - demos2.offsetWidth >= 0) {
        demoN2.scrollLeft -= demos1.offsetWidth;
    } else {
        demoN2.scrollLeft++;
    }
}
var myvarN2 = setInterval(MarqueeN2, 30);
demoN2.onmouseout = function() {
    myvarN2 = setInterval(MarqueeN2, 30);
}
demoN2.onmouseover = function() {
    clearInterval(myvarN2);
}

// jQ插件
$(document).ready(function () {
	// SurSlide
	$('.hiSlider').hiSlider();
})
