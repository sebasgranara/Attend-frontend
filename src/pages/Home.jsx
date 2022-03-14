//import { AuthContext } from '../context/auth.context';
import { useNavigate } from 'react-router-dom';
function Home() {
  //const { isLoggedIn } = useContext(AuthContext);
  const navigate = useNavigate();
  //if (isLoggedIn) {
  navigate('/events');
  //}
  return (
    <div>
      <h1>Home</h1>
    </div>
  );
}

export default Home;
