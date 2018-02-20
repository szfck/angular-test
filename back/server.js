var express = require('express');
var app = express();

heroes = [
	{ id: 11, name: 'Mr. Nice' },
	{ id: 12, name: 'Narco' },
	{ id: 13, name: 'Bombasto' },
	{ id: 14, name: 'Celeritas' },
	{ id: 15, name: 'Magneta' },
	{ id: 16, name: 'RubberMan' },
	{ id: 17, name: 'Dynama' },
	{ id: 18, name: 'Dr IQ' },
	{ id: 19, name: 'Magma' },
	{ id: 100, name: 'Tornado' }
];

app.get('/api/heroes', function(req, res) {	
	origin = req.get('origin');
  res.header('Access-Control-Allow-Origin', origin);
	res.send(heroes);
});

app.get('/api/heroes/:heroId', function(req, res) {	
	origin = req.get('origin');
	res.header('Access-Control-Allow-Origin', origin);
	heroId = req.params.heroId;
	ans = {}	
	heroes.forEach(hero => {
		if (hero.id == heroId) {
			ans = hero;
		}
	});
	res.send(ans);
});


var server = app.listen(3000, function () {
  var host = server.address().address;
  var port = server.address().port;

  console.log('Example app listening at http://%s:%s', host, port);
});