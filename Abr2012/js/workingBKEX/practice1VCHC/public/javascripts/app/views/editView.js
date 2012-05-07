Editty.View.Edit = Backbone.View.extend({
  el: 'body',
  
  events: {
    'click #title.static'    : 'edittitle', 
    'click #content.static'  : 'editcontent',
    'keydown #title'         : 'puttitle',
    'keydown #content'       : 'putcont',
    'blur #title input'      : 'onFocusOut',
    'blur #content input'    : 'onFocusOut2'
  
  },
  
  initialize: function(){
    $('.nav').append('<li><a>'+window.location.href+'</a></li>');
    this.countingwords();
    this.id = 1;
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
    self = this;

    if (!$('#content').hasClass('static')) {
      $('#content').toggleClass('static');
      $("#bodytext").html($('#content input').val());
      this.countingwords();
      this.gettingData();
      //$.ajax({
        //type: 'POST',
        //url:  '/gettingData',
        //data: {id: 1}
      //}).done(function(data){
        //console.log(JSON.parse(data));
        //var object = (JSON.parse(data));
        //console.log(object.fnames);
        //object.title = $('h1').text();
        //object.content = $('#bodytext').text();
        //console.log(object.title);
      //});
    }
  },

  countingwords: function(){
    this.size = $('#bodytext').text();
    this.words = this.size.split(' ');
    $('.nav #words a').text("Words: " + this.words.length);
    $('.nav #chars a').text("Characters: " + this.size.length);
  },

  gettingData: function(object){
    $.ajax({
      type: 'POST',
      url:  '/gettingData',
      data: {id: 1}
    }).done(function(data){
      console.log(JSON.parse(data));
      var object = (JSON.parse(data));
      console.log(object.fnames);
      object.title = $('h1').text();
      object.content = $('#bodytext').text();
      console.log(object.title);
      console.log(object.content);
      //this.savingData(object);
      $.ajax({
        type: "POST",
        url:  "/getData",
        data: object
      }).done(function(data){
        console.log(data);
      });
    });
  }

  //savingData: function(object){
    //$.ajax({
      //type: "POST",
      //url:  "/getData",
      //data: object
    //}).done(function(data){
      //console.log(data);
    //});
  //}
});
