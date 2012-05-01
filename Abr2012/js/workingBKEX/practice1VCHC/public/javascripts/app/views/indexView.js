Editty.View.Index = Backbone.View.extend({
  el: "body",

  events: {
    'click #publish' : 'publish'
  },

  initialize: function(){
    this.container = {id: 0, fnames: "", passw: ""};
  },

  publish: function(e){
    e.preventDefault();

    var filename = $('#filename').val(),
        password = $('#pass').val();

    id = 1;
    this.container.id = id;
    this.container.fnames = filename;
    this.container.passw = password;

    $.ajax({
      type: 'POST',
      url: '/getData',
      data: this.container
    }).done(function(data){
      console.log(data);
    });

    window.location.pathname = "/edit/"+id
  }

});



