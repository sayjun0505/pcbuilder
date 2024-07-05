import React, { useEffect, useState } from "react";
import ReactApexChart from "react-apexcharts";

const ApexChart = (data) => {
  const [series] = useState([
    {
      name: "Price",
      data: data.data.map(item => item.price),
      
    }
  ]);

  const [options] = useState({
    
    // Other options...
    plotOptions: {
      bar: {
        columnWidth: "50%",
        dataLabels: {
          position: "top" // top, center, bottom
        }
      }
    },
    dataLabels: {
      enabled: true,
      formatter: function (val) {
        return val + "€";
      },
      offsetY: -20,
      style: {
        fontSize: "12px",
        colors: ["#304758"]
      }
    },
    xaxis: {
      categories: data.data.map(item => item.vendorname),
      labels: {
        style: {
          colors: ['#ff00ff', '#adad00', '#0000ff'] // Set different label colors
        }
      },
    },
    yaxis: {
      labels: {
        style: {
          colors: ['#ff00ff', '#00ff00', '#0000ff'] // Set different label colors
        }
      }
    },
    
  });
  return (
    <div>
      <div id="chart">
        <ReactApexChart
          options={options}
          series={series}
          type="bar"
          height={350}
        />
      </div>
      <div id="html-dist"></div>
    </div>
  );
};

export default ApexChart;

// Render the component in your application
// ReactDOM.render(<ApexChart />, document.getElementById('app'));
