import React from 'react';

const EventDetails = ({ event }) => {
    if (!event) {
        return <div className="text-center text-gray-500">No event selected</div>;
    }

    return (
        <div className="max-w-xl mx-auto bg-white p-6 rounded-lg shadow-md">
            <h1 className="text-2xl font-bold text-gray-800">{event.name}</h1>
            <p className="text-sm text-gray-600">Date: {new Date(event.date).toLocaleDateString()}</p>
            <p className="text-sm text-gray-600">Location: {event.location}</p>
            <p className="mt-4 text-gray-700">{event.description}</p>
        </div>
    );
};

export default EventDetails;
