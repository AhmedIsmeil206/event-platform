import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from '../pages/HomePage';
import EventCreationPage from '../pages/EventCreationPage';
import EventDetailPage from '../pages/EventDetailPage';
import EventListPage from '../pages/EventListPage';

const AppRouter = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/create" element={<EventCreationPage />} />
                <Route path="/events" element={<EventListPage />} />
                <Route path="/events/:eventId" element={<EventDetailPage />} />
            </Routes>
        </Router>
    );
};

export default AppRouter;
