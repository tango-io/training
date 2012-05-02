Editty.View.Edit = Backbone.View.extend({
  el: 'body',
  
  events: {
    'click #title.static'    : 'edittitle', 
    'click #content.static'  : 'editcontent',
    'keydown #title'         : 'puttitle',
    'keydown #incont2'       : 'putcont',
    'blur #title input'      : 'onFocusOut',
    'blur #content input'    : 'onFocusOut2'
  
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
    $("#title h1").html(title_input);
    $(title_input).focus();
  },
  
  puttitle: function(event){
    if(event.keyCode===13) {
      this.onFocusOut();
    }
    return event.keyCode!=13
  },

  editcontent: function(){
    $('#content').toggleClass('static');
    var content_input = $("<input>").val($('#bodytext').text());
    $("#bodytext").html(content_input);
    $(content_input).focus();
  },

  putcont: function(){
    if(event.keyCode===13) {
      this.onFocusOut2();
    }
    return event.keyCode!=13
  },

  onFocusOut: function(){
    if (!$('#title').hasClass('static')) {
      $('#title').toggleClass('static');
      $("#title h1").html($('#title input').val());
    }
  },

  onFocusOut2: function(){
    if (!$('#content').hasClass('static')) {
      $('#content').toggleClass('static');
      $("#bodytext").html($('#content input').val());
    }
  }
});
