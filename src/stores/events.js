import { writable } from 'svelte/store';

export const events = writable([
    {
        title: 'Event!!!',
        color: 'pink',
        startTime: new Date(),
        endTime: new Date().setHours(new Date().getHours() + 1)
    }
]);