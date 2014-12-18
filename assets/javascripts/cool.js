function hideElems() {
  $("h1").hide();
  $("h2").hide();
  $("#form1").hide();
  fades();
}

function hideIntro() {
  $('.btn').on("click", function() {
    $(".intro").slideUp(750);
  });
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
function autocompleteSearchQuery() {
  var $searchField = $('#word');
  var $suggestions = $('.suggestions');
  $searchField.on('keyup', function() {
  var queryString = $searchField.val();
    $.ajax({
      method: 'GET',
      url: 'http://english-english-api.herokuapp.com/api/words/' + queryString,
      dataType: 'JSON',
      // data: {query: queryString},
      success: function(data) {
        $suggestions.empty();
        data.forEach(function(object) {
          for(var key in object) {
            var len = queryString.length;
            if (queryString == object[key].slice(0, len)) {
              var $suggestionNode = $('<li>').text(object[key]);
              $suggestions.append($suggestionNode);
            };
          }
        });
        $(".suggest-div").slideDown(750);
      }
    });
  });
}

function toggleAutocomplete() {
  $("#word").on('click', function() {
    $(".suggestions").empty();
    autocompleteSearchQuery();
  });

}

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

console.log("I'm a console log and if dont show up something is wrong")

// ON PAGE LOAD
$(function(){
  hideElems();
  hideIntro();
  toggleAutocomplete();
});
