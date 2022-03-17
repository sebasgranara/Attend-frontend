import { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../context/auth.context';
// import main from '../pics/Main.jpeg'
 
function SignupPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [errorMessage, setErrorMessage] = useState(undefined);
  const { signup } = useContext(AuthContext);

  const navigate = useNavigate();

  const handleEmail = e => setEmail(e.target.value);
  const handlePassword = e => setPassword(e.target.value);
  const handleName = e => setName(e.target.value);

  const handleSignupSubmit = e => {
    e.preventDefault();
    // Create an object representing the request body
    const requestBody = { email, password, name };

    // Make an axios request to the API
    // If POST request is successful redirect to login page
    // If the request resolves with an error, set the error message in the state``
    signup(requestBody)
      .then(() => {
        navigate('/login');
      })
      .catch(error => {
        const errorDescription = error.response.data.message;
        setErrorMessage(errorDescription);
      });
  };

  return (
    <div>
      <h1 className="title-centered colored">ATTEND</h1>
      {/* <div>
        <img src={main} alt="mainpic"> </img>
      </div> */}

      <h3> Create your events wishlist and keep track of them</h3>
      <h3 className="title-centered "> Sign up to join us</h3>
      <div>
        <ul className="line"></ul>
      </div>

      <form className="authform" onSubmit={handleSignupSubmit}>
        <label>Name:</label>
        <input type="text" name="name" value={name} onChange={handleName} placeholder="enter your name" />

        <label>Email:</label>
        <input type="email" name="email" value={email} onChange={handleEmail} placeholder="example@attend.com" />

        <label>Password:</label>
        <input type="password" name="password" value={password} onChange={handlePassword} placeholder="******" />

        <button type="submit">Create account</button>
      </form>
      {errorMessage && <p className="error-message">{errorMessage}</p>}
      <div className="title-centered">
        <p>Already have account?</p>
        <Link to={'/login'}> Click here to Login</Link>
      </div>
      
    </div>
  );
}

export default SignupPage;
