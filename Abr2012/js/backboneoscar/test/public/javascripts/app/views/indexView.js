Editty.View.Index = Backbone.View.extend({
  el: 'body',

  events:{
    'click #btn': 'edit'
  },

  initialize: function(){
    this.users = {id: 0, file_name:"", pass:"", title:"Hola", contenText:"Ingrese aqui su texto"};
  },

  edit: function(e){
    e.preventDefault();
    var file = $('#username').val(),
        password = $('#password').val();
        id = 1;
        console.log(file);
        
        this.users.file_name = file;
        this.users.pass     = password;
        this.users.id       = id;

    $.ajax({
      type: 'POST',
      url: "/setData",
      data: this.users 
    }).done(function (data){
      console.log(data);
    });

    window.location.pathname = '/edit/'+id
  }
})
