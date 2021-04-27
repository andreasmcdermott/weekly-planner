<script>
    import { setWeek } from '../stores/week';
    const date = new Date();
    date.setDate(date.getDate() + (7 - date.getDay() + 1));
    setWeek(new Date(date));
</script>

<span>{date.toLocaleDateString('en', { weekday: 'long', month: 'short', day: 'numeric' })}</span>