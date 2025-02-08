import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

interface Appointment {
    id: number;
    name: string;
    contact: string;
    date: string;
    time: string;
}

const Appointments = () => {
    const { data: appointments, refetch } = useQuery<Appointment[]>(
        ['appointments'],
        async () => {
            const response = await axios.get('http://localhost:5000/appointments');
            return response.data;
        }
    );

    const handleCancel = async (id: number) => {
        await axios.delete(`http://localhost:5000/appointments/${id}`);
        refetch();
    };

    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
            <h2 className="text-2xl font-bold mb-4">Your Appointments</h2>
            <div className="w-full max-w-md">
                {appointments?.map((appointment) => (
                    <div
                        key={appointment.id}
                        className="bg-white p-4 rounded shadow-md mb-2 flex justify-between items-center"
                    >
                        <div>
                            <p className="font-bold">{appointment.name}</p>
                            <p>
                                {appointment.date} at {appointment.time}
                            </p>
                        </div>
                        <button
                            className="px-3 py-1 bg-red-500 text-white rounded hover:bg-red-700"
                            onClick={() => handleCancel(appointment.id)}
                        >
                            Cancel
                        </button>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Appointments;
