<script>
	import Day from './Day.svelte';

	export let date = new Date();

	let days = [];
	$: {
		days.push(new Date(date));
		for (let i = 0; i < 4; ++i) {
			date.setDate(date.getDate() + 1);
			days.push(new Date(date));
		}
	}

	const events = [
		{
			title: 'Event!!!',
			color: 'pink',
			startTime: new Date(),
			endTime: new Date().setHours(new Date().getHours() + 1)
		}
	];
</script>

<div class="week">
	{#each days as date, i}
		<Day {date} {events} index={i + 1} />
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
