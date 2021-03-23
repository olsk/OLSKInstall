const { throws, deepEqual } = require('assert');

const mod = require('./ui-logic.js');

describe('OLSKInstallDismissPreferenceKey', function() {

	it('returns string', function () {
		deepEqual(mod.OLSKInstallDismissPreferenceKey(), 'OLSK_INSTALL_DID_DISMISS');
	});

});

describe('OLSKInstallSetup', function() {

	const _OLSKInstallSetup = function (inputData = {}) {
		const ParamMod = inputData.ParamMod || {};
		
		mod.OLSKInstallSetup(Object.assign({
			ParamMod,
			window: {
				navigator: inputData,
				localStorage: Object.assign({
					getItem: (function () {}),
				}, inputData),
				innerWidth: 760 * Math.random(),
			},
		}, inputData))

		return ParamMod._ValueOLSKInstallAlertVisible;
	};
	
	it('throws if not object', function () {
		throws(function () {
			mod.OLSKInstallSetup(null);
		}, /OLSKErrorInputNotValid/);
	});
	
	it('throws if not object', function () {
		throws(function () {
			_OLSKInstallSetup({
				ParamMod: null,
			});
		}, /OLSKErrorInputNotValid/);
	});

	context('ParamMod._ValueOLSKInstallAlertVisible', function () {

		it('sets to true', function () {
			deepEqual(_OLSKInstallSetup(), true);
		});

		it('ignores if innerWidth not valid', function () {
			deepEqual(_OLSKInstallSetup({
				window: {
					innerWidth: 761,
				},
			}), undefined);
		});

		it('ignores if no navigator', function () {
			deepEqual(_OLSKInstallSetup({
				window: {},
			}), undefined);
		});

		it('ignores if standalone true', function () {
			deepEqual(_OLSKInstallSetup({
				standalone: true,
			}), undefined);
		});

		it('calls localStorage.getItem', function () {
			deepEqual(uCapture(function (getItem) {
				_OLSKInstallSetup({
					getItem,
				})
			}), [mod.OLSKInstallDismissPreferenceKey()]);
		});

		it('ignores if OLSKInstallDismissPreferenceKey true', function () {
			deepEqual(_OLSKInstallSetup({
				getItem: (function () {
					return true;
				}),
			}), undefined);
		});
	
	});

});
