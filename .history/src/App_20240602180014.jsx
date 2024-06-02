// src/App.jsx
import Plot from "react-plotly.js";
import eveData from "./data/eve.json";
import { useState, useEffect } from "react";
import CategoryPieChart from "./components/CategoryPieChart";
import PortsBarChart from "./components/PortsBarChart";
import AlertGraph from "./components/AlertGraph";
import RealTimeTable from "./components/RealTimeTable";
import Navbar from "./components/Navbar";

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
    <div className="bg-gray-900 text-white grid grid-cols-[auto,1fr] h-screen">
      <Navbar />
      <div className="p-4 overflow-auto">
        <div className="flex justify-around">
          <CategoryPieChart
            categories={categories}
            alertsByCategory={alertsByCategory}
          />
          <PortsBarChart sortedPorts={sortedPorts} />
        </div>
        <AlertGraph timeSeries={timeSeries} />
        <RealTimeTable processedData={processedData} />
      </div>
    </div>
  );
};

export default App;
