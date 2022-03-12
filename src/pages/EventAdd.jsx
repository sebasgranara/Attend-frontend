import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import apiService from '../services/api.service';

function EventAdd() {
  const [title, setTitle] = useState('');
  const [category, setCategory] = useState('Festival');
  const [date, setDate] = useState('');
  const [city, setCity] = useState('');
  const [ticketPrice, setTicketPrice] = useState('');
  const [priority, setPriority] = useState('High');
  const [ticketPurchased, setTicketPurchased] = useState('No');

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

  return (
    <div>
      <h2> Add your new event</h2>
      <form onSubmit={handleSubmit}>
        <h3>Title:</h3>
        <input type="text" value={title} name="title" onChange={e => setTitle(e.target.value)}></input>

        <h3>Category:</h3>
        <select name="category" value={category} onChange={e => setCategory(e.target.value)}>
          <option value="Festival">Festival</option>
          <option value="Business">Business</option>
          <option value="Sports">Sports</option>
          <option value="Wellness">Wellness</option>
          <option value="Cultural">Cultural</option>
          <option value="Personal">Personal</option>
          <option value="Other">Other</option>
        </select>

        <h3>Date:</h3>
        <input type="datetime-local" value={date} name="date" onChange={e => setDate(e.target.value)}></input>

        <h3>City:</h3>
        <input type="text" value={city} name="city" onChange={e => setCity(e.target.value)}></input>

        <h3>Ticket Price:</h3>
        <input
          type="number"
          value={ticketPrice}
          name="ticketPrice"
          onChange={e => setTicketPrice(e.target.value)}
        ></input>

        <h3>Priority:</h3>
        <select name="priority" value={priority} onChange={e => setPriority(e.target.value)}>
          <option value="High">High</option>
          <option value="Medium">Medium</option>
          <option value="Low">Low</option>
        </select>

        <h3>Ticket Purchased:</h3>
        <select name="ticketPurchased" value={ticketPurchased} onChange={e => setTicketPurchased(e.target.value)}>
          <option value="No">No</option>
          <option value="Yes">Yes</option>
          <option value="Free">Free</option>
        </select>

        <button>New Event</button>
      </form>
    </div>
  );
}
export default EventAdd;
