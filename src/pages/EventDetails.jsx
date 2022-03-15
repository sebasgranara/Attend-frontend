import { useState, useEffect } from 'react';
import apiService from '../services/api.service';
import { useParams, useNavigate } from 'react-router-dom';
import business from '../pics/Business.jpeg';
import cultural from '../pics/Cultural.jpeg';
import festival from '../pics/Festival.jpeg';
import sports from '../pics/Sports.png';
import wellness from '../pics/Wellness.jpeg';

const categories = {
  Business: business,
  Cultural: cultural,
  Festival: festival,
  Sports: sports,
  Wellness: wellness,
};

const ticketPurchasedOptions = {
  Free: 'free',
  Yes: 'yes',
  No: 'no',
};

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
      <h1 className="title-centered">About this Event</h1>
      <div className="authform" key={event._id}>
        <h2 className="title"> {event.title} </h2>
        <img src={categories[event.category]} alt={event.category} />
        <div id="text">
          <p>Category: {event.category}</p>
          <p>Date: {new Date(event.date).toLocaleDateString()}</p>
          <p>City: {event.city}</p>
          <p>Ticket Price: {event.ticketPrice} €</p>
          <p>Priority: {event.priority}</p>
          <p>Ticket Purchased?{' '}
            <span className={ticketPurchasedOptions[event.ticketPurchased]}>{event.ticketPurchased}</span></p>
          <p>Event Hour: {new Date(event.date).toLocaleTimeString()}</p>
        </div>
        
        <button id="event-container" onClick={editEvent}>
          Edit event
        </button>
        <button onClick={deleteEvent}>Delete Event</button>
      </div>
    </div>
  );
}

export default EventDetails;
