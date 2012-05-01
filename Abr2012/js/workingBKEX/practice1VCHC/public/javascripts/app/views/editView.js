Editty.View.Edit = Backbone.View.extend({
  el: 'body',
  
  events: {
    'click #title'    : 'edittitle', 
    'click #content'  : 'editcontent',
    'keydown #incont' : 'puttitle'
  
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
      $('#title').append('<input id="incont" placeholder="Write here" maxlength="25"></input>');
    }
  },
  
  puttitle: function(){
    var keycapture = $('#incont').val();
    if ((event.keyCode == 13) && (keycapture != '')){
      $('#title').append('<h1>'+ keycapture +'</h1>');
      $('#incont').remove();
    }
  },

  editcontent: function(){
  
  }
});
