import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import apiService from '../services/api.service';

function EventsList() {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    apiService
      .getAllEvents()
      .then(response => {
        setEvents(response.data);
      })
      .catch(err => {
        console.log(err);
      });
  }, []);

  return (
    <div>
      <h1>Upcoming Events</h1>
     
      {events.map(event => {
        return (
          <div key={event._id}>
            <Link to={`/events/${event._id}`}>
              <h2>{event.title}</h2>
              <h3>Date: {new Date(event.date).toLocaleDateString()}</h3>
              <h3>Where: {event.city}</h3>
            </Link>
          </div>
        );
      })}
    </div>
  );
}

export default EventsList;
