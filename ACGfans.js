// 时钟 $ 找 
var index = 0;
var timer;
$(document).ready(function () {

    timer = setInterval(show, 9000);
    $(".trap-left").click(function () {
        clearInterval(timer);
        --index;
        showImg(index);
    });
    $(".trap-right").click(function () {
        clearInterval(timer);
        ++index;
        showImg(index);
    });
    $(".dot-box .dot").mouseenter(function(){
        clearInterval(timer);
        index=$(".dot-box .dot").index($(this));
        showImg(index);
    });
});


// DOM BOM 
function show() {
    // console.log($(".imgs .img"));
    console.log("index=" + index);
    index++;
    index = index % $(".imgs .img").length;
    showImg1(index);
}

function showImg1(i) {
    $(".imgs .img").fadeOut();
    $(".imgs .img").eq(i).fadeIn();
    $(".dot-box .dot").removeClass("dot1");
    $(".dot-box .dot").eq(i).addClass("dot1");
}
function showImg(i) {
    i = i % $(".imgs .img").length;
    $(".imgs .img").fadeOut();
    $(".imgs .img").eq(i).fadeIn();
    $(".dot-box .dot").removeClass("dot1");
    $(".dot-box .dot").eq(i).addClass("dot1");
    timer = setInterval(show, 9000);
}