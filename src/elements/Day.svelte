<script>
	import Title from './Title.svelte';

	export let day;
</script>

<div class="day-container">
	<Title>{day}</Title>
	<div class="day" />
</div>

<style>
	.day-container {
		width: 100%;
		height: 100%;
        flex: auto;
        display: flex;
        flex-direction: column;
	}
	.day {
        border-right: 1px solid #ccc;
        flex: auto;
	}

	.day-container:last-of-type .day {
		border-right: none;
	}
</style>
