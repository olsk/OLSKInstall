const kDefaultRoute = require('./controller.js').OLSKControllerRoutes().shift();

Object.entries({
	OLSKInstall: '.OLSKInstall',
}).map(function (e) {
	return global[e.shift()]  = e.pop();
});

describe('OLSKInstall_Access', function () {

	before(function() {
		return browser.OLSKVisit(kDefaultRoute);
	});

	it('shows OLSKInstall', function () {
		browser.assert.elements(OLSKInstall, 1);
	});

