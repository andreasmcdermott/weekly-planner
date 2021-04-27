<script>
	import Title from './Title.svelte';
	import Event from './Event.svelte';

	export let index;
	export let date;
	export let events = [];
</script>

<div class="day-container">
	<Title>
		{date.toLocaleDateString('en', { weekday: 'long' })}
		<span class="subtitle">{date.toLocaleDateString('en', { month: 'numeric', day: 'numeric' })}</span>
	</Title>

	<div class="day" class:lastDay={index === 5}>
		{#each events as event}
			<Event {event} lastDay={index === 5} />
		{/each}
	</div>
</div>

<style>
	.day-container {
		width: 100%;
		height: 100%;
		flex: auto;
		display: flex;
		flex-direction: column;
		position: relative;
	}

	.day {
		border-right: 1px solid #ccc;
		flex: auto;
	}

	.lastDay {
		border-right: none;
	}

	.subtitle {
		font-size: 0.75em;
	}
</style>
