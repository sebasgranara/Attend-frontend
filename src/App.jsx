import { Route, Routes } from 'react-router-dom';
import IsAnon from './components/IsAnon';
import IsPrivate from './components/IsPrivate';
import Navbar from './components/Navbar';
import { AuthProviderWrapper } from './context/auth.context';
import Home from './pages/Home';
import LoginPage from './pages/LoginPage';
import Protected from './pages/Protected';
import SignupPage from './pages/SignupPage';
import EventsList from './pages/EventsList';
import EventAdd from './pages/EventAdd';
import EventDetails from './pages/EventDetails';

function App() {
  return (
    <AuthProviderWrapper>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/protected"
          element={
            <IsPrivate>
              <Protected />
            </IsPrivate>
          }
        />
        <Route
          path="/login"
          element={
            <IsAnon>
              <LoginPage />
            </IsAnon>
          }
        />
        <Route
          path="/signup"
          element={
            <IsAnon>
              <SignupPage />
            </IsAnon>
          }
        />
        <Route path="/events" element={<EventsList />} />
        <Route path="/events/add" element={<EventAdd />} />
        <Route path="/events/:id" element={<EventDetails />} />
        {/* <Route path="/events/:id/edit" element={<EventEdit />} /> */}

        <Route path="*" element={<div>404 Not Found</div>} />
      </Routes>
    </AuthProviderWrapper>
  );
}

export default App;
