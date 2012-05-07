Editty.View.Edit = Backbone.View.extend({
  el: 'body',

  events:{
    'dblclick #titulo'         : 'editTitle',
    'dblclick #main_text'      : 'editText',
    'input #titleChange'       : 'test',
    'blur #titleChange'        : 'focusOutHead',
    'blur #contenChange'       : 'focusOutCont',
    'keydown #contenChange' : 'counter'

  },
  
  test: function(){
    console.log('s');
  },

  initialize: function(){
    $('.nav').append('<li><a>'+window.location.href+'</a></li>');
    var cont = $('#main_text').text();
    $('#numChar').text('characters: '+cont.length);
  },

  counter:function(){
    var cont = $('#contenChange').val();
    console.log(cont);
    $('#numChar').text('characters: '+cont.length);
  
  },

  focusOutHead:function(){
     var aux3 = $('#titleChange').val();
     $('#titleChange').remove();     
     $('.header').append('<h1 id="titulo"></h1>');
      $('.header').css('border', 'none')
     $('#titulo').text(aux3);
  },

  focusOutCont:function(){
     var aux4 = $('#contenChange').val();
     console.log(aux4);
     $('#contenChange').remove();     
     $('.conten_web').append('<p id="main_text"></p>');
     $('.conten_web').css('border', 'none');
     $('#main_text').text(aux4);
  },

  editTitle:function(){
    var aux = $('#titulo').text();
    $('#titulo').remove();
    $('.header').append('<input id="titleChange"></input>');
    $('.header').css('border', '1px dashed')
    $('#titleChange').attr('value', aux);
    $('#titleChange').focus();
  },
 editText:function(){
    var aux2 = $('#main_text').text();
    $('#main_text').remove();
    $('.conten_web').append('<input id="contenChange"></input>');
    $('.conten_web').css('border', '1px dashed');
    $('#contenChange').attr('value', aux2);
    $('#contenChange').focus();
  },


  render: function(){
  }
});

