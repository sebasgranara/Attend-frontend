import { useState, useEffect } from 'react';
import apiService from '../services/api.service';
import { useParams, Link } from 'react-router-dom';

function EventDetails(){
  const { eventId } = useParams();
  const [event, setEvent] = useState([])

 useEffect(() => {
   apiService
     .getEventById(eventId)
     .then(response => {
       setEvent(response.data);
     })
     .catch(err => {
       console.log(err);
     });
 }, []);

 return (
   <div>
     <h1>About this Event</h1>
     <div key={event._id}>
       <h2>{event.title}</h2>
       <p>Category: {event.category}</p>
       <p>Date: {event.date}</p>
       <p>City: {event.city}</p>
       <p>Ticket Price: {event.ticketPrice}</p>
       <p>Priority: {event.priority}</p>
       <p>Ticket Purchased: {event.ticektPurchased}</p>
       <p>Event Hour: {event.eventHour}</p>
       <Link to={`/events/${event._id}/edit`}>Edit event</Link>
     </div>
   </div>
 );
}

export default EventDetails