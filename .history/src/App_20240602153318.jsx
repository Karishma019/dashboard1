// src/App.jsx
import React from "react";
import Plot from "react-plotly.js";
import { MapContainer, TileLayer } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import HeatLayer from "./components/HeatLayer";

// Sample JSON data
const data = [
  {
    timestamp: "2019-01-02T03:50:09.097718",
    flow_id: 52373568,
    in_iface: "eth0",
    event_type: "alert",
    src_ip: "8.42.77.171",
    src_port: 65036,
    dest_ip: "138.68.3.71",
    dest_port: 3306,
    proto: "TCP",
    alert: {
      action: "allowed",
      gid: 1,
      signature_id: 2010937,
      rev: 3,
      signature: "ET SCAN Suspicious inbound to mySQL port 3306",
      category: "Potentially Bad Traffic",
      severity: 2,
    },
  },
  {
    timestamp: "2019-01-02T03:50:10.386108",
    flow_id: 52491840,
    in_iface: "eth0",
    event_type: "alert",
    src_ip: "8.42.77.171",
    src_port: 65386,
    dest_ip: "138.68.3.71",
    dest_port: 5915,
    proto: "TCP",
    alert: {
      action: "allowed",
      gid: 1,
      signature_id: 2002911,
      rev: 5,
      signature: "ET SCAN Potential VNC Scan 5900-5920",
      category: "Attempted Information Leak",
      severity: 2,
    },
  },
  {
    timestamp: "2019-01-02T03:50:10.421359",
    flow_id: 52507296,
    in_iface: "eth0",
    event_type: "alert",
    src_ip: "8.42.77.171",
    src_port: 65438,
    dest_ip: "138.68.3.71",
    dest_port: 5432,
    proto: "TCP",
    alert: {
      action: "allowed",
      gid: 1,
      signature_id: 2010939,
      rev: 3,
      signature: "ET SCAN Suspicious inbound to PostgreSQL port 5432",
      category: "Potentially Bad Traffic",
      severity: 2,
    },
  },
  {
    timestamp: "2019-01-02T03:50:10.576769",
    flow_id: 52568784,
    in_iface: "eth0",
    event_type: "alert",
    src_ip: "8.42.77.171",
    src_port: 49238,
    dest_ip: "138.68.3.71",
    dest_port: 1433,
    proto: "TCP",
    alert: {
      action: "allowed",
      gid: 1,
      signature_id: 2010935,
      rev: 3,
      signature: "ET SCAN Suspicious inbound to MSSQL port 1433",
      category: "Potentially Bad Traffic",
      severity: 2,
    },
  },
  {
    timestamp: "2019-01-02T03:50:10.585758",
    flow_id: 52576512,
    in_iface: "eth0",
    event_type: "alert",
    src_ip: "8.42.77.171",
    src_port: 49269,
    dest_ip: "138.68.3.71",
    dest_port: 1521,
    proto: "TCP",
    alert: {
      action: "allowed",
      gid: 1,
      signature_id: 2010936,
      rev: 3,
      signature: "ET SCAN Suspicious inbound to Oracle SQL port 1521",
      category: "Potentially Bad Traffic",
      severity: 2,
    },
  },
  {
    timestamp: "2019-01-02T03:50:10.621656",
    flow_id: 52589280,
    in_iface: "eth0",
    event_type: "alert",
    src_ip: "8.42.77.171",
    src_port: 49306,
    dest_ip: "138.68.3.71",
    dest_port: 5811,
    proto: "TCP",
    alert: {
      action: "allowed",
      gid: 1,
      signature_id: 2002910,
      rev: 5,
      signature: "ET SCAN Potential VNC Scan 5800-5820",
      category: "Attempted Information Leak",
      severity: 2,
    },
  },
];

const App = () => {
  const processedData = data.map((d) => ({
    ...d,
    timestamp: new Date(d.timestamp),
  }));

  const timeSeries = processedData.map((d) => d.timestamp);
  const categories = [...new Set(processedData.map((d) => d.alert.category))];
  const alertsByCategory = categories.map(
    (cat) => processedData.filter((d) => d.alert.category === cat).length
  );

  const severityCounts = processedData.reduce((acc, curr) => {
    acc[curr.alert.severity] = (acc[curr.alert.severity] || 0) + 1;
    return acc;
  }, {});

  const topPorts = processedData.map((d) => d.dest_port);
  const portCounts = topPorts.reduce((acc, port) => {
    acc[port] = (acc[port] || 0) + 1;
    return acc;
  }, {});

  const sortedPorts = Object.entries(portCounts)
    .sort((a, b) => b[1] - a[1])
    .slice(0, 5);

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
          <h2 className="text-xl font-semibold mb-4">Source IP Analysis</h2>
          <MapContainer center={[51.505, -0.09]} zoom={2} className="h-64">
            <TileLayer
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            />
            <HeatLayer
              points={data.map(({ lat, lng, intensity }) => [
                lat,
                lng,
                intensity,
              ])}
            />
          </MapContainer>
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
        <div className="bg-gray-800 p-4 rounded-lg shadow-lg">
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
