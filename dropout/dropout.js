/**
 * rainbow.js
 * Copyright Keisuke Kobayashi 2012
 */
$(document).ready(function(){
  var COLORS = [
    'rgb(235, 120, 164)', 'rgb(236, 191, 92)', 'yellow', 'rgb(146, 246, 144)', 'rgb(82, 182, 238)', 'rgb(79, 86, 181)', 'rgb(210, 122, 212)'
  ];
  var doms = $('.rainbow');
  doms.each(function (index) {
    var text = $(this).text();
    var html = "";
    for (var i = 0; i < text.length; i++) {
      html += "<span class ='rainbowword'style='color: " + COLORS[i % COLORS.length] + "'>" + text[i] + "</span>";
    }
    $(this).html(html);
  });
});
