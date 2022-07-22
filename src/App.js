import Aos from "aos";
import { useEffect } from "react";

import './App.css'
import {Home} from './Pages/Home'
import { Map } from "./Pages/Map";

function App() {

 
  return (
    <div className="App">
      <Home/>
     <Map/>
    </div>
  );
}

export default App;
