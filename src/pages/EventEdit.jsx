import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import apiService from '../services/api.service';

function EventEdit() {
  const { eventId } = useParams();
  const navigate = useNavigate();
  const [event, setEvent] = useState({
    title: '',
    category: '',
    date: '',
    city: '',
    ticketPrice: '',
    priority: '',
    ticketPurchased: '',
    eventHour: '',
  });
  
 useEffect(() => {
   apiService
     .editEvent(eventId)
     .then(response => {
       setEvent(response.data);
     })
     .catch(err => {
       console.log(err);
     });
 }, [eventId]);

  const handleChange = e => {
    setEvent(prev => {
      return {
        ...prev,
        [e.target.name]: e.target.value,
      };
    });
  };

 const handleSubmit = e => {
    e.preventDefault();

    apiService
      .editEvent(eventId, {
        title: event.title,
        category: event.category,
        date: event.date,
        city: event.city,
        ticketPrice: event.ticketPrice,
        priority: event.priority,
        ticketPurchased: event.ticketPurchased,
        eventHour: event.eventHour,
      })
      .then(response => {
        console.log(response);
        navigate(`/events/${event._id}`); 
      })
      .catch(error => console.log(error));
  };

return (
  <div>
    <h2> Edit this event</h2>
    <form className="authform" onSubmit={handleSubmit}>
      <h3>Title:</h3>
      <input type="text" value={event.title} name="title" onChange={handleChange}></input>

      <h3>Category:</h3>
      <select name="category" value={event.category} onChange={handleChange}>
        <option value="Festival">Festival</option>
        <option value="Business">Business</option>
        <option value="Sports">Sports</option>
        <option value="Wellness">Wellness</option>
        <option value="Cultural">Cultural</option>
        <option value="Personal">Personal</option>
        <option value="Other">Other</option>
      </select>

      <h3>Date:</h3>
      <input type="datetime-local" value={event.date} name="date" onChange={handleChange}></input>

      <h3>City:</h3>
      <input type="text" value={event.city} name="city" onChange={handleChange}></input>

      <h3>Ticket Price:</h3>
      <input type="number" value={event.ticketPrice} name="ticketPrice" onChange={handleChange}></input>

      <h3>Priority:</h3>
      <select name="priority" value={event.priority} onChange={handleChange}>
        <option value="High">Top Priority</option>
        <option value="Medium">Must Go</option>
        <option value="Low">Maybe</option>
      </select>

      <h3>Ticket Purchased:</h3>
      <select name="ticketPurchased" value={event.ticketPurchased} onChange={handleChange}>
        <option value="Yes">Yes</option>
        <option value="No">No</option>
        <option value="Free">Free</option>
      </select>

      <button type="submit">Save Changes</button>

    </form>
  </div>
);
}

export default EventEdit