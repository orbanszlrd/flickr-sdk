var flickr = require('..')();
var assert = require('assert');

describe('flickr.photos.people.delete', function () {

	it('requires "api_key"', function () {

		assert.throws(function () {
			flickr.photos.people.delete({ photo_id: '_', user_id: '_' });
		}, function (err) {
			return err.message === 'Missing required argument "api_key"';
		});

	});

	it('requires "photo_id"', function () {

		assert.throws(function () {
			flickr.photos.people.delete({ api_key: '_', user_id: '_' });
		}, function (err) {
			return err.message === 'Missing required argument "photo_id"';
		});

	});

	it('requires "user_id"', function () {

		assert.throws(function () {
			flickr.photos.people.delete({ api_key: '_', photo_id: '_' });
		}, function (err) {
			return err.message === 'Missing required argument "user_id"';
		});

	});

	it('calls the correct API method');

});