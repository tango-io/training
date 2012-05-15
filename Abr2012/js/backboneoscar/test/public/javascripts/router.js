Editty.Router = Backbone.Router.extend({
  routes: {

    ""          : "index",
    "edit/:id"  : "validationUser",
    "login/:id" : "login",
    "show/:id"  : "show"

  },

  initialize: function(){
  },

  index: function(){
    var index = new Editty.View.Index();
  },

  edit: function(id){
    var edit = new Editty.View.Edit(id);
  },
  login: function(id){
    var login = new Editty.View.Login(id);
  },
  show: function(id){
    var show = new Editty.View.Show(id);
  },

  validationUser: function(id){
    self = this;
    $.ajax({
      type: 'POST',
      url: "/getData",
      data: {name:id} 
    }).done(function (data){
      var users = JSON.parse(data);
      if(users.flag=== "true"){
        users.flag = false;
        $.ajax({
          type: 'POST',
          url: "/setData",
          data: users 
        }).done(function (data){
          self.edit(id); 
        });
      }
    });
  },
})
