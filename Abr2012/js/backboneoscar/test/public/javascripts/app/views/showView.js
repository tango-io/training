Editty.View.Show = Backbone.View.extend({
  el: 'body',

  events:{
  },

  initialize: function(){
    var self = this;
    $.ajax({
      type: 'POST',
      url: "/getData",
      data: {id:1} 
    }).done(function (data){
      var users = JSON.parse(data);
          self.user2 = users; 
          $('#head').text(users.title);
          $('#mainText').text(users.contenText);
    });
  },

  render: function(){
  }
});

