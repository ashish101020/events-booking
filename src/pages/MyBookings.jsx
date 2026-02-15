import Navbar from "../components/Navbar";
import "./MyBookings.css";
import SearchEvent from "../components/SearchEvent";
import { useEventContext } from "../context/EventContext";

function MyBookings() {
  const { bookings } = useEventContext();

  return (
    <>
      <Navbar />
      <div className="search-hero">
        <div className="search1-wrapper">
          <div style={{ display: "flex", justifyContent:"space-between" , padding:"34px"}}>
            <h1 style={{color:"white"}}>My Bookings</h1>
            <SearchEvent />
          </div>
        </div>
      </div>
      <div>
        {bookings.map((booking, index) => (
          <div key={index}>
            <h3>{booking.eventName}</h3>
          </div>
        ))}
      </div>
    </>
  );
}

export default MyBookings;
