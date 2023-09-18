import React, { useState, useMemo, useCallback } from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  Navigate,
  useLocation,
} from 'react-router-dom';
import { Button, Navbar } from 'react-bootstrap';

import Homepage from './Homepage.jsx';
import Login from './Login.jsx';
import Notfoundpage from './Notfoundpage.jsx';
import AuthContext from '../contexts/index.jsx';
import useAuth from '../hooks/index.jsx';

const AuthProvider = ({ children }) => {
  const [loggedIn, setLoggedIn] = useState(false);

  const logIn = useCallback(() => setLoggedIn(true));
  const logOut = useCallback(() => {
    localStorage.removeItem('userId');
    setLoggedIn(false);
  });

  const memorizedValue = useMemo(() => ({
    logIn,
    logOut,
    loggedIn,
  }), [logIn, logOut, loggedIn]);

  return (
    <AuthContext.Provider value={memorizedValue}>
      {children}
    </AuthContext.Provider>
  );
};

const PrivateRoute = ({ children }) => {
  const auth = useAuth();
  const location = useLocation();
  return (
    auth.loggedIn ? children : <Navigate to="/login" state={{ from: location }} />
  );
};

const AuthButton = () => {
  const auth = useAuth();

  return (
    auth.loggedIn
      ? <Button onClick={auth.logOut}>Log out</Button>
      : ''
  );
};

const App = () => (
  <AuthProvider>
    <Router>
      <Navbar className="d-flex justify-content-between px-3 mb-3" bg="light" expand="lg">
        <Navbar.Brand as={Link} to="/">Chat</Navbar.Brand>
        <AuthButton />
      </Navbar>

      <div className="d-flex flex-column h-100">
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="*" element={<Notfoundpage />} />
          <Route
            path="/"
            element={(
              <PrivateRoute>
                <Homepage />
              </PrivateRoute>
            )}
          />
        </Routes>
      </div>

    </Router>
  </AuthProvider>
);

export default App;
