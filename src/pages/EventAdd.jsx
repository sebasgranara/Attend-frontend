import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import apiService from '../services/api.service';

function EventAdd() {
  const [title, setTitle] = useState('');
  const [category, setCategory] = useState('Festival');
  const [date, setDate] = useState('');
  const [city, setCity] = useState('');
  const [ticketPrice, setTicketPrice] = useState('');
  const [priority, setPriority] = useState('');
  const [ticketPurchased, setTicketPurchased] = useState('');
  /*  const [eventHour, setEventHour] = useState(''); */

  const navigate = useNavigate();

  const handleSubmit = e => {
    e.preventDefault();
    const data = {
      title,
      category,
      date,
      city,
      ticketPrice,
      priority,
      ticketPurchased,
    };
    apiService
      .addEvent(data)
      .then(response => {
        console.log(response);
        navigate('/events');
      })
      .catch(e => console.log(e));
  };

  //ver tema de dropdown: category, ticketPrice y tmb date

  return (
    <div>
      <h2> Add your new event</h2>
      <form onSubmit={handleSubmit}>
        <h2>Title:</h2>
        <input type="text" value={title} name="title" onChange={e => setTitle(e.target.value)}></input>

        <h2>Category:</h2>
        <select name="category" value={category} onChange={e => setCategory(e.target.value)}>
          <option value="Festival">Festival</option>
          <option value="Business">Business</option>
          <option value="Sports">Sports</option>
          <option value="Wellness">Wellness</option>
          <option value="Cultural">Cultural</option>
          <option value="Personal">Personal</option>
          <option value="Other">Other</option>
        </select>

        <h2>Date:</h2>
        <input type="datetime-local" value={date} name="date" onChange={e => setDate(e.target.value)}></input>

        <h2>City:</h2>
        <input type="text" value={city} name="city" onChange={e => setCity(e.target.value)}></input>

        <h2>Ticket Price:</h2>
        <input
          type="number"
          value={ticketPrice}
          name="ticketPrice"
          onChange={e => setTicketPrice(e.target.value)}
        ></input>

        <h2>Priority:</h2>
        <select name="priority" value={priority} onChange={e => setPriority(e.target.value)}>
          <option value="Top Priority">Top Priority</option>
          <option value="Must Go">Must Go</option>
          <option value="Maybe">Maybe</option>
          <option value="If Nothing Better To Do">If Nothing Better To Do</option>
        </select>

        <h2>Ticket Purchased:</h2>
        <select name="ticketPurchased" value={ticketPurchased} onChange={e => setTicketPurchased(e.target.value)}>
          <option value="Yes">Yes</option>
          <option value="No">No</option>
          <option value="Free">Free</option>
        </select>

        {/*  <h2>Event Hour:</h2>
        <input type="time" value={eventHour} name="eventHour" onChange={e => setEventHour(e.target.value)}></input>

        */}
        <button>New Event</button>
      </form>
    </div>
  );
}
export default EventAdd;
