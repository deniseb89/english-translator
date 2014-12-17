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

// VALIDATION
function flash() {
  var $word = $("#word").val();
  var $error = $('.error');
  $error
    .text($word + " is not in our database. Please try another word.")
    .hide()
    .slideToggle("slow", function(){
      setTimeout(function(){
          $error.slideToggle("slow", function(){
            $error.remove();
          });
      }, 3000);
    });
  }

function invalid() {
  $("#word").css('border-color', 'red')
            .effect("shake");
  flash();
}

// AUTOCOMPLETE
// $("#word").autocomplete({
//   appendTo: "#form1",
//   delay: 500,
//   minLength: 3,
//   source: "http://english-english-api.herokuapp.com/api/words"
// })

// DANCING ARROWS
$('.page2').on('mouseover', function() {
  $(this).css({
    'transform' : 'rotate(30deg)'
  })
});
$('.page2').on('mouseout', function() {
  $(this).css({
    'transform' : 'rotate(0deg)'
  })
});

$('.page1').on('mouseover', function() {
  $(this).css({
    'transform' : 'rotate(220deg)'
  })
});
$('.page1').on('mouseout', function() {
  $(this).css({
    'transform' : 'rotate(180deg)'
  })
});

// SINGLE-PAGE FUNCTIONALITY
$('.page2').on('click', function() {
  $('#home').toggle("slide", {direction: "right"}, function() {
      $('#about').toggle("slide", {direction: "left"}, 1000);
  }, 1000);
});

$('.page1').on('click', function() {
  $('#about').toggle("slide", {direction: "left"}, function() {
      $('#home').toggle("slide", {direction: "right"}, 1000);
  }, 1000);
});

// ON PAGE LOAD
$(function(){
  hideElems();
  $('.btn').on("click", function() {
    $(".intro").slideUp(750);
    });
});
