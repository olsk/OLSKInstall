const mod = {

	OLSKInstallDismissPreferenceKey () {
		return 'OLSK_INSTALL_DID_DISMISS';
	},

	OLSKInstallSetup (params) {
		if (typeof params !== 'object' || params === null) {
			throw new Error('OLSKErrorInputNotValid');
		}

		if (typeof params.ParamMod !== 'object' || params.ParamMod === null) {
			throw new Error('OLSKErrorInputNotValid');
		}

		if ((params.window || window).innerWidth > 760) {
			return;
		}

		if (!(params.window || window).navigator) {
			return;
		}

		if ((params.window || window).navigator.standalone) {
			return;
		}

		if ((params.window || window).localStorage.getItem(mod.OLSKInstallDismissPreferenceKey())) {
			return;
		}

		params.ParamMod._ValueOLSKInstallAlertVisible = true;
	},
	
};

Object.assign(exports, mod);
