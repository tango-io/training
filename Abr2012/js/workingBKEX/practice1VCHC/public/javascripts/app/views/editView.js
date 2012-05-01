Editty.View.Edit = Backbone.View.extend({
  el: 'body',
  
  events: {
    'click #title'    : 'edittitle', 
    'click #content'  : 'editcontent',
    'keydown #incont' : 'puttitle',
    'keydown #incont2': 'putcont'
  
  },
  
  initialize: function(){
    $('.nav').append('<li><a>'+window.location.href+'</a></li>');
    this.conta = 0;
  },

  render: function(){
  },
  
  edittitle: function(){
    this.conta = this.conta + 1;
    if (this.conta == 1){
      var titlesaver = $('h1').text();
      $('h1').remove();
      $('#title').append('<input id="incont" maxlength="25"></input>');
      $('#incont').focus();
    }
  },
  
  puttitle: function(){
    var keycapture = $('#incont').val();
    if ((event.keyCode == 13) && (keycapture != '')){
      $('#title').append('<h1>'+ keycapture +'</h1>');
      $('#incont').remove();
    this.conta = 0;
    }
  },

  editcontent: function(){
    this.conta = this.conta + 1;
    if (this.conta == 1){
      var contesaver = $('#bodytext').val();
      $('#bodytext').remove();
      $('#content').append('<input id="incont2" maxlength="250"></input>');
      $('#incont2').focus();
    }
  },

  putcont: function(){
    var keycapture = $('#incont2').val();
    if ((event.keyCode == 13) && (keycapture != '')){
      $('#content').append('<p id="bodytext">'+ keycapture +'</p>');
      $('#incont2').remove();
    this.conta = 0;
    }
  }
});
