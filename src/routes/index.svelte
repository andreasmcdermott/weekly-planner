<script>
	import Week from '../elements/Week.svelte';
	import Timeline from '../elements/Timeline.svelte';
	import Tools from '../elements/Tools.svelte';
</script>

<main>
	<div class="tools">
		<Tools />
	</div>
	<div class="display">
		<Timeline />
		<Week />
	</div>
</main>

<style>
	main {
		display: flex;
		width: 80%;
 
	}

	.tools {
		flex: auto;
		margin-right: 4rem;
	}

	.display {
		flex: none;
		width: 7.5in;
		height: 9in;
		position: relative;
		overflow: hidden;
		padding-left: 0.5in;
	}

	@media print {
		.tools {
			display: none;
		}
	}
</style>
