import { useEventContext } from "../context/EventContext";

function BookingModal({ event }) {

  const { bookings, setBookings, } = useEventContext();
  const handleBooking = () => {
  
    const newBooking = {
      ...event,
      bookingDate: new Date().toISOString(),
      bookingTime: "07:00 PM",
      bookingEmail: "hello@gmail.com",
    };

    setBookings([...bookings, newBooking]);
  };

  return (
    <div>
      <p>Today</p>
      <p>Morning</p>
      <p>Afternoon</p>
      <p>Evening</p>

      <button onClick={handleBooking}>
        Confirm Booking
      </button>
    </div>
  );
}

export default BookingModal;
