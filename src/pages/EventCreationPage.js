import React, { useState } from 'react';
import EventForm from '../components/EventForm';
import { saveEventToLocalStorage } from '../utils/localStorage';

const EventCreationPage = () => {
    const [eventCreated, setEventCreated] = useState(false);

    const handleEventSubmit = (event) => {
        saveEventToLocalStorage(event);
        setEventCreated(true);
    };

    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50">
            <h1 className="text-3xl font-bold text-gray-800 mb-6">Create a New Event</h1>
            {eventCreated ? (
                <div className="text-green-600 text-lg font-semibold">Event created successfully!</div>
            ) : (
                <EventForm onSubmit={handleEventSubmit} />
            )}
        </div>
    );
};

export default EventCreationPage;
