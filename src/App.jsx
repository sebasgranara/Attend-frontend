import { Route, Routes } from 'react-router-dom';
import IsAnon from './components/IsAnon';
import IsPrivate from './components/IsPrivate';
import Navbar from './components/Navbar';
import { AuthProviderWrapper } from './context/auth.context';
import Home from './pages/Home';
import LoginPage from './pages/LoginPage';
import SignupPage from './pages/SignupPage';
import EventsList from './pages/EventsList';
import EventAdd from './pages/EventAdd';
import EventDetails from './pages/EventDetails';
import EventEdit from './pages/EventEdit';

function App() {
  return (
    <AuthProviderWrapper>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
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
        <Route
          path="/events"
          element={
            <IsPrivate>
              <EventsList />
            </IsPrivate>
          }
        />
        <Route
          path="/events/add"
          element={
            <IsPrivate>
              <EventAdd />
            </IsPrivate>
          }
        />
        <Route path="/events/:eventId" element={<IsPrivate><EventDetails /></IsPrivate>} />
        <Route path="/events/:eventId/edit" element={<EventEdit />} />

        <Route path="*" element={<div>404 Not Found</div>} />
      </Routes>
    </AuthProviderWrapper>
  );
}

export default App;
