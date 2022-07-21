import { useEffect } from 'react';
import './App.css';
import Navbar from './NavBar';
import { csv } from 'd3';
import datacsv from './OpenRefineMotorcycleData.csv'

const App = () => {
  useEffect(() => {
    csv(datacsv).then(data=>{
      console.log(data);
    })
}, []);

return (
  <div className="App">
    <Navbar />
    <div className="content"> Things </div>
  </div>
);
}

export default App;
