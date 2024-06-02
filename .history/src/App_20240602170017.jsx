// src/App.jsx
import Plot from "react-plotly.js";
import eveData from "./data/eve.json";
import { useState, useEffect } from "react";
import CategoryPieChart from "./components/CategoryPieChart";
import PortsBarChart from "./components/PortsBarChart";
import AlertGraph from "./components/AlertGraph";

const App = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    // Simulate fetching data from a JSON file
    setData(eveData);
  }, []);

  const processedData = data.map((d) => ({
    ...d,
    timestamp: new Date(d.timestamp),
  }));

  const timeSeries = processedData.map((d) => d.timestamp);
  const categories = [...new Set(processedData.map((d) => d?.alert?.category))];
  const alertsByCategory = categories.map(
    (cat) => processedData.filter((d) => d?.alert?.category === cat).length
  );

  const topPorts = processedData.map((d) => d.dest_port);
  const portCounts = topPorts.reduce((acc, port) => {
    acc[port] = (acc[port] || 0) + 1;
    return acc;
  }, {});

  const sortedPorts = Object.entries(portCounts)
    .sort((a, b) => b[1] - a[1])
    .slice(0, 3);

  return (
    <div className="bg-gray-900 text-white min-h-screen p-4">
      <h1 className="text-3xl font-bold mb-6">
        Security Dashboard: Dark Edition
      </h1>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <CategoryPieChart
          categories={categories}
          alertsByCategory={alertsByCategory}
        />
        <PortsBarChart sortedPorts={sortedPorts} />
        <AlertGraph timeSeries={timeSeries} />
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
              {processedData.map((alert, index) => {
                if (index <= 20) {
                  return (
                    <tr key={index} className="bg-gray-700">
                      <td className="border px-4 py-2">
                        {alert.timestamp.toLocaleString("en-US", {
                          year: "numeric",
                          month: "short",
                          day: "numeric",
                          hour: "2-digit",
                          minute: "2-digit",
                          second: "2-digit",
                          timeZoneName: "short",
                        })}
                      </td>
                      <td className="border px-4 py-2">{alert.src_ip}</td>
                      <td className="border px-4 py-2">{alert.dest_ip}</td>
                      <td className="border px-4 py-2">{alert.dest_port}</td>
                      <td className="border px-4 py-2">
                        {alert.alert?.signature}
                      </td>
                    </tr>
                  );
                }
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default App;
