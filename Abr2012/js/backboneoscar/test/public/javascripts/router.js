Editty.Router = Backbone.Router.extend({
  routes: {
    "" : "index",
    "/edit/:id" : "edit",
    "/show/:id" : "show"
  },
  initialize: function(){
    console.log(this.routes);
  },
  index: function(){
    var index = new Editty.View.Index();
  },

  edit: function(id){
    var edit = new Editty.View.Edit();
  },

  show: function(id){
    var show = new Editty.View.Show();
  }
})
