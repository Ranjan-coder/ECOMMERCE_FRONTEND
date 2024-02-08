import React, { useState, useEffect } from 'react';
import './App.css';
import FooterCmp from './Compo/Route/FooterCmp';
import RouteCompo from './Compo/Route/RouteCompo';
import '@fortawesome/fontawesome-free/css/all.css';
import GradientBufferBar from './Compo/Route/BufferGradient';
import Topnavbar from './Compo/Route/Topnavbar';
import HamburgerMenuCmp from './Compo/Route/HamBurgerMenu';
import UserDetails from './Compo/Route/Username';



function App() {

  // this functionality only for buffergradient 
  // __________________________________________
  const [isLoading, setIsLoading] = useState(true);

  // Simulate loading for demonstration purposes
  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsLoading(false);
    }, 3000); // Simulating a 3-second loading period

    return () => clearTimeout(timeout);
  }, []);
  // __________________________________________


  return (
    <div className="App">
      <GradientBufferBar isLoading={isLoading} />
      <HamburgerMenuCmp/>

      <Topnavbar/>
      <RouteCompo />
      <FooterCmp />
      <UserDetails/>

    </div>
  );
}

export default App;
