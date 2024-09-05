import React from 'react';
import { Link } from 'react-router-dom';

const HomePage = () => {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50">
            <h1 className="text-4xl font-extrabold text-gray-800 mb-8">Welcome to the Event Management Platform</h1>
            <div className="space-x-4">
                <Link
                    to="/create"
                    className="inline-block bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition-colors"
                >
                    Create a New Event
                </Link>
                <Link
                    to="/events"
                    className="inline-block bg-green-600 text-white py-2 px-4 rounded-md hover:bg-green-700 transition-colors"
                >
                    View All Events
                </Link>
            </div>
        </div>
    );
};

export default HomePage;
