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
    // $('.kawah-ijen').append('<button class="">See Detail</button>')
    // $('#btn-ijen').html('Booking Sekarang');
    $('.kawah-ijen .star').bintang();
    $('.gunung-bromo .star').bintang();
    $('.papuma .star').bintang();
    $('.baluran .star').bintang();
    $('.borobudur .star').bintang();
    $('.labuan-bajo .star').bintang();

    $('#register').validate({
        onclick: false, // <-- add this option
        rules: {
            state: "required"
        },
        messages: {
            state: {
                required: "The State is required!"
            }
        },
        errorPlacement: function (error, element) {
            alert(error.text());
        }
    });

    window.onscroll = function() {myFunction()};
        
    function myFunction() {
        if (document.body.scrollTop > 230 || document.documentElement.scrollTop > 230) {
        document.getElementById("img1").className = "slideUp";
        document.getElementById("img2").className = "slideUp";
        document.getElementById("img3").className = "slideUp";
        }
    }


    // $('.kawah-ijen').css({'background-color' : '#fff', 'text-align': 'right'});
    // $('.kawah-ijen').css('background-color', '#fff');

    // $('.kawah-ijen').addClass('slideUp');
    // $('.kawah-ijen').removeClass('slideUp');

    // $('.my-file').


    // $('#myForm').on('submit', function(ev) {
    //     ev.stopPropagation();
    //     console.log('perform form validation...');
    //     // return validateForm();
    //     let namaEl = $('#inputAtas');
    //     let msg = $('<label/>');
    //     if(namaEl.val() == "") {
    //         msg.html('Isi nama');
    //         namaEl.parent().append(msg);
    //         setTimeout(function(){
    //             msg.remove();
    //         }, 5000);
    //         return false;
    //     }
    //     return true;
    // });
});