var index = 1;
var time = "";
$(document).ready(function() {

    show_img(index);

    $('.count li').hover(function() {
        clearTimeout(time);
        var icon = $(this).val();
        $(".count li").removeClass("current").eq(icon-1).addClass("current");
        $(".list li").hide().stop(true, true).css("display", "none").eq(icon-1).css("display", "block");
    }, function() {
        index = $(this).val() > 3 ? 1 : $(this).val() + 1;
        time = setTimeout("show_img(" + index + ")", 500);
    });

    $('#list').mouseenter(function() {
        clearTimeout(time);
    });
    $('#list').mouseleave(function() {
        var index = $('.count .current').val();
        time = setTimeout("show_img(" + index + ")", 500)
    });

    $('.pic').click(function() {
        open_btn();
    });

    $('#close_btn').click(function() {
        close_btn()
    })
});

function open_btn() {
    $('.pic').animate({
        left: '-10%',
            speed: 'fast'
    },
        function() {
        $('.body-part .pict').animate({
            left: '0',
            speed: 'slow'
        })
    })
}

function close_btn() {
    $('.body-part .pict').animate({
        left: '-105%',
            speed: 'slow'
    },
        function() {
        $('.body-part .pic').animate({
            left: '-6%',
            speed: 'fast'
        })
    })
}

function show_img(num) {
    $(".count li").removeClass("current").eq(num-1).addClass("current");
    $(".list li").css("display", "none").eq(num-1).css("display", "block");
    var index = num > 3 ? 1 : num + 1;
    time = setTimeout("show_img(" + index + ")", 2000);
}

function to_url() {
    window.open("http://game.qq.com/");
}