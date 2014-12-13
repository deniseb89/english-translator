function hideElems() {
  $("h1").hide();
  $("h2").hide();
  $("#form1").hide();
  fades();
}

function fades(){
  $("h1").fadeIn(1000, function() {
    $("h2").fadeIn(2500, function() {
      $("#form1").fadeIn(1500);
    });
  });
}

function moveUp() {
  $("#form1").animate({top: '-=50px'}, 1500);
}

$(function(){
  hideElems();
  $('.btn').on("click", function() {
    $("h2").fadeOut(750);
    $("h1").fadeOut(750);
    });
  })
