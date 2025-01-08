import React from "react";
import { Chart, plugins, scales } from "chart.js/auto";
import { Bar } from "react-chartjs-2";


const Statistics = () => {
  const revenueData = {
    labels: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sat"],
    datasets: [
      {
        label: "Sales",
        data: [6, 16, 12, 15, 11, 20, 19],
        backgroundColor:"rgba(141,110,235,0.8)"
      },
      {
        label: "Profit",
        data: [4,14,18,15,18,18,17],
        backgroundColor:"rgba(34,197,94,0.4)"
      },
    ],
  };
  const revenueChartOptions = {
    scales:{
      x:{
        grid:{
          color:"rgba(229,231,235,0.4)"
        },
        y:{
          beginAtZero:true,
          grid:{
            display:false,
          }
        }
      }
    },
    plugins:{
      legend:{
        display:false
      }
    },
    barThickness:15,
    borderWidth:2,
    borderColor:"transparent",
    borderRadius:10,
  };
  return (
    <>
      <div className="md:border border-green-300 md:p-4 rounded-lg mt-20 sm:mt-6">
        <div className="grid sm:grid-cols-3 gap-2">
          <div className="p-4 rounded-lg transition-all bg-gray-300/10 hover:bg-gray-300/5 shadow-lg">
            <h4 className="text-gray-300 text-left">Total Customers</h4>
            <div className="mt-2 lg:flex items-center justify-between gap-4">
              <h1 className="font-bold text-lg">67,984</h1>
              <p className="text-red-500 text-sm">+4.50%</p>
            </div>
          </div>
          <div className="p-4 rounded-lg transition-all bg-purple-300/10 hover:bg-purple-300/5 shadow-lg">
            <h4 className="text-gray-300 text-left">Total Revenue</h4>
            <div className="mt-2 lg:flex items-center justify-between gap-4">
              <h1 className="font-bold text-lg">$389,930</h1>
              <p className="text-green-500 text-sm">+9.150%</p>
            </div>
          </div>
          <div className="p-4 rounded-lg transition-all bg-green-300/10 hover:bg-green-300/5 shadow-lg">
            <h4 className="text-gray-300 text-left">Total Income</h4>
            <div className="mt-2 lg:flex items-center justify-between gap-4">
              <h1 className="font-bold text-lg">$1.500m</h1>
              <p className="text-green-500 text-sm">+12.0%</p>
            </div>
          </div>
        </div>

        <div className="mt-8">
          <div className="flex items-center justify-between">
            <h3 className="text-lg font-semibold">Revenue Analytics</h3>
            <div className="flex items-center gap-4">
              <button className="bg-transparent border border-green-500 px-2 rounded-full text-xs text-gray-300 hover:text-green-300 transition">
                Week
              </button>
              <button className="bg-transparent border border-green-500 px-2 rounded-full text-xs text-gray-300 hover:text-green-300 transition">
                Month
              </button>
              <button className="bg-transparent border border-green-500 px-2 rounded-full text-xs text-gray-300 hover:text-green-300 transition">
                Year
              </button>
            </div>
          </div>
        </div>
        <div className="my-4">
          <p className="text-left text-gray-300">Income</p>
          <div className="flex items-center gap-4">
            <h1 className="font-bold text-lg">$6823</h1>
            <p className="text-green-500 text-sm">+3.0%</p>
          </div>
          <p className="text-xs text-gray-300">Total income this week</p>
        </div>
        <div className="mt-8"></div>
        <Bar data={revenueData} options={revenueChartOptions} />
      </div>
    </>
  );
};

export default Statistics;
