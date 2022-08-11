import { React, useState, useEffect } from 'react'
import { Bar } from 'react-chartjs-2';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';
// import datacsv from './OpenRefineMotorcycleData.csv'
import { } from './App'


const BarChart = (myData) => {
    
    ChartJS.register(
        CategoryScale,
        LinearScale,
        BarElement,
        Title,
        Tooltip,
        Legend
    );

    const options = {
        indexAxis: 'y',
        scales: {
            y: {
                max: 32,
            },
        },
        elements: {
            bar: {
                borderWidth: 2,
            },
        },
        responsive: true,
        plugins: {
            legend: {
                position: 'top',
                display: false,
            },
            title: {
                display: true,
                text: '# of Motorcycles Per Make',
            },
        },
    };

    // let uniqueColorArr = [
    //     ... new Map(myData.myData.map((item) => [item["Make"], item])).values(),
    // ];
    const allMakes = myData.myData.map((motorcycle) => motorcycle.Make);

    const freqMap = allMakes.reduce(
        (map, make) => map.set(make, (map.get(make) || 0) + 1),
        new Map
    );


    const data = {
        labels: Array.from(freqMap.keys()),//freqMap.map((motorcycle) => motorcycle.Make),
        datasets: [
            {
                label: "Number Of Makes",
                data: Array.from(freqMap.values()),
                backgroundColor: [
                    "#f1356d",
                ],
            },
        ],
    };
    console.log(data.labels);


    return (
        <div className="bar-chart">
            <br />
            <Bar
                height={300}
                width={800}
                options={options}
                data={data}
            />
        </div>);
}

export default BarChart;