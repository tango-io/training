Editty.View.Index = Backbone.View.extend({
  el: 'body',

  events:{
    'click #btn': 'edit'
  },

  initialize: function(){
  },

  getFile: function(name, cb){
    $.ajax({
      type: "POST",
      url: "/getData",
      data: {name: name}
    }).done(function(file){
      return cb(file);
    });
  },

  createFile: function(file){
    $.ajax({
      type: "POST",
      url: "/setData",
      data: file
    }).done(function(data){
      if(data.success){
        console.log('Done');
        window.location.pathname = '/edit/'+data.name
      }
    }).error(function(err){
      alert(JSON.stringify(err));
    });
  },

  edit: function(e){
    e.preventDefault();

    var doc = {
      name: $('#username').val(),
      pass: $('#password').val(),
      title: "Hola",
      content: "Ingrese aqui su texto"
    }

    var name = doc.name;
    var self = this;

    this.getFile(name, function(file){
      if(file){
        var f = JSON.parse(file);
        if(doc.pass == f.pass){
          window.location.pathname = '/edit/'+f.name
        };
      }else{
        self.createFile(doc);
      }
    });
  }
})
