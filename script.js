/*** slider ***/
var index = 0;

$('#slider-handled').click(function() {
  
  index++;
  
  var currentImg = $('.show');
  var nextImg = currentImg.next();
  var firstImg = $('.slider-container').first();
  
  if (index < 3){
    
    currentImg.removeClass('show');
    nextImg.addClass('show');
  
  } else {
    index = 0;
    currentImg.removeClass('show');
    firstImg.addClass('show');
    
  }  
    
});
  
/*** modal ***/

$('button').click(function(){
  $('.modal').css('display', 'block');
});

$('#close-modal').click(function(){
  $('.modal').css('display', 'none');
});