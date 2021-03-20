<script>
export let DebugFakeAlertVisible = false;

import { OLSKLocalized } from 'OLSKInternational';
import { OLSKFormatted } from 'OLSKString';

const mod = {

	// VALUE

	_ValueUpdateAlertIsVisible: DebugFakeAlertVisible,

	// SETUP

	SetupEverything() {
	},

	// LIFECYCLE

	LifecycleModuleDidLoad() {
		mod.SetupEverything();
	},

};

mod.LifecycleModuleDidLoad();

import OLSKUIAssets from 'OLSKUIAssets';
</script>

<div class="OLSKInstall">

{#if mod._ValueUpdateAlertIsVisible }
<div class="OLSKInstallAlert">

<span class="OLSKInstallAlertHeading">{ OLSKLocalized('OLSKInstallAlertHeadingText') }</span>
<p class="OLSKInstallAlertBlurb">{@html OLSKFormatted(OLSKLocalized('OLSKInstallAlertBlurbHTMLFormat'), OLSKUIAssets._OLSKSharediOSShare, OLSKUIAssets._OLSKSharediOSA2HS) }</p>

</div>
{/if}

</div>
