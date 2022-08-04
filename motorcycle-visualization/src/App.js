import { useEffect, useState } from 'react';
import './App.css';
import Navbar from './NavBar';
import { csv } from 'd3';
import datacsv from './OpenRefineMotorcycleDataV2.csv'
import BarChart from './BarChart';
import Home from './Home';

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
    return (
      <div className="App">
        <Navbar />
        <div className="content">
          <Home />
          {/* <BarChart myData={myData}/> */}
        </div>
      </div>
    );
}

export default App;

// setMyData({
//   labels: data.map((motorcycle) => motorcycle.Make),
//   datasets: [
//     {
//       label: "Number Of Makes",
//       data: data.map((motorcycle) => crypto.priceUsd),
//       backgroundColor: [
//         "#ffbb11",
//         "#ecf0f1",
//         "#50AF95",
//         "#f3ba2f",
//         "#2a71d0"
//       ]
//     }
//   ]
// });
// });
