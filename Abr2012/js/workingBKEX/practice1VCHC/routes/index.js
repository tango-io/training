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
  var id = req.params.id;
  redis.get(id, function(err, data){
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
