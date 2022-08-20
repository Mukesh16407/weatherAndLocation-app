
import { useState } from 'react';
import './App.css'

import { Weather } from './Components/Weather/Weather';



function App() {
  const [city, setCity] = useState("");
  
  return (
    <div className="App">
     <Weather city={city} setCity={setCity} />
    
     

    </div>
  );
}

export default App;
