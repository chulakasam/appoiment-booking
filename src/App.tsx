import { Link } from 'react-router-dom';

const App = () => {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
            <h1 className="text-3xl font-bold text-blue-600 mb-6">
                Appointment Booking System
            </h1>
            <nav className="space-x-4">
                <Link
                    to="/book"
                    className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700"
                >
                    Book Appointment
                </Link>
                <Link
                    to="/appointments"
                    className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-700"
                >
                    View Appointments
                </Link>
            </nav>
        </div>
    );
};

export default App;
