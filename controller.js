const mod = {

	OLSKControllerRoutes  () {
		return [{
			OLSKRoutePath: '/stub/OLSKInstall',
			OLSKRouteMethod: 'get',
			OLSKRouteSignature: 'OLSKInstallStubRoute',
			OLSKRouteFunction(req, res, next) {
				return res.OLSKExpressLayoutRender(require('path').join(__dirname, 'stub-view'));
			},
			OLSKRouteLanguageCodes: ['en', 'fr', 'es', 'pt'],
		}];
	},

	OLSKControllerSharedStaticAssetFolders () {
		return [
			'node_modules',
		];
	},

};

Object.assign(exports, mod);
