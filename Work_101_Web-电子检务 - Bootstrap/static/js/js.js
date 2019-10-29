// Nav
$(".SurTab").slide({
  titCell: ".SurTabMenu li",
  mainCell: ".SurTabContent",
  trigger: "click"
});

// 背景色
$(document).ready(function() {
  var iconColorArray = ["#df9192", "#da9dbd", "#89c2d8", "#99d6da", "#a6d49b", "#dbba8f"];  //背景色数组
  var dzjListI = $(".SurTabBox i");                                                         //背景色选择器
  for (var i = 0, j = 0; i < dzjListI.length; i++, j++) {                                   //遍历选择器
    if (j >= iconColorArray.length) j = 0;                                                  //判断是否超出背景数组范围，是则返回数组第一个元素
    dzjListI.eq(i).css("background-color", iconColorArray[j]);                              //背景色数组赋值给背景色选择器
  }
})

// Admin下拉菜单
$(document).ready(function() {
  $("#dzjw_admin").click(function() {
    $("#dzjw_adminDownMenu").show();
  })
})

//点击元素以外任意地方隐藏该元素的方法
$(document).click(function(e) {
  var target = $(e.target);
  if (target.closest("#dzjw_admin").length != 0) return;
  $("#dzjw_adminDownMenu").hide();
});
