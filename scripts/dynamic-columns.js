$(document).ready(function() {
  $(window).on('resize', function() {
    var win= $(this);
    if (win.width() > 1025) {
      $('.programming-languages').addClass('three columns');
      $('.web-dev').addClass('six columns');
      $('.game-dev').addClass('three columns');
    } else {
      $('.programming-languages').removeClass('three columns');
      $('.web-dev').removeClass('six columns');
      $('.game-dev').removeClass('three columns');
    }
  });
});
