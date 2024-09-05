import React from 'react';
import { Link } from 'react-router-dom';

const EventList = ({ events }) => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {events.map((event, index) => (
                <Link to={`/events/${index}`} key={index} className="block">
                    <div className="p-4 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow">
                        <h2 className="text-xl font-bold text-gray-800">{event.name}</h2>
                        <p className="text-sm text-gray-600">{new Date(event.date).toLocaleDateString()}</p>
                        <p className="text-sm text-gray-600">{event.location}</p>
                        <p className="mt-2 text-gray-700">{event.description}</p>
                    </div>
                </Link>
            ))}
        </div>
    );
};

export default EventList;
