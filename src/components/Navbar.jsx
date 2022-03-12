import { NavLink,  } from 'react-router-dom';
import { useContext } from 'react';
import { AuthContext } from '../context/auth.context';
import '../css/attend.css';

function Navbar() {
  // Subscribe to the AuthContext to gain access to
  // the values from AuthContext.Provider `value` prop
  const { isLoggedIn, logOutUser,  } = useContext(AuthContext);

  return (
    <nav className="navBar">
      <div>
        <NavLink className={({ isActive }) => (isActive ? 'active' : 'inactive')} to="/events" end>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
            />
          </svg>
          <button className="nav_text">Events </button>
        </NavLink>
      </div>

      <div>
        <NavLink className={({ isActive }) => (isActive ? 'active' : 'inactive')} to="/events/add">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
          <button className="nav_text">Add Event</button>
        </NavLink>
      </div>

      {isLoggedIn && (

        
        <div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"
            />
          </svg>
          <button  onClick={logOutUser}>
            Logout
          </button>
        </div>
      )}
    </nav>
  );
}

export default Navbar;

