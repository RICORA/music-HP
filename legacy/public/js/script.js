$(function(){$("nav div.panel").hide();$(".menu").click(function(){$(this).toggleClass("menuOpen").next().slideToggle();});})

function writeHeaderMenu(num){
    var html = "";
    html += '<nav id="mainNav">';
    html += '<div class="inner">';
    html += '<a class="menu" id="menu"><span>MENU</span></a>';
    html += '<div class="panel">';
    html += '<ul>';
    html += '<li id="headerMenu1"><a href="index.html"><strong>トップ</strong><span>Top</span></a></li>';
    html += '<li id="headerMenu2"><a href="activities.html"><strong>活動内容</strong><span>Activities</span></a></li>';
    html += '<li id="headerMenu3"><a href="products.html"><strong>過去の作品</strong><span>Products</span></a></li>';
    html += '<li id="headerMenu4"><a href="contact.html"><strong>問い合わせ</strong><span>Contact</span></a></li>';
    html += '<li id="headerMenu5"><a href="link.html"><strong>関連リンク集</strong><span>Link</span></a></li>';
    html += '</ul>';
    html += '</div>';
    html += '</div>';
    html += '</nav>';

    document.write(html);

	var currentMenuId = "headerMenu" + num;
    var currentMenu = document.getElementById(currentMenuId);
	currentMenu.classList.add("current-menu-item");	
}

function writeFooterMenu(num){
    var html = "";
    html += '<footer id="footer">';
    html += '<div class="inner">';
    html += '<ul class="footnav">';
    html += '<li id="footerMenu1"><a href="index.html">トップ</a></li>';
    html += '<li id="footerMenu2"><a href="activities.html">活動内容</a></li>';
    html += '<li id="footerMenu3"><a href="products.html">過去の作品</a></li>';
    html += '<li id="footerMenu4"><a href="contact.html">問い合わせ</a></li>';
    html += '<li id="footerMenu5"><a href="link.html">関連リンク集</a></li>';
    html += '</ul>';
    html += '</div>';
    html += '</footer>';

    document.write(html);

	var currentMenuId = "footerMenu" + num;
    var currentMenu = document.getElementById(currentMenuId);
	currentMenu.classList.add("current-menu-item");	
}