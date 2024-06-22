import React, { useEffect, useRef } from 'react';
import Chart from 'chart.js/auto'; // Importing Chart from Chart.js

function Titlesold() {
  const chartRef = useRef(null);

  useEffect(() => {
    const currentDate = new Date();
    const labels = Array.from({ length: 7 }, (_, i) => {
      const date = new Date(currentDate);
      date.setDate(date.getDate() - i);
      return date.toLocaleDateString('en-US', { weekday: 'short' });
    }).reverse();

    const data = {
      labels: labels,
      datasets: [{
        label: 'Titles Sold',
        data: [25, 49, 60, 31, 76, 45, 60], // Sample data, replace this with your actual data
        fill: true, // Fill area under line
        backgroundColor: 'rgba(54, 162, 235, 0.2)', // Transparent blue color for area
        borderColor: 'rgba(54, 162, 235, 1)', // Blue color for line
        tension: 0.4 // Adjust tension for wavy lines
      }]
    };

    const options = {
      plugins: {
        legend: {
          display: false // Hide legend
        }
      },
      scales: {
        y: {
          beginAtZero: true // Start y-axis at zero
        }
      }
    };

    if (chartRef && chartRef.current) {
      const myChart = new Chart(chartRef.current, {
        type: 'line',
        data: data,
        options: options
      });

      return () => {
        myChart.destroy(); 
      };
    }
  }, []);

  return <canvas ref={chartRef} />;
}

export default Titlesold;
