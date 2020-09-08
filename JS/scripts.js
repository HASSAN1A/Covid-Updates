$(document).ready(function () {
    $(".pic1").click(function () {
        $(".pic1").hide(100);
        $(".p1").show(100);
    })
    $(".p1").click(function () {
        $(".p1").hide(100);
        $(".pic1").show(100);
    });
});
$(document).ready(function () {
    $(".pic2").click(function () {
        $(".pic2").hide(100);
        $(".p2").show(100);
    })
    $(".p2").click(function () {
        $(".p2").hide(100);

        $(".pic2").show(100);
    });
});
$(document).ready(function () {
    $(".pic3").click(function () {
        $(".pic3").hide(100);
        $(".p3").show(100);
    })
    $(".p3").click(function () {
        $(".p3").hide(100);
        $(".pic3").show(100);
    });
    $(".here").click(function(){
        $(".fill-form").slideToggle(500);
    });
    $("#submit").click(function(event){
        event.preventDefault();
    });
    $('li').click(function(){
        var input = $(this).find('input');
        if (input.length>0) {
            if (input[0].checked) {
                input[0].checked = false
            } else {
                input[0].checked = true
            };
        };
    });
});