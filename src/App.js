import React from 'react';

import Header from './components/Header/Header';
import Home from './components/menu/home/Home';
import About from './components/menu/about/About';
import Services from './components/menu/services/Services';
import Signup from './components/menu/Signup/Signup';
import Footer from './components/Footer/Footer';




import './App.css';

function App() {
  return (
    <div className="App">
     <Header />
     <Home />
     <About />
     <Services />
     <Signup />
     <Footer />
    </div>
  );
}

export default App;
