<script>
    export let event;
    export let lastDay = false

    const start = '12%';
    const height = '5%';
</script>

<div class="event-container" style="top: {start}; height: {height};" class:lastDay={lastDay}>
    <div class="event" style="background: {event.color};">
        <h3>{event.title}</h3>
    </div>
</div>

<style>
    .event-container {
        position: absolute;
        left: 0;
        width: 100%;
        z-index: 3;
        display: flex;
        padding: 0 1px 0 0;
    }

    .lastDay {
        padding-right: 0;
    }

    .event {
        width: 100%;
        padding: 2px;
    }

    h3 {
        font-size: 0.7rem;
        margin: 0;
        font-weight: normal;
    }
</style>
