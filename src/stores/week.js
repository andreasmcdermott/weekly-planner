import { writable, derived } from 'svelte/store';

export const days = writable([]);

const firstHour = writable(null); 
const lastHour = writable(null);

export const hours = derived([firstHour, lastHour], ([$first, $last], set) => {
    if (!$first || !$last || $first >= $last) {
        set([]);
    } else {
        const h = [];
        for (let i = $first; i <= $last; ++i) {
            h.push(i);
        }
        set(h);
    }
});

export const setWeek = (date) => {
    const d = [];
    d.push(new Date(date));
    for (let i = 0; i < 4; ++i) {
        date.setDate(date.getDate() + 1);
        d.push(new Date(date));
    }
    days.set(d);
}

export const setFirstHour = (hour) => {
    firstHour.set(hour);
};

export const setLastHour = (hour) => {
    lastHour.set(hour);
};