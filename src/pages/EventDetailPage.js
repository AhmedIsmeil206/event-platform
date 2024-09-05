import React from 'react';
import { useParams } from 'react-router-dom';
import EventDetails from '../components/EventDetails';
import { getEventFromLocalStorage } from '../utils/localStorage';

const EventDetailPage = () => {
    const { eventId } = useParams();
    const event = getEventFromLocalStorage(eventId);

    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50">
            <h1 className="text-3xl font-bold text-gray-800 mb-6">Event Details</h1>
            <EventDetails event={event} />
        </div>
    );
};

export default EventDetailPage;
