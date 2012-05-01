Editty={
  Model: {},
  Collections: {},
  View: {},

  initialize: function(){
    Editty.router =new Editty.Router();
    Backbone.history.start();
  }
}

jQuery(function(){
  Editty.initialize();
});
