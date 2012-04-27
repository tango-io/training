
/*
 * GET home page.
 */

exports.index = function(req, res){
  res.render('index', { title: 'Editty' })
};
exports.edit = function(req, res){
  res.render('edit', { title: 'Editty' })
};
