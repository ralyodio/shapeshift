const chai = require('chai');
//const chaiAsPromised = require("chai-as-promised");
const expect = chai.expect;
const shapeshift = require('..');

//chai.use(chaiAsPromised);

// `describe` makes a "suite" of tests; think of them as a group.
describe('Get rates', function() {

	it('Should return the exchange rates for btc_ltc', function(done) {
		const pair = 'btc_ltc';

		shapeshift.getRate(pair)
			.then(function(data){
				const body = data.body;

				expect(body.pair).to.equal(pair);
				expect(body.rate).to.be.above(0);
				done();
			}, function(err){
				done(err);
			})
			//note: this is not the getRate catch, its used by chai/mocha errors
			.catch(function(err){
				done(err);
			});
	});

	it('Should return the exchange rates for ltc_btc', function(done) {
		const pair = 'ltc_btc';

		shapeshift.getRate(pair)
			.then(function(data){
				const body = data.body;

				expect(body.pair).to.equal(pair);
				expect(body.rate).to.be.above(0);
				done();
			}, function(err){
				done(err);
			})
			.catch(function(err){
				done(err);
			});
	});

});

describe('Get limits', function() {
	it('Should return the limit for btc_ltc', function(done) {
		const pair = 'btc_ltc';

		shapeshift.getLimit(pair)
			.then(function(data){
				const body = data.body;

				expect(body.pair).to.equal(pair);
				expect(body.limit).to.be.above(0);
				done();
			}, function(err){
				done(err);
			})
			.catch(function(err){
				done(err);
			});
	});

	it('Should return the limit for ltc_btc', function(done) {
		var pair = 'ltc_btc';

		shapeshift.getLimit(pair)
			.then(function(data){
				const body = data.body;

				expect(body.pair).to.equal(pair);
				expect(body.limit).to.be.above(0);
				done();
			}, function(err){
				done(err);
			})
			.catch(function(err){
				done(err);
			});
	});
});

describe('Get coins', function() {
	it('Should return the list of available coins', function(done) {
		shapeshift.getCoins()
			.then(function(data){
				const coins = data.body;

				expect(Object.keys(coins).length).to.be.above(0);
				done();
			}, function(err){
				done(err);
			})
			.catch(function(err){
				done(err);
			});
	});
	
});
