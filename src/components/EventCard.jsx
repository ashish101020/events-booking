import { useState } from "react";
import BookingModal from "./BookingModal";


function EventCard({ event }) {
  const [showBooking, setShowBooking] = useState(false);

  return (
    <div className="card">
      <h3>{event.eventName}</h3>
      <button onClick={() => setShowBooking(true)}>
        Book FREE Event
      </button>

      {showBooking && (
        <BookingModal event={event} />
      )}
    </div>
  );
}

export default EventCard;
