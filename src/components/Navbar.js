import { Link } from 'react-router-dom';
// import { useContext } from 'react';
// import { AuthContext } from './../context/auth.context';

function Navbar() {
  // Subscribe to the AuthContext to gain access to
  // the values from AuthContext.Provider `value` prop
  // const { isLoggedIn, logOutUser } = useContext(AuthContext);

  return (
    <nav className="flex justify-between item-center h-16 bg-grey text-black  shadow-sm font-mono fixed bottom-0">
      <Link to="/events" className="pl-3">
        <button>Events Collection</button>
      </Link>

      <Link to="/events/add" className="pl-8">
        <button>Add Event</button>
      </Link>

      {/* {isLoggedIn && (
        <>
          <Link to="/protected">
            <button>Protected</button>
          </Link>

          <button onClick={logOutUser}>Logout</button>
          <span>{user && user.name}</span>
        </>
      )}

      {!isLoggedIn && (
        <>
          <Link to="/signup">
            {' '}
            <button>Sign Up</button>{' '}
          </Link>
          <Link to="/login">
            {' '}
            <button>Login</button>{' '}
          </Link>
        </>
      )} */}
    </nav>
  );
}

export default Navbar;
