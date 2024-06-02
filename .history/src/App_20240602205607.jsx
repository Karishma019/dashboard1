// src/App.jsx
import Plot from "react-plotly.js";
import eveData from "./data/eve.json";
import { useState, useEffect } from "react";
import CategoryPieChart from "./components/CategoryPieChart";
import PortsBarChart from "./components/PortsBarChart";
import AlertGraph from "./components/AlertGraph";
import RealTimeTable from "./components/RealTimeTable";
import Navbar from "./components/Navbar";
import Header from "./components/Header";

const App = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const handleMode = () => {
    setIsDarkMode(!isDarkMode);
  };

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
    <div
      className={`${
        isDarkMode ? "bg-gray-900 text-white" : "bg-gray-200 text-gray-900"
      } grid grid-cols-[1fr,auto]`}
    >
      <div
        className={`${
          isDarkMode
            ? "bg-gray-900 text-white border-r-gray-700"
            : "bg-gray-100 text-gray-900 border-r-gray-300"
        } z-50 shadow-lg border-r  relative hidden`}
      >
        <Navbar isDarkMode={isDarkMode} />
      </div>
      <div className="flex flex-col gap-10">
        <Header isDarkMode={isDarkMode} handleMode={handleMode} />
        <div className="flex gap-10 justify-between container">
          <CategoryPieChart
            categories={categories}
            alertsByCategory={alertsByCategory}
            isDarkMode={isDarkMode}
          />
          <PortsBarChart sortedPorts={sortedPorts} isDarkMode={isDarkMode} />
        </div>
        <AlertGraph timeSeries={timeSeries} isDarkMode={isDarkMode} />
        <RealTimeTable processedData={processedData} isDarkMode={isDarkMode} />
      </div>
    </div>
  );
};

export default App;
