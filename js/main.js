$(document).ready(function() {
  $('.stickyNav').waypoint(function(direction) {
    if(direction == 'down'){
      $('nav').addClass('sticky');
    }else{
      $('nav').removeClass('sticky');
    }
  });
    var mixer = mixitup('.myMix')
});

$('a').on('click',function(event){
  if(this.hash !== ""){
      event.preventDefault();
      var hash = this.hash;
      $('html,body').animate({
          scrollTop: $(hash).offset().top
      },300,function(){
          window.location.hash = hash;
      });
  };
});

$(function(){
  $.scrollUp();
});
