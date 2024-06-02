// src/App.jsx
import { useState, useEffect } from "react";
import { Line, Pie, Bar } from "react-chartjs-2";
import eveData from "./data/eve.json";

const App = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    setData(eveData);
  }, []);

  const processedData = data.map((d) => ({
    ...d,
    timestamp: new Date(d.timestamp),
  }));

  const timeSeries = processedData.map((d) => d.timestamp);
  const categories = [...new Set(processedData.map((d) => d.alert?.category))];
  const alertsByCategory = categories.map(
    (cat) => processedData.filter((d) => d.alert?.category === cat).length
  );

  const topPorts = processedData.map((d) => d.dest_port);
  const portCounts = topPorts.reduce((acc, port) => {
    acc[port] = (acc[port] || 0) + 1;
    return acc;
  }, {});

  const sortedPorts = Object.entries(portCounts)
    .sort((a, b) => b[1] - a[1])
    .slice(0, 5);

  // const categoryPieData = {
  //   labels: categories,
  //   datasets: [
  //     {
  //       data: alertsByCategory,
  //       backgroundColor: ["#ff6384", "#36a2eb"],
  //     },
  //   ],
  // };

  const topPortsBarData = {
    labels: sortedPorts.map((port) => port[0]),
    datasets: [
      {
        label: "Port Counts",
        data: sortedPorts.map((port) => port[1]),
        backgroundColor: "rgba(75, 192, 192, 0.6)",
        borderColor: "rgba(75, 192, 192, 1)",
        borderWidth: 1,
      },
    ],
  };

  const barOptions = {
    scales: {
      x: {
        type: "category", // Define x-axis as category scale
      },
      y: {
        beginAtZero: true,
      },
    },
  };

  const alertTimelineData = {
    labels: timeSeries.map((timestamp) => timestamp.toISOString()),
    datasets: [
      {
        label: "Alerts Over Time",
        data: timeSeries.map((timestamp, index) => index + 1),
        fill: false,
        backgroundColor: "rgba(255, 206, 86, 0.6)",
        borderColor: "rgba(255, 206, 86, 1)",
        borderWidth: 1,
      },
    ],
  };

  return (
    <div className="bg-gray-900 text-white min-h-screen p-4">
      <h1 className="text-3xl font-bold mb-6">
        Security Dashboard: Dark Edition
      </h1>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* <div className="bg-gray-800 p-4 rounded-lg shadow-lg">
          <h2 className="text-xl font-semibold mb-4">
            Alert Breakdown by Category
          </h2>
          <Pie data={categoryPieData} />
        </div> */}
        <div className="bg-gray-800 p-4 rounded-lg shadow-lg">
          <h2 className="text-xl font-semibold mb-4">
            Top Destination Ports Scanned
          </h2>
          <Bar data={topPortsBarData} options={barOptions} />
        </div>
        {/* <div className="bg-gray-800 p-4 rounded-lg shadow-lg">
          <h2 className="text-xl font-semibold mb-4">Alert Timeline</h2>
          <Line data={alertTimelineData} />
        </div> */}
        <div className="bg-gray-800 p-4 rounded-lg shadow-lg col-span-1 lg:col-span-2">
          <h2 className="text-xl font-semibold mb-4">Real-time Updates</h2>
          <table className="table-auto w-full text-left">
            <thead>
              <tr>
                <th className="px-4 py-2">Timestamp</th>
                <th className="px-4 py-2">Source IP</th>
                <th className="px-4 py-2">Destination IP</th>
                <th className="px-4 py-2">Port</th>
                <th className="px-4 py-2">Description</th>
              </tr>
            </thead>
            <tbody>
              {processedData.map((alert, index) => (
                <tr key={index} className="bg-gray-700">
                  <td className="border px-4 py-2">
                    {alert.timestamp.toISOString()}
                  </td>
                  <td className="border px-4 py-2">{alert.src_ip}</td>
                  <td className="border px-4 py-2">{alert.dest_ip}</td>
                  <td className="border px-4 py-2">{alert.dest_port}</td>
                  <td className="border px-4 py-2">{alert.alert.signature}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default App;
