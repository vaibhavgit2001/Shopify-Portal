import React, { useEffect, useRef } from 'react';
import Chart from 'chart.js/auto';

function Booksold() {
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
        label: 'Books Sold',
        data: [100, 200, 150, 250, 180, 220, 300], // Sample data, replace this with your actual data
        fill: true,
        backgroundColor: 'rgba(76, 191, 192, 0.2)',
        borderColor: 'rgb(75, 192, 192)',
        tension: 0.4, // Adjust tension for wavy lines
        borderWidth: 2 // Increase border width for better visibility
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

export default Booksold;
