Editty.View.Show = Backbone.View.extend({
  el: 'body',

  events:{
  },

  initialize: function(name){
    console.log(name);
    var self = this;
    $.ajax({
      type: 'POST',
      url: "/getData",
      data: {name:name} 
    }).done(function (data){
      var users = JSON.parse(data);
          self.user2 = users; 
          $('#head').text(users.title);
          $('#mainText').text(users.content);
    });
  },

  render: function(){
  }
});

