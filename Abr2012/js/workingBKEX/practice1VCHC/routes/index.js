/*
 * GET home page.
 */

exports.index = function(req, res){
  res.render('index', { title: 'Eddity' })
};

/*
 * GET edite page.
 */

exports.edit = function(req, res){
  res.render('edit', { title: 'Edit' })
};

/*
 * GET show page.
 */

exports.show = function(req, res){
  res.render('show', { title: 'Show' })
};