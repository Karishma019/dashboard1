// src/App.jsx
import Plot from "react-plotly.js";
import eveData from "./data/eve.json";
import { useState, useEffect } from "react";
import CategoryPieChart from "./components/CategoryPieChart";
import PortsBarChart from "./components/PortsBarChart";
import AlertGraph from "./components/AlertGraph";
import RealTimeTable from "./components/RealTimeTable";

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
        <RealTimeTable processedData={processedData} />
      </div>
    </div>
  );
};

export default App;
