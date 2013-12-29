
/*
 * GET home page.
 */

exports.index = function(req, res, next){
  res.jrender('index', { title: 'Express' }, function($){
    $("title").attr("poop","awesome");
  });
};