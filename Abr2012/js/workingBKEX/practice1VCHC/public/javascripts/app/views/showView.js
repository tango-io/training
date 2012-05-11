Editty.View.Show = Backbone.View.extend({
  el: "body",

  events:{
    'click #save' : 'saveit',
    'click #print': 'printit',
    'click #edit' : 'backedit'
  
  },

  initialize: function(id){
    self = this;
    $.ajax({
      type: 'POST',
      url:  '/getData',
      data: {fnames: id}
    }).done(function(data){
      var newdata = JSON.parse(data);
      self.data = newdata;
      $('h1').text(newdata.title);
      $('#bodytext').text(newdata.content);
    });
  },

  saveit: function(){
    
  },

  printit: function(){
  
  },

  backedit: function(){
    window.location.pathname = "/edit/"+this.data.fnames;
  }

});
