import { useEventContext } from '../context/EventContext'
import EventCard from './EventCard';
import './EventList.css';

const EventList = () => {
    const { events, selectedCity } = useEventContext();
  return (
    <div className='event-container'>
        {events.length > 0 && (
        <h1>
          {events.length} events available in {selectedCity}
        </h1>
      )}

      <div className="events-grid">
        {events.map((event, index) => (
          <EventCard key={index} event={event} />
        ))}
      </div>
    </div>
  )
}

export default EventList