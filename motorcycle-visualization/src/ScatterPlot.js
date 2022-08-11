import {React, useEffect, useState} from 'react';
import {
  Chart as ChartJS,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip,
  Legend,
} from 'chart.js';
import { Scatter } from 'react-chartjs-2';
import { csv } from 'd3';
import datacsv from './OpenRefineMotorcycleDataV2.csv'


const ScatterPlot = () => {
  const [loading, setLoading] = useState(false);
  const [myData, setMyData] = useState([]);


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

  let testMake = "Harley-Davidson";
  const motorcycles = myData.filter((motorcycle) => motorcycle.Make === testMake);
  console.log(motorcycles);

  let xValues = motorcycles.map( motorcycle => motorcycle.Mileage); //change with Mileage
  let yValues = motorcycles.map( motorcycle => motorcycle.Price);
  const xyValues = xValues.map((x,i) => ({x, y: yValues[i]}));

  const yMax = yValues.reduce((a, b) => Math.max(a, b), -Infinity);
  const xMax = xValues.reduce((a, b) => Math.max(a, b), -Infinity);

  const xMin = xValues.reduce((a, b) => Math.min(a, b), Infinity);
  console.log(xMin);


  ChartJS.register(LinearScale, PointElement, LineElement, Tooltip, Legend);

  const options = {
    scales: {
      y: {
        beginAtZero: true,
        max: yMax,
      },
      x: {
        beginAtZero: true,
        max: xMax,
        min: xMin,
      }
    },
  };

  const data = {
    datasets: [
      {
        label: testMake,
        data: xyValues,
        backgroundColor: 'rgba(255, 99, 132, 1)',
      },
    ],
  };

  return (<Scatter options={options} data={data} />)};


export default ScatterPlot;