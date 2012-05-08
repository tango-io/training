Editty.View.Show = Backbone.View.extend({
  el: "body",

  events:{
    'click #save' : 'saveit',
    'click #print': 'printit',
    'click #edit' : 'backedit'
  
  },

  initialize: function(){
    this.id = 1;
    $.ajax({
      type: 'POST',
      url:  '/getData',
      data: {id:1}
    }).done(function(data){
      var newdata = JSON.parse(data);
      $('h1').text(newdata.title);
      $('#bodytext').text(newdata.content);
    });
  },

  saveit: function(){
    
  },

  printit: function(){
  
  },

  backedit: function(){
    window.location.pathname = "/edit/"+this.id;
  }

});
