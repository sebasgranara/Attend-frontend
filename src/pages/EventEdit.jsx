import { useEffect, useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
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
       console.log(err); //confirmar error
     });
 }, []);

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
        navigate('/events'); //que vaya al event details {`/events/${event._id}`}
      })
      .catch(error => console.log(error));
  };


    

//ver tema de dropdown: category, ticketPrice y tmb date
return (
  <div>
    <h2> Edit this event</h2>
    <form onSubmit={handleSubmit}>
      <h2>Title:</h2>
      <input type="text" value={event.title} name="title" onChange={handleChange}></input>

      <h2>Category:</h2>
      <select name="category" value={event.category} onChange={handleChange}>
        <option value="Festival">Festival</option>
        <option value="Business">Business</option>
        <option value="Sports">Sports</option>
        <option value="Wellness">Wellness</option>
        <option value="Cultural">Cultural</option>
        <option value="Personal">Personal</option>
        <option value="Other">Other</option>
      </select>

      <h2>Date:</h2>
      <input type="datetime-local" value={event.date} name="date" onChange={handleChange}></input>

      <h2>City:</h2>
      <input type="text" value={event.city} name="city" onChange={handleChange}></input>

      <h2>Ticket Price:</h2>
      <input type="number" value={event.ticketPrice} name="ticketPrice" onChange={handleChange}></input>

      <h2>Priority:</h2>
      <select name="priority" value={event.priority} onChange={handleChange}>
        <option value="Top Priority">Top Priority</option>
        <option value="Must Go">Must Go</option>
        <option value="Maybe">Maybe</option>
        <option value="If Nothing Better To Do">If Nothing Better To Do</option>
      </select>

      <h2>Ticket Purchased:</h2>
      <select name="ticketPurchased" value={event.ticketPurchased} onChange={handleChange}>
        <option value="Yes">Yes</option>
        <option value="No">No</option>
        <option value="Free">Free</option>
      </select>

      <h2>Event Hour:</h2>
      <input type="number" value={event.eventHour} name="eventHour" onChange={handleChange}></input>

      <button type="submit">Edit Event</button>

      <Link to="/events"> Back to events list</Link>
    </form>
  </div>
);
}

export default EventEdit