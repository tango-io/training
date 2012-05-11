Editty.View.Index = Backbone.View.extend({
  el: "body",

  events: {
    'click #publish'    : 'publish'
  },

  initialize: function(){
    this.error = false;
    $('#modalError').modal();
    $('#modalError').modal('hide');
  },

  publish: function(id){
    //e.preventDefault();
    if (($('#filename').val() != '') && ($('#pass').val() != '')){
      var filename = $('#filename').val(),
          password = $('#pass').val();
      var container = {
              fnames:       filename,
              passw:        password,
              title:        "Put your title here",
              content:      "Click to write your file...",
              normalacces:  true
            }

      //this.setData(container);
      this.getData(filename);
    }
    else {
      $('#modalError').modal('show');
    }
  },


//<~ Ajax's Petitions ~>

  setData: function(container){
    $.ajax({
      type: 'POST',
      url: '/setData',
      data: container
    }).done(function(data){
      console.log(data);
      //window.location.pathname = "/edit/"+container.fnames;
    });
  },

  getData: function(filename){
    $.ajax({
      type:   'POST',
      url:    '/getData',
      data:   {fnames: filename}
    }).done(function(data){
      console.log(data);
    });
  }

});



