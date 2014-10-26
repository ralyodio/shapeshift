var _ = require('lodash');
var requestp = require('request-promise');

var shapeshift = module.exports = {};
var url = 'http://shapeshift.io';
var defaults = {
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
