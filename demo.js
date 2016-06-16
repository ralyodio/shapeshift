const shapeshift = require('./index');

shapeshift.getRate('btc_ltc')
	.then(function(data){
		console.log(arguments);
	})
	.catch(function(err){
		console.error(err);
	});
