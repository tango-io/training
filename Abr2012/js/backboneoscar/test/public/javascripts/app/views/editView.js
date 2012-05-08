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
    var self =this
    this.user2= {};
    $('.nav').append('<li id="url"><a>'+window.location.href+'</a></li>');
    var cont = $('#main_text').text();
    $('#numChar').text('characters: '+cont.length);
    
    this.txt = $('#main_text').text();
    this.arr = this.txt.split(' ');
    $('#numWord').text('Words: '+ this.arr.length);
    $.ajax({
      type: 'POST',
      url: "/getData",
      data: {id:1} 
    }).done(function (data){
      var users = JSON.parse(data);
          self.user2 = users; 
          $('#titulo').text(users.title);
          $('#main_text').text(users.contenText);
    });

  },

  counter:function(){
    var cont = $('#contenChange').val();
    $('#numChar').text('characters: '+cont.length);
  
  },

  focusOutHead:function(){
    self= this;
     var aux3 = $('#titleChange').val();
     $('#titleChange').remove();     
     $('.header').append('<h1 id="titulo"></h1>');
      $('.header').css('border', 'none')
     $('#titulo').text(aux3);
     self.user2.title = aux3;
     $.ajax({
      type: 'POST',
      url: "/setData",
      data: self.user2 
     }).done(function (data){
      console.log(data);
     });
  },

  focusOutCont:function(){
    self = this;
    var aux4 = $('#contenChange').val();
     $('#contenChange').remove();     
     $('.conten_web').append('<p id="main_text"></p>');
     $('.conten_web').css('border', 'none');
     $('#main_text').text(aux4);
     this.wordCounter();

     self.user2.contenText = aux4;
     $.ajax({
      type: 'POST',
      url: "/setData",
      data: self.user2 
     }).done(function (data){
      console.log(data);
     });

  },

  wordCounter:function(){
    this.txt = $('#main_text').text();
    this.arr = this.txt.split(' ');
    $('#numWord').text('Words: '+ this.arr.length);

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

