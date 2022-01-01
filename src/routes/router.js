import { BrowserRouter, Route, Routes, Switch } from "react-router-dom";
import { HomeScreen } from "../home/screen.home";
import { TicketsScreen } from "../tickets/screen.tickets";

export const RouteComponent = () => {
    return (
        <div>
            <BrowserRouter>
            <Routes >
                <Route exact path="/" element={<HomeScreen />} />
                <Route exact path="/tickets"  element={<TicketsScreen />} />
            </Routes>
            </BrowserRouter>
        </div>
    );
};