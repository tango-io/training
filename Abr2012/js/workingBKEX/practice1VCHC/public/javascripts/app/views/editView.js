Editty.View.Edit = Backbone.View.extend({
  el: 'body',
  
  events: {
    'click #title.static'    : 'edittitle', 
    'click #content.static'  : 'editcontent',
    'keydown #title'         : 'puttitle',
    'keydown #content'       : 'putcont',
    'blur #title input'      : 'onFocusOut',
    'blur #content input'    : 'onFocusOut2',
  
  },
  
  initialize: function(){
    this.info = {};
    self = this;
    $('.nav').append('<li><a>'+window.location.href+'</a></li>');
    this.countingwords();
    this.id = 1;
    this.render();
    $(document).keydown(function(event){
      if (event.which == 83 && event.ctrlKey){
        event.preventDefault();
        self.settingData();  
      }
    });
    this.countingwords();
  },

  render: function(){
      var self = this;
      $.ajax({
        type: 'POST',
        url:  '/getData',
        data: {id: 1}
      }).done(function(data){
        var d = JSON.parse(data);
        self.info = d;
        $('h1').text(d.title);
        $('#bodytext').text(d.content);
      });
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
      this.settingData();
    }
  },

  countingwords: function(){
    this.size = $('#bodytext').text();
    this.words = this.size.split(' ');
    $('.nav #words a').text("Words: " + this.words.length);
    $('.nav #chars a').text("Characters: " + this.size.length);
  },

  settingData: function(){
    console.log(this.info);
    this.info.title = $('h1').text();
    this.info.content = $('#bodytext').text();
    console.log('New');
    console.log(this.info);
    $.ajax({
      type: 'POST',
      url:  '/setData',
      data: this.info
    }).done(function(data){
      console.log(data);
    });
  }

});

