import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';

const EventForm = ({ onSubmit }) => {
    const formik = useFormik({
        initialValues: {
            name: '',
            date: '',
            location: '',
            description: '',
        },
        validationSchema: Yup.object({
            name: Yup.string().required('Event name is required'),
            date: Yup.date().required('Date is required'),
            location: Yup.string().required('Location is required'),
            description: Yup.string().required('Description is required'),
        }),
        onSubmit: values => {
            onSubmit(values);
        },
    });

    return (
        <form onSubmit={formik.handleSubmit} className="max-w-lg mx-auto bg-white p-6 rounded-lg shadow-md space-y-4">
            <div>
                <label className="block text-sm font-medium text-gray-700">Event Name</label>
                <input
                    type="text"
                    name="name"
                    onChange={formik.handleChange}
                    value={formik.values.name}
                    className="mt-1 p-2 w-full border border-gray-300 rounded-md"
                />
                {formik.errors.name ? <div className="text-red-500 text-sm">{formik.errors.name}</div> : null}
            </div>
            <div>
                <label className="block text-sm font-medium text-gray-700">Date</label>
                <input
                    type="date"
                    name="date"
                    onChange={formik.handleChange}
                    value={formik.values.date}
                    className="mt-1 p-2 w-full border border-gray-300 rounded-md"
                />
                {formik.errors.date ? <div className="text-red-500 text-sm">{formik.errors.date}</div> : null}
            </div>
            <div>
                <label className="block text-sm font-medium text-gray-700">Location</label>
                <input
                    type="text"
                    name="location"
                    onChange={formik.handleChange}
                    value={formik.values.location}
                    className="mt-1 p-2 w-full border border-gray-300 rounded-md"
                />
                {formik.errors.location ? <div className="text-red-500 text-sm">{formik.errors.location}</div> : null}
            </div>
            <div>
                <label className="block text-sm font-medium text-gray-700">Description</label>
                <textarea
                    name="description"
                    onChange={formik.handleChange}
                    value={formik.values.description}
                    className="mt-1 p-2 w-full border border-gray-300 rounded-md"
                />
                {formik.errors.description ? <div className="text-red-500 text-sm">{formik.errors.description}</div> : null}
            </div>
            <button type='submit' class="bg-blue-600 text-white font-semibold py-2 px-4 rounded-md hover:bg-blue-700 transition-colors duration-300 ease-in-out">
  Create Event
</button>

        </form>
    );
};

export default EventForm;
