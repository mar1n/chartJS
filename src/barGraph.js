import React, { useRef } from 'react';
import { Bar } from 'react-chartjs-2';
import { data, labels } from './radnomData';
import "./barGraph.css";

const BarGraph = () => {
    const barRef = useRef();
    const dataChart = (canvas) => {
        const ctx = canvas.getContext("2d");
        const gradient = ctx.createLinearGradient(0, 0, 0, 500);
        gradient.addColorStop(0, "rgba(250,174,50,1)");
        gradient.addColorStop(1, "rgba(250,174,50,0)");
    
        return {
          labels: labels,
          datasets: [
            {
              backgroundColor: gradient, // Put the gradient here as a fill color
              borderColor: "#ff6c23",
              borderWidth: 2,
              pointColor: "#fff",
              pointStrokeColor: "#ff6c23",
              pointHighlightFill: "#fff",
              pointHighlightStroke: "#ff6c23",
              data: data,
            },
          ],
        };
      };
    return <><div className="nationality_chart">
    <Bar
      ref={barRef}
      id="bar-chart"
      data={dataChart}
      options={{
        scales: {
          yAxes: [
            {
              ticks: {
                min: 0,
              },
            },
          ],
        },
        responsive: true,
        title: {
          display: true,
          text: "Nationality",
          fontSize: 25,
        },
        legend: {
          display: false,
        },
        maintainAspectRatio: false,
      }}
    />
  </div></>
}

export default BarGraph;