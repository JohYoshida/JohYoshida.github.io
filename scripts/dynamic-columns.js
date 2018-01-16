$(document).ready(function() {
  dynamicResize();
  $(window).on('resize', function() {
    dynamicResize();
  });
});

function dynamicResize() {
  var win = $(window);
  if (win.width() > 1025) {
    $('.programming-languages').addClass('three columns');
    $('.web-dev').addClass('six columns');
    $('.game-dev').addClass('three columns');
    $('.edu-program').addClass('six columns');
    $('.employer').addClass('six columns');
    $('.project').addClass('six columns');
  } else {
    $('.programming-languages').removeClass('three columns');
    $('.web-dev').removeClass('six columns');
    $('.game-dev').removeClass('three columns');
    $('.edu-program').removeClass('six columns');
    $('.employer').removeClass('six columns');
    $('.project').removeClass('six columns');
  }
}
