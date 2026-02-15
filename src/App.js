import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import MyBookings from './pages/MyBookings';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/my-bookings' element={<MyBookings/>}/>
      </Routes>
    </div>
  );
}

export default App;
