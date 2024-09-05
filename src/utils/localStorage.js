const EVENTS_KEY = 'events';

export const saveEventToLocalStorage = (event) => {
    let events = JSON.parse(localStorage.getItem(EVENTS_KEY)) || [];
    events.push(event);
    localStorage.setItem(EVENTS_KEY, JSON.stringify(events));
};

export const getEventFromLocalStorage = (eventId) => {
    let events = JSON.parse(localStorage.getItem(EVENTS_KEY)) || [];
    return events[eventId] || null;
};

export const getAllEventsFromLocalStorage = () => {
    return JSON.parse(localStorage.getItem(EVENTS_KEY)) || [];
};
