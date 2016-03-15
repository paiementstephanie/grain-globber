var $ul = $('ul');

grains.forEach(function (grain) {

  var $li = $('<li>');
  var $img = $('<img>');
  var $h2 = $('<h2>');
  var $p = $('<p>');

  $h2.html(grain.name);
