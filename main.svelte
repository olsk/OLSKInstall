<script>
export let DebugFakeAlertVisible = false;

import { OLSKLocalized } from 'OLSKInternational';
import { OLSKFormatted } from 'OLSKString';

import OLSKInstallLogic from './main.js';

const mod = {

	// VALUE

	_ValueOLSKInstallAlertVisible: DebugFakeAlertVisible,

	// LIFECYCLE

	LifecycleModuleDidLoad() {
		OLSKInstallLogic.OLSKInstallSetup({
			ParamMod: mod,
		});
	},

};

mod.LifecycleModuleDidLoad();

import OLSKUIAssets from 'OLSKUIAssets';
</script>

<div class="OLSKInstall">

{#if mod._ValueOLSKInstallAlertVisible }
<div class="OLSKInstallAlert">

<span class="OLSKInstallAlertHeading">{ OLSKLocalized('OLSKInstallAlertHeadingText') }</span>
<p class="OLSKInstallAlertBlurb">{@html OLSKFormatted(OLSKLocalized('OLSKInstallAlertBlurbHTMLFormat'), OLSKUIAssets._OLSKSharediOSShare, OLSKUIAssets._OLSKSharediOSA2HS) }</p>

</div>
{/if}

</div>
