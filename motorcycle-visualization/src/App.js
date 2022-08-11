import { useEffect, useState } from 'react';
import './App.css';
import Navbar from './NavBar';
import { csv } from 'd3';
import datacsv from './OpenRefineMotorcycleDataV2.csv'
import BarChart from './BarChart';
import ScatterPlot from './ScatterPlot';
import Home from './Home';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


const App = () => {
  const [myData, setMyData] = useState([]);
  const [loading, setLoading] = useState(false);


  useEffect(() => {
    setLoading(true);
    csv(datacsv)
      .then(function (data) {
        setMyData(data);
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        setLoading(false);
      })
  }, []);


  if (loading) {
    return <p>Data is loading...</p>;
  }
  console.log(myData);


  return (
    <Router>
      <Navbar />
      <Routes >
        <Route exact path='/' exact element={<Home myData={myData}/>} />
        <Route exact path='/BarChart' exact element={<BarChart myData={myData} />} />
        <Route exact path='/ScatterPlot' exact element={<ScatterPlot />} />
          <Route path=":make" element = {<ScatterPlot />} />
      </Routes>
    </Router>
  );
}

export default App;