shapeshift
==========

shapeshift.io api for node.js (unofficial)


## What is shapeshift.io?

ShapeShift is an instant exchange for Litecoin, Bitcoin, Peercoin, Dogecoin, Darkcoin, and other cryptocoins.
As a new service, it is the fastest way to trade between these digital currencies.
An exchange between coins on ShapeShift takes only a few seconds, and no account is needed.

The benefit of this is that you could have a web site where a payout to a content provider is paid out in a different currency than
what the consumer paid with. For example, Joe wants to be paid in Bitcoin, while Sally wants to pay in Litecoin.

## Install

	npm install shapeshift

	var shapeshift = require('shapeshift');

	shapeshift.getRate(pair)
		.then(function(data){
			//do something w/ data
		});
		
## Usage

Gets the current rate offered by Shapeshift.

	var shapeshift = require('shapeshift');
	var pair = 'btc_ltc';

	shapeshift.getRate(pair)
		.then(function(data){
			var body = data.body;

			//{"pair":"btc_ltc","rate":"93.83852691"}
		};

Gets the current deposit limit set by Shapeshift.

	var shapeshift = require('shapeshift');
pdate 	var pair = 'btc_ltc';

	shapeshift.getLimit(pair)
		.then(function(data){
			var body = data.body;

			//{"pair":"btc_ltc","limit":"1.98046131"}
		});

## Pairs

btc, ltc, ppc, drk, doge

use an underscore to seperate currencies in a pair (ie: `ltc_doge` or `doge_ltc`)



## API

http://shapeshift.io/api.html


License MIT
