import { useState, useEffect } from 'react';
import apiService from '../services/api.service';
import { useParams, Link, useNavigate } from 'react-router-dom';

function EventDetails() {
  const { eventId } = useParams();
  const [event, setEvent] = useState({});
  const navigate = useNavigate();

  useEffect(() => {
    apiService
      .getEventById(eventId)
      .then(response => {
        setEvent(response.data);
      })
      .catch(err => {
        console.log(err);
      });
  }, [eventId]);

  const deleteEvent = () => {
    apiService
      .deleteEvent(eventId)
      .then(() => {
        navigate('/events');
      })
      .catch(err => console.log(err));
  };


  return (
    <div>
      <h1>About this Event</h1>
      <div key={event._id}>
        <h2>{event.title}</h2>
        <p>Category: {event.category}</p>
        <p>Date: {new Date(event.date).toLocaleDateString()}</p>
        <p>City: {event.city}</p>
        <p>Ticket Price: {event.ticketPrice} €</p>
        <p>Priority: {event.priority}</p>
        <p>Ticket Purchased: {event.ticketPurchased}</p>
        <p>Event Hour: {new Date(event.date).toLocaleTimeString()}</p>
        <Link to={`/events/${event._id}/edit`}>Edit event</Link>
        <button onClick={deleteEvent}>Delete Event</button>

        <Link to="/events"> Back to events list</Link>
      </div>
    </div>
  );
}
// Navbar para el "back to events collection"


export default EventDetails;
