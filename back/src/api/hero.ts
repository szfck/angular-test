import { Response, Request, Express } from 'express';
const heroes = [
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
module.exports = function(app: Express) {
	app.get('/api/heroes', function(req: any , res: any) {	
		const origin = req.get('origin');
		res.header('Access-Control-Allow-Origin', origin);
		res.send(heroes);
	});
	
	app.get('/api/heroes/:heroId', function(req: any, res: any) {	
		let origin = req.get('origin');
		res.header('Access-Control-Allow-Origin', origin);
		const heroId = req.params.heroId;
		let ans = {}	
		heroes.forEach(hero => {
			if (hero.id == heroId) {
				ans = hero;
			}
		});
		res.send(ans);
	});
};
