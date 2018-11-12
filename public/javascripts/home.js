$(document).ready(function(){

  console.log($(window).width());

  $(function () {
  $(document).scroll(function () {
    var $nav = $(".navbar-fixed-top");
    $nav.toggleClass('scrolled', $(this).scrollTop() > $nav.height());
    console.log($(document).scrollTop());
    if ($(document).scrollTop() == 0) {
      $('.underline').removeClass('underline');
      $('#navhome').addClass('underline');
    }
  });
});

  $('#tog').click(function(){
    $('.navbar-fixed-top').toggleClass('scrolled');
  });

  $(function() {
      // Smooth Scrolling
      $('a[href*="#"]:not([href="#"])').click(function() {
        if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
          var target = $(this.hash);
          target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
          if (target.length) {
            $('html, body').animate({
              scrollTop: target.offset().top
            }, 1000);
            return false;
          }
        }
      });
    });

$('.options li').click(function(){
  $('.title1').addClass('title');
  $('.title1').removeClass('title1');
});


$('#1l, #2l, #3l, #4l, #5l, #6l, #7l, #3r, #5r, #6r, #7r').hide();

// to get login forms of each category individually...
$('#admin').click(function(){
 $('#1l').fadeIn(1000);
 $('#2l, #3l, #4l, #5l, #6l, #7l, #3r, #5r, #6r, #7r').hide();
});

$('#management').click(function(){
 $('#2l').fadeIn(1000);
 $('#1l, #3l, #4l, #5l, #6l, #7l, #3r, #5r, #6r, #7r').hide();
});

$('#faculty').click(function(){
 $('#3l').fadeIn(1000);
 $('#2l, #1l, #4l, #5l, #6l, #7l, #3r, #5r, #6r, #7r').hide();
});

$('#grievance_cell_staff').click(function(){
 $('#4l').fadeIn(1000);
 $('#2l, #3l, #1l, #5l, #6l, #7l, #3r, #5r, #6r, #7r').hide();
});

$('#student').click(function(){
 $('#5l').fadeIn(1000);
 $('#2l, #3l, #4l, #1l, #6l, #7l, #3r, #5r, #6r, #7r').hide();
}); 

$('#parent').click(function(){
 $('#6l').fadeIn(1000);
 $('#2l, #3l, #4l, #5l, #1l, #7l, #3r, #5r, #6r, #7r').hide();
});	

$('#nonteaching').click(function(){
 $('#7l').fadeIn(1000);
 $('#2l, #3l, #4l, #5l, #6l, #1l, #3r, #5r, #6r, #7r').hide();
});

 // to get the registration form of each category....

 $('#r3').click(function(){
   $('#3r').fadeIn(1000);
   $('#2l, #3l, #4l, #5l, #6l, #1l, #7l, #5r, #6r, #7r').hide();
 });

 $('#r5').click(function(){
   $('#5r').fadeIn(1000);
   $('#2l, #3l, #4l, #5l, #6l, #1l, #3r, #7l, #6r, #7r').hide();
 });

 $('#r6').click(function(){
   $('#6r').fadeIn(1000);
   $('#2l, #3l, #4l, #5l, #6l, #1l, #3r, #5r, #7l, #7r').hide();
 });

 $('#r7').click(function(){
   $('#7r').fadeIn(1000);
   $('#2l, #3l, #4l, #5l, #6l, #1l, #3r, #5r, #6r, #7l').hide();
 });

 $('.open').click(function(){
  $('.options').fadeToggle(500);
});

 //this is for getting the left border in every list option...
 var headerr = document.getElementById("options");
 var btnss = headerr.getElementsByClassName("btn");
 for (var i = 0; i < btnss.length; i++) {
  btnss[i].addEventListener("click", function() {
    var currentt = document.getElementsByClassName("1");
    currentt[0].className = currentt[0].className.replace(" 1", "");
    this.className += " a";
  });
}
// Add active class to the current button (highlight it)
var header = document.getElementById("options");
var btns = header.getElementsByClassName("btn");
for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function() {
    var current = document.getElementsByClassName("a");
    current[0].className = current[0].className.replace(" a", "");
    this.className += " a";
  });
}

// Add active class to the current button (highlight it)
var header = document.getElementById("linkcontainer");
var btnh = header.getElementsByClassName("btnh");
for (var i = 0; i < btnh.length; i++) {
  btnh[i].addEventListener("click", function() {
    var currenth = document.getElementsByClassName("underline");
    currenth[0].className = currenth[0].className.replace(" underline", "");
    this.className += " underline";
  });
}

$(".navbar-nav li a").click(function(event) {
    $(".navbar-collapse").collapse('hide');
  });

$('#lgnbtn, .options li').click(function(){

  if ($(window).width() < 768) {
    $('.options').fadeToggle();
    $('.options').css({
      'position': 'fixed',
      'top': '0',
    });

    $('.options li').css({
      'text-align': 'center'
    });
  }else{
    $('options').show();
    $('.options').css({
      'position': 'absolute'
    });

    $('.options li').css({
      'text-align': 'left'
    });
  }

});

        window.sr = ScrollReveal();
        sr.reveal('.navbar', {
          duration: 1000,
          origin:'top'
        });
        sr.reveal('#logo', {
          duration: 1000,
          origin:'left',
          distance:'300px'
        });
        sr.reveal('#sitetitle', {
          duration: 1000,
          origin:'bottom',
          delay: '500',
          distance:'300px'
        });
        sr.reveal('#aboutheading', {
          duration: 2000,
          origin:'right',
          distance: '300px',
          viewFactor: 0.5
        });
        sr.reveal('#aboutinfo', {
          duration: 1000,
          origin:'bottom',
          viewFactor: 0.5
        });
        sr.reveal('#contactheading', {
          duration: 2000,
          origin:'right',
          distance:'300px',
          viewFactor: 0.5
        });
        sr.reveal('#contactinfo', {
          duration: 1000,
          origin:'left',
          distance:'300px',
          viewFactor: 0.5
        });
        sr.reveal('#map', {
          duration: 1000,
          origin:'right',
          distance:'300px',
          viewFactor: 0.5
        });


});