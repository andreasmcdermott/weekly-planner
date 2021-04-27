<script>
    import Title from './Title.svelte';
    import { hours } from '../stores/week';
</script>

<div class="timeline-container">
    <Title />
    <div class="timeline">
        {#each $hours as hour}
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
        padding-left: 1px;
        pointer-events: none;
    }

	.timeline {
		display: flex;
		flex-direction: column;
        height: 100%;
        width: calc(100% - 0.5in - 1px);
	}

    .hour {
        border-bottom: 1px solid #ccc;
        flex: auto;
    }

    .hour:last-of-type {
        border-bottom: none;
    }

    .label {
        font-size: 0.66rem;
        padding: 0 0.25rem;
        display: block;
        position: absolute;
        right: 100%;
    }
</style>