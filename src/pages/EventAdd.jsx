import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import apiService from '../services/api.service'

function EventAdd() {
  const [title, setTitle] = useState('');
  const [category, setCategory] = useState('');
  const [date, setDate] = useState('');
  const [city, setCity] = useState('');
  const [ticketPrice, setTicketPrice] = useState('');
  const [priority, setPriority] = useState('');
  const [ticketPurchased, setTicketPurchased] = useState('');
  const [eventHour, setEventHour] = useState('');

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
      eventHour,
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
        <input type="text" value={category} name="category" onChange={e => setCategory(e.target.value)}></input>

        <h2>Date:</h2>
        <input
          type="number" //confirmar type
          value={date}
          name="date"
          onChange={e => setDate(e.target.value)}
        ></input>

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
        <input type="text" value={priority} name="priority" onChange={e => setPriority(e.target.value)}></input>

        <h2>Ticket Purchased:</h2>
        <input
          type="text"
          value={ticketPurchased}
          name="ticketPurchased"
          onChange={e => setTicketPurchased(e.target.value)}
        ></input>

        <h2>Event Hour:</h2>
        <input type="number" value={eventHour} name="eventHour" onChange={e => setEventHour(e.target.value)}></input>

        <button>New Event</button>
      </form>
    </div>
  );
}
export default EventAdd;