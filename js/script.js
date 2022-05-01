// event pada saat link di klik
$('.page-scroll').on('click', function(e){

    // ambil isi href
    var tujuan = $(this).attr('href');
    // tangkap element yg bersangkutan
    var elemenTujuan = $(tujuan);


    // pindahkan scroll
    $('html,body').animate({
        scrollTop: elemenTujuan.offset().top - 50
    }, 700, 'easeInOutExpo');


    e.preventDefault();


});



    // Parallax


// About
$(window).on('load', function() {
    $('.pKiri').addClass('pMuncul');
    $('.pKanan').addClass('pMuncul');
    $('.indo').addClass('indoMuncul');
    $('.eng').addClass('engMuncul');
});



$(window).scroll(function() {
    var wScroll = $(this).scrollTop();


    // Jumbotron
    $('.jumbotron img').css({
        'transform' : 'translate(0px, '+ wScroll/4 +'%)'
    });


    $('.jumbotron h1').css({
        'transform' : 'translate(0px, '+ wScroll/2 +'%)'
    });


    $('.jumbotron p').css({
        'transform' : 'translate(0px, '+ wScroll/1.2 +'%)'
    });


    // Portfolio
    if( wScroll > $('.portfolio').offset().top -250 ) {
        $('.portfolio .thumbnail').each(function(i) {
            setTimeout(function() {
                $('.portfolio .thumbnail').eq(i).addClass('muncul');
                    }, 300 * (i+1));
        });
    }





});









