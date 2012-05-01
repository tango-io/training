Editty.View.Edit = Backbone.View.extend({
  el: 'body',

  initialize: function(){
    $('.nav').append('<li><a>'+window.location.href+'</a></li>');
  },

  render: function(){
  }
});
