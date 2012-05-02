Editty.View.Edit = Backbone.View.extend({
  el: 'body',
  
  events: {
    'click #title.static'    : 'edittitle', 
    'click #content'  : 'editcontent',
    'keydown #title'  : 'puttitle',
    'blur #title input'  : 'onFocusOut',
    'keydown #incont2': 'putcont'
  
  },
  
  initialize: function(){
    $('.nav').append('<li><a>'+window.location.href+'</a></li>');
    this.conta = 0;
  },

  render: function(){
  },
  
  edittitle: function(){
    $('#title').toggleClass('static');
    var title_input = $("<input>").val($('#title h1').text());

    console.log(title_input);
    $("#title h1").html(title_input);
    $(title_input).focus();
  },
  
  puttitle: function(event){
    if(event.keyCode===13) {
      this.onFocusOut();
    }
    return event.keyCode!=13
  },

  onFocusOut: function(){
    if (!$('#title').hasClass('static')) {
      $('#title').toggleClass('static');
      $("#title h1").html($('#title input').val());
    }
  },

  editcontent: function(){
    this.conta = this.conta + 1;
    if (this.conta == 1){
      var contesaver = $('#bodytext').text();
      $('#bodytext').remove();
      $('#content').append('<input id="incont2" maxlength="250"></input>');
      $('#incont2').focus();
      $('#incont2').focusout(function(){
        console.log('inside2');
        $('#content').append('<p id="bodytext">'+ contesaver + '</p>');
        $('#incont2').remove();
        this.conta = 0;
        console.log(this.conta);
       });
    }
  },

  putcont: function(){
    var keycapture = $('#incont2').val();
    if ((event.keyCode == 13) && (keycapture != '')){
      $('#content').append('<p id="bodytext">'+ keycapture +'</p>');
      $('#incont2').remove();
    this.conta = 0;
    }
  },

});
