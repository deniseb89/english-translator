var Word = Backbone.Model.extend({});

var WordList = Backbone.Collection.extend({
  initialize: function(word) {
      this.url = "http://english-english-api.herokuapp.com/api/words/" + word;
  },
  model: Word
});

var WordView = Backbone.View.extend({
  tagName: 'ul',
  className: "list-unstyled",
  template: _.template($("#word-template").html()),
  render: function() {
    this.$el.html(this.template(this.model.toJSON())); //the li
    return this;
  }
}); 

var WordListView = Backbone.View.extend({
  el: '#words',
  initialize: function() {
    this.listenTo(this.collection, "change", this.render);
  },
  render: function() {
    this.$el.empty(); // the ul
    var that = this;
    this.collection.each(function(word) {
      var view = new WordView({ model: word });
      that.$el.append(view.render().$el);
      return this;
    })
  }
});

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

$(function() {
  $('#form1').on('submit', function(e) {
    e.preventDefault();
    var word = $("#word").val().toLowerCase();
    wordList = new WordList(word);
    wordList.fetch().done(function(data){
      wordListView = new WordListView({ collection: wordList });
      wordListView.render();
      if (wordListView.collection.length == 0) {
        invalid();
      };
      $("#word").val(""); 
    });
  });
});
