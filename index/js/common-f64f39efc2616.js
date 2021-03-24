// JavaScript Document
//
$(document).ready(function() {

    //
    /*	var tt = location.hash;
		if(tt==''){openColorBox2()}
		else{ 
				//cct();
      		};*/
    //
    $("#bacc").ajaxStart(function() {
        $(this).fadeIn(500)
    });
    $("#bacc").ajaxStop(function() {
        $(this).fadeOut(300)
    });
    //
    $('body').overlayScrollbars({
        className: "os-theme-dark"
    });
    //

    //

    // 當 hash 改變時 callback 用
    function load(num) {
        $('#content').load(num + ".html");
    }
    // 初始化 $.history
    $.history.init(function(url) {
        load(url == "" ? "home" : url);
    });
    // 當點擊 #ajax-links 中的超連結時
    $('.m1,m2,m3,m4,m5,m6,m7').live('click', function(e) {
        var url = $(this).attr('href');
        var x = $(window).width();
        // 取得 #hash 去除掉 # 後的值
        url = url.replace(/^.*#/, '');
        // 載入
        $.history.load(url);
        return false;
    });
    //
    // 設定產生共有 40 個指定圖片在網頁中飄移
    $.firefly({
        images: ['images/star.png', 'images/star2.png', 'images/star.png'],
        total: 30,
        on: '#allcontent'
    });
    //

});
//


function w2() {
    window.alert("敬請期待")
}

function openColorBox2() {
    $.colorbox({
        href: 'cf.html',
        iframe: true,
        innerWidth: 800,
        innerHeight: 449
    });
}