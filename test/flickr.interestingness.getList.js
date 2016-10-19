var flickr = require('..')();
var assert = require('assert');

describe('flickr.interestingness.getList', function () {

	it('requires "api_key"', function () {

		assert.throws(function () {
			flickr.interestingness.getList({});
		}, function (err) {
			return err.message === 'Missing required argument "api_key"';
		});

	});

	it('returns a Request instance', function () {
		var req = flickr.interestingness.getList({ api_key: '_' });

		assert.equal(req.method, 'GET');
		assert.equal(req.url, 'https://api.flickr.com/services/rest');
	});

});
