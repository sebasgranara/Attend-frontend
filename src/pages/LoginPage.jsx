import { useState, useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../context/auth.context';

function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState(undefined);

  const navigate = useNavigate();

  const { login } = useContext(AuthContext);

  const handleEmail = e => setEmail(e.target.value);
  const handlePassword = e => setPassword(e.target.value);

  const handleLoginSubmit = e => {
    e.preventDefault();
    const requestBody = { email, password };

    login(requestBody)
      .then(() => {
        navigate('/events');
      })
      .catch(error => {
        const errorDescription = error.response.data.message;
        setErrorMessage(errorDescription);
      });
  };

  return (
    <div className="LoginPage">
      <h1 className="title">Attend</h1>

      <h3>Login to access your EVENTS </h3>

      <div>
        <ul className="line"></ul>
        {/* <li id="to-center">
          <a href="/signup"> Join Us</a> <span> | </span>
          <a href="/login"> Log In </a> <span> </span>
        </li> */}
      </div>

      <form className="authform" onSubmit={handleLoginSubmit}>
        <label>Email:</label>
        <input type="email" name="email" value={email} onChange={handleEmail} />

        <label>Password:</label>
        <input type="password" name="password" value={password} onChange={handlePassword} />

        <button type="submit">Login</button>
      </form>
      {errorMessage && <p className="error-message">{errorMessage}</p>}
      <div className='title-centered'>  
        <p>Dont have an account yet?</p>
        <Link to={'/signup'}> Click here to Sign Up</Link>
      </div>
    
    </div>
  );
}

export default LoginPage;
