Editty.View.Edit = Backbone.View.extend({
  el: 'body',

  events:{
    'dblclick #titulo'       : 'editTitle',
    'dblclick #main_text'    : 'editText',
    'input #titleChange'     : 'test',
    'blur #titleChange'      : 'focusOutHead',
    'blur #contenChange' : 'focusOutCont'

  },
  
  test: function(){
    console.log('s');
  },

  initialize: function(){
    $('.nav').append('<li><a>'+window.location.href+'</a></li>');
  },

  focusOutHead:function(){
     var aux3 = $('#titleChange').val();
     $('#titleChange').remove();     
     $('.header').append('<h1 id="titulo"></h1>');
     $('#titulo').text(aux3);
  },

  focusOutCont:function(){
     var aux4 = $('#contenChange').val();
     console.log(aux4);
     $('#contenChange').remove();     
     $('.conten_web').append('<p id="main_text"></p>');
     $('#main_text').text(aux4);
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

