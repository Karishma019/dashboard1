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

  const [isNavOpen, setIsNavOpen] = useState(true);

  const handleNavBar = () => {
    setIsNavOpen(!isNavOpen);
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
      }flex overflow-x-hidden`}
    >
      <div className="flex flex-col gap-10">
        <Header
          isDarkMode={isDarkMode}
          handleMode={handleMode}
          handleNavBar={handleNavBar}
        />
        <div className="flex justify-center gap-10 container">
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
