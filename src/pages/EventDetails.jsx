import { useState, useEffect } from 'react';
import apiService from '../services/api.service';
import { useParams, useNavigate } from 'react-router-dom';

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

    const editEvent = () => {
      apiService
        .getEventById(eventId)
        .then(() => {
          navigate(`/events/${event._id}/edit`);
        })
        .catch(err => console.log(err));
    };

  return (
    <div>
      <h1>About this Event</h1>
      <div className="authform" key={event._id}>
        <h2>{event.title}</h2>
        <p>Category: {event.category}</p>
        <p>Date: {new Date(event.date).toLocaleDateString()}</p>
        <p>City: {event.city}</p>
        <p>Ticket Price: {event.ticketPrice} €</p>
        <p>Priority: {event.priority}</p>
        <p>Ticket Purchased: {event.ticketPurchased}</p>
        <p>Event Hour: {new Date(event.date).toLocaleTimeString()}</p>
        <button className="authform" onClick={editEvent}>
          Edit event
        </button>
        <button onClick={deleteEvent}>Delete Event</button>
      </div>
    </div>
  );
}
// Navbar para el "back to events collection"


export default EventDetails;
