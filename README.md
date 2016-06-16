shapeshift
==========

[![NPM](https://nodei.co/npm/shapeshift.png?downloads=true&downloadRank=true&stars=true)](https://nodei.co/npm/shapeshift/)

[![Build Status](https://travis-ci.org/chovy/shapeshift.svg?branch=master)](https://travis-ci.org/chovy/shapeshift) [![Requirements Status](https://requires.io/github/chovy/shapeshift/requirements.svg?branch=master)](https://requires.io/github/chovy/shapeshift/requirements/?branch=master)

shapeshift.io api for node.js

## What is shapeshift.io?

ShapeShift is an instant exchange for Litecoin, Bitcoin, Peercoin, Dogecoin, Darkcoin, and other crypto-currencies.

ShapeShift is the fastest way to exchange these digital currencies for one another.
An exchange between crypto-currencies on ShapeShift takes only a few seconds, and no account is needed.

The benefit of this is an application or site could send a payout to a content provider paid out in a different currency than
what the consumer paid with.

For example, Joe wants to be paid in Bitcoin, while Sally wants to pay him in Litecoin.
ShapeShift allows you to convert the currency on behalf of the user.

## Install

	npm install --save shapeshift

	const shapeshift = require('shapeshift');
	const pair = 'btc_ltc';

	shapeshift.getRate(pair)
		.then(function(data){
			//do something w/ data
		});
		
## Usage

Get the current rate offered by Shapeshift.

	const shapeshift = require('shapeshift');
	const pair = 'btc_ltc';

	shapeshift.getRate(pair)
		.then(function(data){
			const body = data.body;

			//{"pair":"btc_ltc","rate":"93.83852691"}
		};

Get the current deposit limit set by Shapeshift.

	const shapeshift = require('shapeshift');
	const pair = 'btc_ltc';

	shapeshift.getLimit(pair)
		.then(function(data){
			const body = data.body;

			//{"pair":"btc_ltc","limit":"1.98046131"}
		});

Get the current list of coins supported by Shapeshift.

	const shapeshift = require('shapeshift');

	shapeshift.getCoins()
		.then(data => {
			const coins = data.body;
			//{"pair":"btc_ltc","limit":"1.98046131"}
		});

## Current pairs supported

btc, eth, ltc, ppc, drk, doge and more. Full list is available at: https://shapeshift.io/#/coins

Note: use an underscore to seperate currencies in a pair (ie: `ltc_doge` or `doge_ltc`)

## API

https://info.shapeshift.io/api

License MIT
