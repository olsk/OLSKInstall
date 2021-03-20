const kDefaultRoute = require('./controller.js').OLSKControllerRoutes().shift();

describe('OLSKInstall_Misc', function () {

	before(function() {
		return browser.OLSKVisit(kDefaultRoute, {
			DebugFakeAlertVisible: true,
		});
	});

	describe('OLSKInstallAlertDismissButton', function test_OLSKInstallAlertDismissButton () {

		it('classes OLSKDecorButtonNoStyle', function () {
			browser.assert.hasClass(OLSKInstallAlertDismissButton, 'OLSKDecorButtonNoStyle');
		});

		it('classes OLSKDecorTappable', function () {
			browser.assert.hasClass(OLSKInstallAlertDismissButton, 'OLSKDecorTappable');
		});

	});

	describe('OLSKInstallAlertDismissButtonImage', function test_OLSKInstallAlertDismissButtonImage () {

		it('sets src', function () {
			browser.assert.elements(`${ OLSKInstallAlertDismissButtonImage } #_OLSKSharedDiscard`, 1);
		});
	
	});

});
