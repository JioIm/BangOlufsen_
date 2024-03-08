$(function () {
    $('.main_visual_slide').slick({
        autoplay: true,
        autoplaySpeed: 3000,
        pauseOnHover: false,
        arrows: false,
        dots: true,
    });

    // $('.img_box').slick({
    //     autoplay: false,
    // });

    $('.MainVisual .arrows .left').on('click', function () {
        $('.main_visual_slide').slick('slickPrev')
    });

    $('.MainVisual .arrows .right').on('click', function () {
        $('.main_visual_slide').slick('slickNext')
    });

    $('.mopen').on('click', function () {
        $('.Gnb').toggleClass('on');
        $(this).find('.hamburger').toggleClass('is-active');
    });

    $('.tab_m li').on('click', function (e) {
        e.preventDefault();
        const idx = $(this).index();
        $('.tab_content .content')
            .eq(idx)
            .addClass('on')
            .siblings()
            .removeClass('on');
        $(this)
            .addClass('on')
            .siblings()
            .removeClass('on');
    });

    $('#promo_video').YTPlayer({
        videoURL: 'https://youtu.be/aAgyf3NUDyI',
        containment: '.MainVideo .movie_case',
        mute: true,
        showControls: false,
        optimizeDisplay: false,
        playOnlyIfVisible: true,
        //autoPlay: false,
    });

    let movie = true;
})