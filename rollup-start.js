import RollupStart from './main.svelte';

const OLSKInstall = new RollupStart({
	target: document.body,
	props: Object.assign({
	}, Object.fromEntries(Array.from((new window.URLSearchParams(window.location.search)).entries()))),
});

export default OLSKInstall;
