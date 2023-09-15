import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Homepage from './Homepage.jsx';
import Login from './Login.jsx';
import Notfoundpage from './Notfoundpage.jsx';

const App = () => (
  <BrowserRouter>
    <div className="d-flex flex-column h-100">
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/login" element={<Login />} />
        <Route path="*" element={<Notfoundpage />} />
      </Routes>
    </div>
  </BrowserRouter>
);

export default App;
