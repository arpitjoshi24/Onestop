import { Routes, Route } from 'react-router-dom';
import './App.css';

import Home from './Home';
import Navigation from './Navigation';
import Footer from './Footer';
import Pakage from './Pakage';
import Service from './Service';
import Tc from './Tc';
import Book from './Book';

function App() {
  return (
    <>
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/service" element={<Service />} />
        <Route path="/package" element={<Pakage />} />
        <Route path="/tc" element={<Tc />} />
        {/* <Route path="/book" element={ <Book/>} /> */}

      </Routes>
      <Footer />
    </>
  );
}

export default App;
