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

<div class="OLSKInstallAlertDismiss">
	<button class="OLSKInstallAlertDismissButton OLSKDecorButtonNoStyle OLSKDecorTappable" title={ OLSKLocalized('OLSKInstallAlertDismissButtonText') } on:click={ mod.InterfaceDismissButtonDidClick }>
		<div class="OLSKInstallAlertDismissButtonImage">{@html OLSKUIAssets._OLSKSharedDismiss }</div>
	</button>
</div>

<div class="OLSKInstallAlertMain">
	<strong class="OLSKInstallAlertHeading">{ OLSKLocalized('OLSKInstallAlertHeadingText') }</strong>
	<span class="OLSKInstallAlertBlurb">{@html OLSKFormatted(OLSKLocalized('OLSKInstallAlertBlurbHTMLFormat'), OLSKUIAssets._OLSKSharediOSShare, OLSKUIAssets._OLSKSharediOSA2HS) }</span>
</div>

</div>
{/if}

</div>

<style type="text/css">
.OLSKInstallAlert {
	--OLSKInstallAlertBorderWidth: 1.5px;

	padding: 10px;
	border: var(--OLSKInstallAlertBorderWidth) solid #cccccc;

	background: #e6e6e6;
	color: var(--OLSKCommonForeground);
	font-family: 'Helvetica Neue', 'Helvetica', sans-serif;

	/* OLSKInstallAlertFlexbox:Parent */
	display: flex;
	align-items: stretch;
}

.OLSKInstallAlertDismiss {
	padding-right: 10px;

	opacity: 0.5;

	/* OLSKInstallAlertFlexbox:Child */
	flex-shrink: 1;
	display: flex;
	justify-content: center;
	align-items: center;
}

.OLSKInstallAlertDismissButton, .OLSKInstallAlertDismissButtonImage, .OLSKInstallAlertDismissButtonImage :global(svg) {
	width: 28px;
	height: 28px;
}

.OLSKInstallAlertBlurb {
	display: block;
}
</style>
