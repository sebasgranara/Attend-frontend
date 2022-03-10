import { useEffect, useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import apiService from '../services/api.service';
import { AuthContext } from './../context/auth.context';

function EventsList() {
  const [events, setEvents] = useState([]);
  const { user } = useContext(AuthContext);
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

  //si ticketPurchased: No => pintarlo de rojo
  return (
    <div>
      <h1>Welcome {user && user.name}</h1>
      
      <h2>Upcoming Events</h2>

      {events.map(event => {
        return (
          <div key={event._id}>
            <Link to={`/events/${event._id}`}>
              <h2>{event.title}</h2>
              <h3>Date: {new Date(event.date).toLocaleDateString()}</h3>
              <h3>Where: {event.city}</h3>
              <h3>Ticket Purchased? {event.ticketPurchased}</h3>
            </Link>
          </div>
        );
      })}
    </div>
  );
}

export default EventsList;
