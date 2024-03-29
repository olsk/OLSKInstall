const kDefaultRoute = require('./controller.js').OLSKControllerRoutes().shift();

Object.entries({
	OLSKInstall: '.OLSKInstall',

	OLSKInstallAlert: '.OLSKInstallAlert',
	OLSKInstallAlertHeading: '.OLSKInstallAlertHeading',
	OLSKInstallAlertBlurb: '.OLSKInstallAlertBlurb',
	OLSKInstallAlertDismissButton: '.OLSKInstallAlertDismissButton',
	OLSKInstallAlertDismissButtonImage: '.OLSKInstallAlertDismissButtonImage',
}).map(function (e) {
	return global[e.shift()] = e.pop();
});

describe('OLSKInstall_Access', function () {

	before(function() {
		return browser.OLSKVisit(kDefaultRoute);
	});

	it('shows OLSKInstall', function () {
		return browser.assert.elements(OLSKInstall, 1);
	});

	it('hides OLSKInstallAlert', function () {
		return browser.assert.elements(OLSKInstallAlert, 0);
	});

	context('DebugFakeAlertVisible', function () {
		
		before(function() {
			return browser.OLSKVisit(kDefaultRoute, {
				DebugFakeAlertVisible: true,
			});
		});

		it('shows OLSKInstallAlert', function () {
			return browser.assert.elements(OLSKInstallAlert, 1);
		});

		it('shows OLSKInstallAlertHeading', function () {
			return browser.assert.elements(OLSKInstallAlertHeading, 1);
		});

		it('shows OLSKInstallAlertBlurb', function () {
			return browser.assert.elements(OLSKInstallAlertBlurb, 1);
		});

		it('shows OLSKInstallAlertDismissButton', function () {
			return browser.assert.elements(OLSKInstallAlertDismissButton, 1);
		});

		it('shows OLSKInstallAlertDismissButtonImage', function () {
			return browser.assert.elements(OLSKInstallAlertDismissButtonImage, 1);
		});

		context('OLSKInstallAlertDismissButton', function () {
			
			before(function () {
				return browser.pressButton(OLSKInstallAlertDismissButton)
			});

			it('hides OLSKInstallAlert', function () {
				return browser.assert.elements(OLSKInstallAlert, 0);
			});
		
		});
	
	});

});
