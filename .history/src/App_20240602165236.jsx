// src/App.jsx
import React from "react";
import Plot from "react-plotly.js";
import eveData from "./data/eve.json";
import { useState, useEffect } from "react";

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
        <div className="bg-gray-800 p-4 rounded-lg shadow-lg">
          <h2 className="text-xl font-semibold mb-4">
            Alert Breakdown by Category
          </h2>
          <Plot
            data={[
              {
                labels: categories,
                values: alertsByCategory,
                type: "pie",
                marker: {
                  colors: [
                    "#ff6384",
                    "#36a2eb",
                    "#cc65fe",
                    "#ffce56",
                    "#4bc0c0",
                  ],
                },
              },
            ]}
            layout={{
              paper_bgcolor: "#1f2937",
              plot_bgcolor: "#1f2937",
              font: { color: "white" },
            }}
          />
        </div>

        <div className="bg-gray-800 p-4 rounded-lg shadow-lg">
          <h2 className="text-xl font-semibold mb-4">
            Top Destination Ports Scanned
          </h2>
          <Plot
            data={[
              {
                x: sortedPorts.map((port) => port[0]),
                y: sortedPorts.map((port) => port[1]),
                type: "bar",
                marker: { color: "rgba(75, 192, 192, 0.6)" },
              },
            ]}
            layout={{
              paper_bgcolor: "#1f2937",
              plot_bgcolor: "#1f2937",
              font: { color: "white" },
            }}
          />
        </div>
        <div className="bg-gray-400 p-4 rounded-lg shadow-lg">
          <h2 className="text-xl font-semibold mb-4">Alert Timeline</h2>
          <Plot
            data={[
              {
                x: timeSeries,
                type: "scatter",
                mode: "lines+markers",
                marker: { color: "rgba(255, 206, 86, 0.6)" },
              },
            ]}
            layout={{
              paper_bgcolor: "#1f2937",
              plot_bgcolor: "#1f2937",
              font: { color: "white" },
            }}
          />
        </div>
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
