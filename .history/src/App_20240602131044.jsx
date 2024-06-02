// src/App.js
import React from "react";
import Plot from "react-plotly.js";

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

  return (
    <div className="bg-gray-900 text-white min-h-screen p-4">
      <h1 className="text-2xl font-bold mb-4">Security Dashboard</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <div className="bg-gray-800 p-4 rounded">
          <Plot
            data={[
              {
                x: timeSeries,
                type: "histogram",
                marker: { color: "rgba(255, 99, 71, 0.6)" },
              },
            ]}
            layout={{
              title: "Alerts Over Time",
              paper_bgcolor: "#1f2937",
              plot_bgcolor: "#1f2937",
              font: { color: "white" },
            }}
          />
        </div>
        <div className="bg-gray-800 p-4 rounded">
          <Plot
            data={[
              {
                x: categories,
                y: alertsByCategory,
                type: "bar",
                marker: { color: "rgba(54, 162, 235, 0.6)" },
              },
            ]}
            layout={{
              title: "Alerts by Category",
              paper_bgcolor: "#1f2937",
              plot_bgcolor: "#1f2937",
              font: { color: "white" },
            }}
          />
        </div>
        <div className="bg-gray-800 p-4 rounded">
          <Plot
            data={[
              {
                labels: Object.keys(severityCounts),
                values: Object.values(severityCounts),
                type: "pie",
                marker: { colors: ["#ff6384", "#36a2eb", "#cc65fe"] },
              },
            ]}
            layout={{
              title: "Alerts by Severity",
              paper_bgcolor: "#1f2937",
              plot_bgcolor: "#1f2937",
              font: { color: "white" },
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default App;
