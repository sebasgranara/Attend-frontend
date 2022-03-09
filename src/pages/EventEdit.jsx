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

  // const deleteProject = () => {
  //   axios
  //     .delete(`${API_URL}/api/projects/${projectId}`)
  //     .then(() => {
       
  //       props.history.push('/projects');
  //     })
  //     .catch(err => console.log(err));
  // };  

//ver tema de dropdown: category, ticketPrice y tmb date
return (
  <div>
    <h2> Edit this event</h2>
    <form onSubmit={handleSubmit}>
      <h2>Title:</h2>
      <input type="text" value={event.title} name="title" onChange={handleChange}></input>

      <h2>Category:</h2>
      <input type="text" value={event.category} name="category" onChange={handleChange}></input>

      <h2>Date:</h2>
      <input
        type="number" //confirmar type
        value={event.date}
        name="date"
        onChange={handleChange}
      ></input>

      <h2>City:</h2>
      <input type="text" value={event.city} name="city" onChange={handleChange}></input>

      <h2>Ticket Price:</h2>
      <input type="number" value={event.ticketPrice} name="ticketPrice" onChange={handleChange}></input>

      <h2>Priority:</h2>
      <input type="text" value={event.priority} name="priority" onChange={handleChange}></input>

      <h2>Ticket Purchased:</h2>
      <input type="text" value={event.ticketPurchased} name="ticketPurchased" onChange={handleChange}></input>

      <h2>Event Hour:</h2>
      <input type="number" value={event.eventHour} name="eventHour" onChange={handleChange}></input>

      <button type="submit">Edit Event</button>
      <Link to="/events"> Back to events list</Link>
    </form>
  </div>
);
}

export default EventEdit