
/*
 * GET home page.
 */

exports.index = function(req, res){
  res.render('index', { title: 'Editty' })
};

exports.edit = function(req, res){
  var id = req.params.id;
  redis.get ('data', function(err, data){
    console.log(data);
    res.render('edit', JSON.parse(data))
  });

};

exports.show = function(req, res){
  console.log('sas');
  res.render('show', { title: 'Editty' })
};
