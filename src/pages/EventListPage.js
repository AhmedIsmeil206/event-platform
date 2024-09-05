import React from 'react';
import { Link } from 'react-router-dom';
import EventList from '../components/EventList';
import { getAllEventsFromLocalStorage } from '../utils/localStorage';

const EventListPage = () => {
    const events = getAllEventsFromLocalStorage();

    return (
        <div className="min-h-screen flex flex-col items-center bg-gray-50">
            <h1 className="text-3xl font-bold text-gray-800 my-6">All Events</h1>
            <EventList events={events} />
            <Link to="/" className="mt-6 text-blue-600 hover:underline">
                Back to Home
            </Link>
        </div>
    );
};

export default EventListPage;
