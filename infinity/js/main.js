$(window).scroll(function(){
if ($(window).scrollTop() > 750) {
$('header').addClass('fixed');
} else {
$('header').removeClass('fixed');
}
});
$(function(){
  $("#ABOUT").click(function(){ // отлавливаем нажатие на ссылку
    $('#ABOUT').addClass('green_color');
    $('#INTRODUCTION, #FEATURES').removeClass('green_color');
    $(".INTRODUCTION, .FEATURES").css({display:'none'});
      $(".ABOUT").css({display: 'block'}); // задаем стили
    });
  });
$(function(){
  $("#INTRODUCTION").click(function(){ // отлавливаем нажатие на ссылку
    $('#INTRODUCTION').addClass('green_color');
    $('#ABOUT, #FEATURES').removeClass('green_color');
    $(".ABOUT, .FEATURES").css({display:'none'});
      $(".INTRODUCTION").css({display: 'block'}); // задаем стили
    });
  });
$(function(){
  $("#FEATURES").click(function(){ // отлавливаем нажатие на ссылку
    $('#FEATURES').addClass('green_color');
    $('#ABOUT, #INTRODUCTION').removeClass('green_color');
    $(".ABOUT, .INTRODUCTION").css({display:'none'});
      $(".FEATURES").css({display: 'block'}); // задаем стили
    });
  });
  $(function(){
  var animateButton = function(e) {

    e.preventDefault;
    //reset animation
    e.target.classList.remove('animate');

    e.target.classList.add('animate');
    setTimeout(function(){
      e.target.classList.remove('animate');
    },1000);
  };

  var bubblyButtons = document.getElementsByClassName("bubbly-button");

  for (var i = 0; i < bubblyButtons.length; i++) {
    bubblyButtons[i].addEventListener('click', animateButton, false);
  }
    });
  $(function(){
    var text = $('.text').text(),
    textArr = text.split('');

$('.text').html('');

$.each(textArr, function(i, v){
  if(v == ' '){$('.text').append('<span class="space"></span>');}
  $('.text').append('<span>'+v+'</span>');
})
  });
