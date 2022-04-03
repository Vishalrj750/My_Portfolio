import './App.css';
import { Navbar } from './Components/Navbar';
import { Routes, Route } from "react-router-dom";
import { Home } from './Components/Home';
import { About } from './Components/About';
import { Resume } from './Components/Resume';
import { Contacts } from './Components/Contacts';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path='/' element={ <Home /> } />
        <Route path='/about' element={ <About /> } />
        <Route path='/resume' element={ <Resume /> } />
        <Route path='/contact' element={ <Contacts /> } />
      </Routes>

    </div>
  );
}

export default App;
