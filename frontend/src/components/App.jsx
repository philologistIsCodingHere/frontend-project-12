import {
  BrowserRouter,
  Routes,
  Route,
  Navigate,
  useLocation,
} from 'react-router-dom';
import { Provider } from 'react-redux';
import { Navbar, Button } from 'react-bootstrap';
import { useAuth } from '../hooks/index.jsx';
import Login from './Login.jsx';
import MainPage from './MainPage.jsx';
import AuthProvider from '../contexts/AuthProvider.jsx';
import store from '../slices/index.js';

const PrivateRoute = ({ children }) => {
  const auth = useAuth();
  const location = useLocation();
  return (
    auth.user ? children : <Navigate to="/login" state={{ from: location }} />
  );
};

const AuthButton = () => {
  const auth = useAuth();

  return (
    auth.user
      ? <Button onClick={auth.logOut}>Log out</Button>
      : null
  );
};

const App = () => (
  <Provider store={store}>
    <AuthProvider>
      <BrowserRouter>
        <div className="d-flex flex-column h-100">
          <Navbar className="shadow-sm" bg="white" expand="lg">
            <div className="container">
              <a href="/" className="navbar-brand">Chat</a>
              <AuthButton />
            </div>
          </Navbar>
          <Routes>
            <Route
              path="/"
              element={(
                <PrivateRoute>
                  <MainPage />
                </PrivateRoute>
              )}
            />
            <Route path="login" element={<Login />} />
          </Routes>
        </div>
      </BrowserRouter>
    </AuthProvider>
  </Provider>
);

export default App;
