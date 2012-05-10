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

  publish: function(e){
    e.preventDefault();
    if (($('#filename').val() != '') && ($('#pass').val() != '')){
      var filename = $('#filename').val(),
          password = $('#pass').val(),
          self = this;


      this.getIndex(function(index){

            var container = {
              id:           (+index)+1,
              fnames:       filename,
              passw:        password,
              title:        "Put your title here",
              content:      "Click to write your file...",
              normalacces:  true
            }

        self.updateIndex(container.id);
        self.setData(container, function(data){
          console.log('saved successfully');
          window.location.pathname = "/edit/"+container.id
        });
      });
    }
    else {
      $('#modalError').modal('show');
    }
  },


//<~ Ajax's Petitions ~>

  setData: function(container, cb){
    $.ajax({
      type: 'POST',
      url: '/setData',
      data: container
    }).done(function(data){
      return cb(data);
    });
  },

  getIndex: function(cb){
    $.ajax({
      type:   'POST',
      url:    '/getIndex',
      data: true
    }).done(function(data){
     return cb(data);
    });
  },

  updateIndex: function(id){
    $.ajax({
      type:   'POST',
      url:    '/updateIndex',
      data:   {id: id}
    }).done(function(data){
      
    });
  }

});



