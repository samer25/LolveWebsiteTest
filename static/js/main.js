$(document).ready(function () {

    const elementBox = document.getElementById("box");
    // $(".wrap").hide();

    elementBox.scrollIntoView();


});

// function scrollFunction(id) {
//     if (id === '#philosophy-content') {
//         $(".wrap2").toggleClass('on2');
//         window.setTimeout(function () {
//             $(".box").hide()
//
//
//         }, 2000);
//
//         $("body,html").animate(
//             {
//                 scrollTop: $(id).offset().top
//             },
//             800 //speed
//         );
//
//     }
//
//     if (id === '#artefact') {
//         $("body,html").animate(
//             {
//                 toggleClass: $('.wrap').toggleClass('on')
//             },
//             800 //speed
//         );
//         window.setTimeout(function () {
//             $(".box").hide()
//         }, 2000);
//         $(".box").css({'padding-top': '160%%'});
//         $(".form-box").animate({'margin-top': '0'}, 1600);
//
//     }
//
//
// }
// $(document).ready(function () {
//
//     const elementBox = document.getElementById("box");
//     // $(".wrap").hide();
//
//     elementBox.scrollIntoView();
//
//
// });

function scrollFunction(id) {
    const backBtn = document.getElementById('back2Top')
    if (id === '#artefact') {
        $(backBtn).fadeIn();
        $(backBtn).css({'transform': 'rotate(90deg)'});
        $('.form-box').css({'display': 'block'})
        $("html, body").animate({scrollTop: $(id).offset().top}, 1800);
        $(".form-box").animate({'opacity': '1'}, 1800);
        $('.box').animate({'display': 'none'}, 1800);

    } else if (id === '#philosophy-content') {
        $(backBtn).fadeIn();
        $(backBtn).css({'transform': 'rotate(270deg)'});
        $('.box-text').css({'display': 'block'})
        $("html, body").animate({scrollTop: $(id).offset().top}, 1800);
        $(".box-text").animate({'opacity': '1', 'margin': 'auto'}, 1800);
        $('.box').animate({'display': 'none'}, 1800);
    }


}

// $(window).scroll(function () {
//     const height = $(window).scrollTop();
//     if (height > 100 || height < 1) {
//         $('#back2Top').fadeIn();
//     } else {
//         $('#back2Top').fadeOut();
//     }
// });
$(document).ready(function () {
    $("#back2Top").click(function (event) {
        $('#back2Top').fadeOut();
        $('.box').animate({'display': 'block'}, 1800);
        $("html, body").animate({scrollTop: $('#box').offset().top}, 1800);
        $(".box-text").animate({'opacity': '0', 'margin': 'auto', 'display': 'none'}, 1800);
        $(".form-box").animate({'opacity': '1', 'display': 'none'}, 1800);
    });

});