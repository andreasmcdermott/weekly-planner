<script>
    import WeekPicker from './WeekPicker.svelte';
    import HourPicker from './HourPicker.svelte';

</script>

<div class="container">
    <fieldset>
        <legend>Week</legend>
        <WeekPicker />
    </fieldset>

    <fieldset>
        <legend>Hours</legend>
        <HourPicker />
    </fieldset>
</div>

<style>
    .container {
        width: 100%;
        height: 100%;
        box-shadow: 2px 2px 4px 2px rgba(0, 0, 0, 0.2);
        padding: 1rem;
        display: flex;
        flex-direction: column;
    }

    fieldset {
        border: none;
        padding: 0.5rem 0;
        margin: 0 0 1rem 0;
        font-size: 0.9rem;
    }

    fieldset:last-child {
        margin-bottom: 0;
    }

    legend {
        padding: 0.25rem;
        color: white;
        margin: 0;
        text-transform: uppercase;
        letter-spacing: 2px;
        font-weight: normal;
        font-size: 1rem;
        background: hotpink;
        display: block;
        width: 100%;
    }
</style>