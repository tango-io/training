Editty.View.Index = Backbone.View.extend({
  el: "body",

  events: {
    'click #publish'    : 'publish'
  },

  initialize: function(){
    this.container = {id: 0, fnames: "", passw: "", title:"Put your title here", content:"Click to write your file..."};
    this.error = false;
    $('#modalError').modal();
    $('#modalError').modal('hide');
  },

  publish: function(e){
    e.preventDefault();
    if (($('#filename').val() != '') && ($('#pass').val() != '')){
      var filename = $('#filename').val(),
      password = $('#pass').val();

      id = 1;
      this.container.id = id;
      this.container.fnames = filename;
      this.container.passw = password;

      $.ajax({
        type: 'POST',
        url: '/setData',
        data: this.container
      }).done(function(data){
        console.log(data);
      });

      window.location.pathname = "/edit/"+id
    }
    else {
      $('#modalError').modal('show');
    }
  },

});



