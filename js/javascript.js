$.fn.bintang = function(){
    var star = this.attr('rating');
    if (star == "1") {
        this.append(`
        <img src="../images/star.svg" alt="">
        <img src="../images/grey-star.svg" alt="">
        <img src="../images/grey-star.svg" alt="">
        <img src="../images/grey-star.svg" alt="">
        <img src="../images/grey-star.svg" alt="">
        `);
    } else if (star == "2") {
        this.append(`
        <img src="../images/star.svg" alt="">
        <img src="../images/star.svg" alt="">
        <img src="../images/grey-star.svg" alt="">
        <img src="../images/grey-star.svg" alt="">
        <img src="../images/grey-star.svg" alt="">
        `);
    } else if (star == "3") {
        this.append(`
        <img src="../images/star.svg" alt="">
        <img src="../images/star.svg" alt="">
        <img src="../images/star.svg" alt="">
        <img src="../images/grey-star.svg" alt="">
        <img src="../images/grey-star.svg" alt="">
        `);
    } else if (star == "4") {
        this.append(`
        <img src="../images/star.svg" alt="">
        <img src="../images/star.svg" alt="">
        <img src="../images/star.svg" alt="">
        <img src="../images/star.svg" alt="">
        <img src="../images/grey-star.svg" alt="">
        `);
    } else if (star == "5") {
        this.append(`
        <img src="../images/star.svg" alt="">
        <img src="../images/star.svg" alt="">
        <img src="../images/star.svg" alt="">
        <img src="../images/star.svg" alt="">
        <img src="../images/star.svg" alt="">
        `);
    }
    
}

$(document).ready(function(){
    console.log('document ready');

    $('.kawah-ijen .star').bintang();
    $('.gunung-bromo .star').bintang();
    $('.papuma .star').bintang();
    $('.baluran .star').bintang();
    $('.borobudur .star').bintang();
    $('.labuan-bajo .star').bintang();

    $(window).scroll(function(){
        if($(this).scrollTop() > 40){
            $('#topBtn').fadeIn();
        } else{
            $('#topBtn').fadeOut();
        }
    });
    
    $("#topBtn").click(function(){
        $('html ,body').animate({scrollTop : 0},800);
    });

    window.onscroll = function() {myFunction()};
        
    function myFunction() {
        if (document.body.scrollTop > 230 || document.documentElement.scrollTop > 230) {
        document.getElementById("img1").className = "slideUp";
        document.getElementById("img2").className = "slideUp";
        document.getElementById("img3").className = "slideUp";
        }
    }
});