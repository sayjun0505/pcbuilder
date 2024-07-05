import React, { useEffect, useState } from "react";
import ReactApexChart from "react-apexcharts";

const ApexChart = (data) => {
  const [series] = useState([
    {
      name: "Price",
      data: data.data.map(item => item.price)
    }
  ]);

  const [options] = useState({
    chart: {
      width: "50%",
      height: 500,
      type: "bar"
    },
    plotOptions: {
      bar: {
        borderRadius: 10,
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
      categories:data.data.map(item => item.vendorname),
      position: "top",
      axisBorder: {
        show: true
      },
      axisTicks: {
        show: false
      },
      crosshairs: {
        fill: {
          type: "gradient",
          gradient: {
            colorFrom: "#D8E3F0",
            colorTo: "#BED1E6",
            stops: [0, 100],
            opacityFrom: 0.4,
            opacityTo: 0.5
          }
        }
      },
      tooltip: {
        enabled: false
      }
    },
    yaxis: {
      axisBorder: {
        show: true
      },
      axisTicks: {
        show: true
      },
      labels: {
        show: true,
        formatter: function (val) {
          return val + "€";
        }
      }
    },
    title: {
      text: "Price chart",
      floating: true,
      offsetY: 330,
      align: "center",
      style: {
        color: "#444"
      }
    },
    colors: ['#ff00ff', '#00ff00', '#0000ff'],
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
