const kDefaultRoute = require('./controller.js').OLSKControllerRoutes().shift();

describe('OLSKInstall_Misc', function () {

	before(function() {
		return browser.OLSKVisit(kDefaultRoute, {
			DebugFakeAlertVisible: true,
		});
	});

	describe('OLSKInstallAlertDismissButton', function test_OLSKInstallAlertDismissButton () {

		it('classes OLSKDecorButtonNoStyle', function () {
			return browser.assert.hasClass(OLSKInstallAlertDismissButton, 'OLSKDecorButtonNoStyle');
		});

		it('classes OLSKDecorTappable', function () {
			return browser.assert.hasClass(OLSKInstallAlertDismissButton, 'OLSKDecorTappable');
		});

	});

	describe('OLSKInstallAlertDismissButtonImage', function test_OLSKInstallAlertDismissButtonImage () {

		it('sets src', function () {
			return browser.assert.elements(`${ OLSKInstallAlertDismissButtonImage } #_OLSKSharedDismiss`, 1);
		});
	
	});

});
