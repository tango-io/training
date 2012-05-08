Editty.View.Show = Backbone.View.extend({
  el: "body",

  events:{
  
  },

  initialize: function(){
    console.log('inside');
    $.ajax({
      type: 'POST',
      url:  '/getData',
      data: {id:1}
    }).done(function(data){
      var newdata = JSON.parse(data);
      $('h1').text(newdata.title);
      $('#bodytext').text(newdata.content);
    });
  }

});
