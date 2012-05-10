/*
 * GET home page.
 */

exports.index = function(req, res){
  res.render('index', { title: 'Editty' })
};

/*
 * GET edite page.
 */

exports.edit = function(req, res){
  var fnames = req.params.fnames;
  redis.get(fnames, function(err, data){
    console.log('Data arrive:');
    console.log(data);
    res.render('edit', JSON.parse(data))
  });
};

/*
 * GET show page.
 */

exports.show = function(req, res){
  res.render('show', { title: 'Show'})
};
