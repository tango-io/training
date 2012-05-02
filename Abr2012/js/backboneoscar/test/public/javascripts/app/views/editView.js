Editty.View.Edit = Backbone.View.extend({
  el: 'body',

  events:{
    'dblclick #titulo': 'editTitle'
  },
  initialize: function(){
    $('.nav').append('<li><a>'+window.location.href+'</a></li>');
  },

  editTitle:function(){
    var aux = $('#titulo').text();
    $('#titulo').remove();
    $('.header').append('<input id="titleChange"></input>');
    $('#titleChange').attr('value', aux);
    $('#titleChange').focus();
  },

  render: function(){
  }
});

