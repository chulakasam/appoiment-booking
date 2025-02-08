
import ReactDOM from "react-dom/client";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import App from "./App";

import "./index.css";
import BookAppointment from "./pages/BookAppoinment.tsx";
import Appointments from "./pages/Appoinment.tsx";

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById("root")!).render(
    <QueryClientProvider client={queryClient}>
        <Router>
            <Routes>
                <Route path="/" element={<App />} />
                <Route path="/book" element={<BookAppointment />} />
                <Route path="/appointments" element={<Appointments />} />
            </Routes>
        </Router>
    </QueryClientProvider>
);
