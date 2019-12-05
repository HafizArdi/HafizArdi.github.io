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

    $(".image-destination").show(function() {
        var attr = $(this).attr('hero-image');
        if (typeof attr !== typeof undefined && attr !== false){
            $(this).css('background', 'url(../images/'+$(this).attr('hero-image')+'.jpg) no-repeat center');
            $(this).css('background-size', 'cover');
        } else {
            $(this).attr('src', '../images/'+$(this).attr('id')+'.jpg');
        }
    });
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

    $("a #example2").fancybox({
        'overlayShow'	: false,
        'transitionIn'	: 'elastic',
        'transitionOut'	: 'elastic'
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

function namedefine(){
    event.preventDefault();
    var ingambar = document.getElementsByClassName('inputgambar');
    var inlabel = document.getElementsByClassName('ingambarlabel');
    if(ingambar[0].value.length){
        inlabel[0].innerHTML =  ingambar[0].files[0].name;
        var oFReader = new FileReader();
        oFReader.onload = function(oFREvent) {
            document.getElementById("gambarpreview").src = oFREvent.target.result;
        };
        oFReader.readAsDataURL(ingambar[0].files[0]);
        }
        else{
        console.log('cancelled');
        }
    }
    $("#ingambar").change(function() {
    namedefine();
});


function validateForm() {
  var email = document.forms["myForm"]["email"].value;
  var password = document.forms["myForm"]["password"].value;
  var a =0;
  var b = 0;


  if (email == "" || password == "") {
    if(a == 0){
        document.getElementById("popup-danger").style.display="block";
        a = 1;
    }

    return false;

  }else if (email != "" && password != ""){
    if(a == 0){
        document.getElementById("popup-success").style.display="block";
        a = 1;
    }
    return false;
  }
}

function gagal(){
    document.getElementById("popup-danger").style.display="none";
    a = 0;
}


// tambah Trip
var modal = document.getElementById("tambahTrip");


var btn = document.getElementById("tambah");

var span = document.getElementsByClassName("close")[0];


btn.onclick = function() {
    modal.style.display = "block";
}


span.onclick = function() {
    modal.style.display = "none";
}


window.onclick = function(event) {
  if (event.target == modal) {
        modal.style.display = "none";
  }
}

// ubah Trip
var modal1 = document.getElementById("ubahTrip");


var btn1 = document.getElementById("ubah");

var span1 = document.getElementsByClassName("close1")[0];


btn1.onclick = function() {
    modal1.style.display = "block";
}


span1.onclick = function() {
    modal1.style.display = "none";
}


window.onclick = function(event) {
  if (event.target == modal) {
        modal1.style.display = "none";
  }
}


