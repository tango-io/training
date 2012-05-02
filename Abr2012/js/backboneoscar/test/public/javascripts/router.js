Editty.Router = Backbone.Router.extend({
  routes: {

    ""          : "index",
    "edit/:id"  : "edit"

  },

  initialize: function(){
  },

  index: function(){
    var index = new Editty.View.Index();
  },

  edit: function(id){
    var edit = new Editty.View.Edit();
  },

})
