const _ = require('lodash');
const requestp = require('request-promise');

const shapeshift = module.exports = {};
const url = 'https://shapeshift.io';
const defaults = {
	json: true,
	resolveWithFullResponse: true
};

//todo add support for callbacks instead of promises with options arg

function get(url, opts){
	opts = opts || {};

	return requestp(_.extend(defaults, opts, {
		url: url
	}));
}

shapeshift.getRate = function(pair){
	return get(url + '/rate/' + pair);
};

shapeshift.getLimit = function(pair){
	return get(url + '/limit/' + pair);
};

shapeshift.getCoins = function(){
	return get(url + '/getcoins');
}