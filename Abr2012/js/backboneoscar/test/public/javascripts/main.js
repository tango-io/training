Editty={
  Model: {},
  Collection: {},
  View: {},

  initialize: function(){
    Editty.router =new Editty.Router();
    Backbone.history.start({pushState: true});
  }
}

jQuery(function(){
  Editty.initialize();
});
