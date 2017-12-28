$(document).ready(function() {
  set_reduced_class();

  $(window).scroll(function() {
    set_reduced_class();
  });
});

function set_reduced_class() {
  if($(window).scrollTop() > 200) {
    $('.navbar').addClass('reduced');
  } else {
    $('.navbar').removeClass('reduced');
  }
}
