Editty.View.Edit = Backbone.View.extend({
  el: 'body',

  events:{
    'dblclick #titulo'    : 'editTitle',
    'dblclick #main_text' : 'editText',
    'input #titleChange'     : 'test'

  },
  
  test: function(){
    console.log('s');
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
 editText:function(){
    var aux2 = $('#main_text').text();
    $('#main_text').remove();
    $('.conten_web').append('<input id="contenChange"></input>');
    $('#contenChange').attr('value', aux2);
    $('#contenChange').focus();
  },


  render: function(){
  }
});

