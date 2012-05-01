Editty.Router = Backbone.Router.extend({
  routes: {
    ""          : "index",
    "edit/:id" : "edit",
    "/show/:id" : "show"
  },

  initialize: function(){
    //console.log(this.routes);
  },
  
  index: function(){
    this.index = new Editty.View.Index();
  },
  edit: function(id){
    this.edit = new Editty.View.Edit();
  },
  show: function(id){
    var show = new Editty.View.Show();
  }
});
