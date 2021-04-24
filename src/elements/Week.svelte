<script>
	import Day from './Day.svelte';
    
	const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'];
</script>

<div class="week">
	{#each days as day}
		<Day {day} />
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
