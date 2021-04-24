<script>
    import Title from './Title.svelte';

    const hours = [8, 9, 10, 11, 12, 13, 14, 15, 16, 17];
</script>

<div class="timeline-container">
    <Title />
    <div class="timeline">
        {#each hours as hour}
            <div class="hour">
                <span class="label">
                    {hour}:00
                </span>
            </div>
        {/each}
    </div>
</div>

<style>
    .timeline-container {
        width: 100%;	
        height: 100%;
        position: absolute;	
        display: flex;
        flex-direction: column;
        justify-content: stretch;
        align-items: flex-start;
        z-index: 2;
    }

	.timeline {
		display: flex;
		flex-direction: column;
        height: 100%;
        width: 100%;
	}

    .hour {
        border-bottom: 1px solid #ccc;
        flex: auto;
    }

    .hour:last-of-type {
        border-bottom: none;
    }

    .label {
        font-size: 0.65rem;
        padding: 0 0.25rem;
        display: block;
    }
</style>