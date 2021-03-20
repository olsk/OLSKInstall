const kDefaultRoute = require('./controller.js').OLSKControllerRoutes().shift();

Object.entries({
	OLSKInstall: '.OLSKInstall',

	OLSKInstallAlert: '.OLSKInstallAlert',
	OLSKInstallAlertHeading: '.OLSKInstallAlertHeading',
	OLSKInstallAlertBlurb: '.OLSKInstallAlertBlurb',
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

	it('hides OLSKInstallAlert', function () {
		browser.assert.elements(OLSKInstallAlert, 0);
	});

	context('DebugFakeAlertVisible', function () {
		
		before(function() {
			return browser.OLSKVisit(kDefaultRoute, {
				DebugFakeAlertVisible: true,
			});
		});

		it('shows OLSKInstallAlert', function () {
			browser.assert.elements(OLSKInstallAlert, 1);
		});

		it('shows OLSKInstallAlertHeading', function () {
			browser.assert.elements(OLSKInstallAlertHeading, 1);
		});

		it('shows OLSKInstallAlertBlurb', function () {
			browser.assert.elements(OLSKInstallAlertBlurb, 1);
		});
	
	});

});
