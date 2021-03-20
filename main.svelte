<script>
export let DebugFakeAlertVisible = false;

import { OLSKLocalized } from 'OLSKInternational';
import { OLSKFormatted } from 'OLSKString';

import OLSKInstallLogic from './main.js';

const mod = {

	// VALUE

	_ValueOLSKInstallAlertVisible: DebugFakeAlertVisible,

	// INTERFACE

	InterfaceDismissButtonDidClick () {
		mod.ControlDismiss();
	},

	// CONTROL

	ControlDismiss () {
		window.localStorage.setItem(OLSKInstallLogic.OLSKInstallDismissPreferenceKey(), true);

		mod._ValueOLSKInstallAlertVisible = false;
	},

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
<button class="OLSKInstallAlertDismissButton OLSKDecorButtonNoStyle OLSKDecorTappable" title={ OLSKLocalized('OLSKInstallAlertDismissButtonText') } on:click={ mod.InterfaceDismissButtonDidClick }>
	<div class="OLSKInstallAlertDismissButtonImage">{@html OLSKUIAssets._OLSKSharedDiscard }</div>
</button>

</div>
{/if}

</div>
