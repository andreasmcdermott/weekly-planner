<script>
    import { setFirstHour, setLastHour } from '../stores/week';

    const firstHour = 8;
    const lastHour = 17;

    setFirstHour(firstHour);
    setLastHour(lastHour);
</script>

<div>
    <span>{firstHour}:00</span> - <span>{lastHour}:00</span>
</div>