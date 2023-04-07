const kDefaultRoute = require('./controller.js').OLSKControllerRoutes().shift();

kDefaultRoute.OLSKRouteLanguageCodes.forEach(function (OLSKRoutingLanguage) {

	const uLocalized = function (inputData) {
		return OLSKTestingLocalized(inputData, OLSKRoutingLanguage);
	};

	describe('OLSKInstall_Localize-' + OLSKRoutingLanguage, function () {

		const uFile = function (inputData) {
			return require('OLSKString').OLSKStringReplaceTokens(require('fs').readFileSync(`./node_modules/OLSKUIAssets/${ inputData }.svg`, 'utf8'), {
				[`<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN" "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd">`]: '',
				'  xm': ' xm',
				' rx="1" />': ' rx="1"></rect>',
				' />': '></path>',
			}).split('<?xml version="1.0" encoding="UTF-8"?>').join('<!--?xml version="1.0" encoding="UTF-8"?-->');
		};

		before(function() {
			return browser.OLSKVisit(kDefaultRoute, {
				OLSKRoutingLanguage,
				DebugFakeAlertVisible: true,
			});
		});

		it('localizes OLSKInstallAlertHeading', function () {
			return browser.assert.text(OLSKInstallAlertHeading, uLocalized('OLSKInstallAlertHeadingText'));
		});

		it('localizes OLSKInstallAlertBlurb', function () {
			return browser.assert.OLSKInnerHTML(OLSKInstallAlertBlurb, OLSKTestingFormatted(uLocalized('OLSKInstallAlertBlurbHTMLFormat'), uFile('_OLSKSharediOSShare'), uFile('_OLSKSharediOSA2HS')));
		});

		it('localizes OLSKInstallAlertDismissButton', function () {
			return browser.assert.attribute(OLSKInstallAlertDismissButton, 'title', uLocalized('OLSKInstallAlertDismissButtonText'));
		});
	
	});

});
