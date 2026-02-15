import { createContext, useContext, useEffect, useState } from "react";

const EventContext = createContext();

export const EventContextProvider = ({children}) => {

    const [bookings, setBookings] = useState(()=>{
        const savedBookings = localStorage.getItem("bookings");
        return savedBookings ? JSON.parse(savedBookings) : [];
    });
    const [events, setEvents] = useState([]);
    const [selectedCity, setSelectedCity] = useState("Austin");

    useEffect(()=>{
        if(bookings){
            localStorage.setItem("bookings", JSON.stringify(bookings));
        }
    },[bookings]);

    return (
        <EventContext.Provider value={{ bookings, setBookings, events, setEvents, selectedCity, setSelectedCity }}>
            {children}
        </EventContext.Provider>
    )
}

export const useEventContext = () => {
    return (
        useContext(EventContext)
    );
}