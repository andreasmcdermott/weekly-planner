<script>
	import Day from './Day.svelte';
	import { days } from '../stores/week';
	import { events } from '../stores/events';

</script>

<div class="week">
	{#each $days as date, i}
		<Day {date} events={$events} index={i + 1} />
	{/each}
</div>

<style>
	.week {
		display: flex;
		justify-content: space-between;
		width: 100%;
		height: 100%;
		border: 1px solid black;
	}
</style>
