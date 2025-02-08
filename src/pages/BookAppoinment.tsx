import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const BookAppointment = () => {
    const [name, setName] = useState<string>("");
    const [contact, setContact] = useState<string>("");
    const [date, setDate] = useState<string>("");
    const [time, setTime] = useState<string>("");
    const [loading, setLoading] = useState<boolean>(false);
    const [successMessage, setSuccessMessage] = useState<string>("");
    const [errorMessage, setErrorMessage] = useState<string>("");
    const navigate = useNavigate();

    const handleBooking = async (e: React.FormEvent) => {
        e.preventDefault();


        if (!name || !contact || !date || !time) {
            setErrorMessage("Please fill in all the fields.");
            return;
        }

        setLoading(true);
        setErrorMessage("");

        try {
            await axios.post("http://localhost:5000/appointments", {
                name,
                contact,
                date,
                time,
            });
            setSuccessMessage("Appointment booked successfully!");
            navigate("/appointments");
        } catch (error) {
            setErrorMessage("Failed to book appointment. Please try again later.");
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-blue-500 via-blue-300 to-blue-500 px-4 py-8 sm:px-8">
            <h2 className="text-4xl font-bold text-white mb-6 drop-shadow-lg">Book an Appointment</h2>
            <form
                className="bg-white p-8 rounded-2xl shadow-2xl w-full max-w-md space-y-8 transform hover:scale-105 transition duration-300 ease-in-out"
                onSubmit={handleBooking}
            >

                <div className="flex flex-col">
                    <label htmlFor="name" className="text-gray-800 text-sm font-medium mb-2">Your Name</label>
                    <input
                        type="text"
                        id="name"
                        placeholder="Enter your name"
                        className="p-4 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:outline-none shadow-md"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required
                    />
                </div>


                <div className="flex flex-col">
                    <label htmlFor="contact" className="text-gray-800 text-sm font-medium mb-2">Contact</label>
                    <input
                        type="text"
                        id="contact"
                        placeholder="Enter your contact"
                        className="p-4 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:outline-none shadow-md"
                        value={contact}
                        onChange={(e) => setContact(e.target.value)}
                        required
                    />
                </div>


                <div className="flex flex-col">
                    <label htmlFor="date" className="text-gray-800 text-sm font-medium mb-2">Date</label>
                    <input
                        type="date"
                        id="date"
                        className="p-4 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:outline-none shadow-md"
                        value={date}
                        onChange={(e) => setDate(e.target.value)}
                        required
                    />
                </div>


                <div className="flex flex-col">
                    <label htmlFor="time" className="text-gray-800 text-sm font-medium mb-2">Time</label>
                    <input
                        type="time"
                        id="time"
                        className="p-4 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:outline-none shadow-md"
                        value={time}
                        onChange={(e) => setTime(e.target.value)}
                        required
                    />
                </div>


                {errorMessage && (
                    <div className="text-red-500 text-sm mt-4">{errorMessage}</div>
                )}


                {successMessage && (
                    <div className="text-green-500 text-sm mt-4">{successMessage}</div>
                )}


                <button
                    type="submit"
                    className="w-full py-3 bg-blue-600 text-white font-semibold rounded-xl hover:bg-blue-700 transition duration-300 ease-in-out shadow-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                    disabled={loading}
                >
                    {loading ? "Booking..." : "Book Appointment"}
                </button>
            </form>
        </div>
    );
};

export default BookAppointment;
