Editty.View.Index = Backbone.View.extend({
  el: 'body',

  events:{
    'click #btn': 'edit'
  },

  initialize: function(){
    this.users = {id: 0, filename:"", pass:"", title:"", contenText:""};
  },

  edit: function(e){
    e.preventDefault();
    var file = $('#username').val(),
        password = $('#password').val();
        id = 1;
        
        this.users.filename = file;
        this.users.pass     = password;
        this.users.id       = id;

    $.ajax({
      type: 'POST',
      url: "/getData",
      data: this.users 
    }).done(function (data){
    });

    window.location.pathname = '/edit/'+id
  }
})
