$(document).ready(function() {
  $(window).on('resize', function() {
    var win= $(this);
    if (win.width() > 1025) {
      alert('desktop');
      $('programming-languages').addClass('three columns');
      $('web-dev').addClass('six columns');
      $('game-dev').addClass('three columns');
      $('programming-languages').removeClass('one column');
      $('web-dev').removeClass('one column');
      $('game-dev').removeClass('one column');
    } else {
      alert('mobile');
      $('programming-languages').addClass('one column');
      $('web-dev').addClass('one column');
      $('game-dev').addClass('one column');
      $('programming-languages').removeClass('three columns');
      $('web-dev').removeClass('six columns');
      $('game-dev').removeClass('three columns');
    }
  });
});
