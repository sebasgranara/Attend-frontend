import { useEffect, useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import apiService from '../services/api.service';
import { AuthContext } from './../context/auth.context';
import SearchBar from '../components/SearchBar';
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

function EventsList() {
  const [events, setEvents] = useState([]);
  const [category, setCategory] = useState('all');
  const { user } = useContext(AuthContext);
  const [query, setQuery] = useState('');

  // Display all events
  useEffect(() => {
    apiService
      .getAllEvents()
      .then(response => {
        setEvents(response.data);
      })
      .catch(err => {
        console.log(err);
      });
  }, []);
  
  // Search Bar
  const handleInput = search => {
    setQuery(search);
  };

  const categorizedEvents = events.filter(event => (category === 'all' ? event : event.category === category));

  const filteredEvents = categorizedEvents.filter(event => event.title.toLowerCase().includes(query.toLowerCase()));

  return (
    <div id="event-container">
      <h1 className="title-centered">Welcome {user && user.name}!</h1>

      <h2 id="event-container">
        These are your <b>{events.length}</b> upcoming Events:
      </h2>

      <SearchBar className="event-container" handleInput={handleInput} />

      <nav className="event-container">
        <button className={category === 'all' ? 'active' : null} onClick={() => setCategory('all')}>
          All
        </button>
        <button className={category === 'Festival' ? 'active' : null} onClick={() => setCategory('Festival')}>
          Festival
        </button>
        <button className={category === 'Business' ? 'active' : null} onClick={() => setCategory('Business')}>
          Business
        </button>
        <button className={category === 'Sports' ? 'active' : null} onClick={() => setCategory('Sports')}>
          Sports
        </button>
        <button className={category === 'Wellness' ? 'active' : null} onClick={() => setCategory('Wellness')}>
          Wellness
        </button>
        <button className={category === 'Cultural' ? 'active' : null} onClick={() => setCategory('Cultural')}>
          Cultural
        </button>
        <button className={category === 'Personal' ? 'active' : null} onClick={() => setCategory('Personal')}>
          Personal
        </button>
        <button className={category === 'Other' ? 'active' : null} onClick={() => setCategory('Other')}>
          Other
        </button>
      </nav>
      
      {filteredEvents.map(event => {
        return (
          <div id="event-container" key={event._id}>
            <Link to={`/events/${event._id}`}>
              <h2 className="title">{event.title}</h2>
              <img src={categories[event.category]} alt={event.category} />
              <p>Date: {new Date(event.date).toLocaleDateString()}</p>
              <p>Where: {event.city}</p>
              <p>
                Ticket Purchased?{' '}
                <span className={ticketPurchasedOptions[event.ticketPurchased]}>{event.ticketPurchased}</span>
              </p>
            </Link>
          </div>
        );
      })}
    </div>
  );
}

export default EventsList;
