import Plot from "react-plotly.js";

function PortsBarChart({ sortedPorts, isDarkMode }) {
  return (
    <>
      <div
        className={`${
          isDarkMode ? "bg-gray-800 " : "bg-gray-100 "
        }p-2 rounded-lg shadow-lg h-96 overflow-hidden`}
      >
        <h2 className="text-xl font-semibold text-center">
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
            paper_bgcolor: isDarkMode ? "#1f2937" : "rgb(243 244 246)",
            plot_bgcolor: isDarkMode ? "#1f2937" : "rgb(243 244 246)",
            font: { color: isDarkMode ? "white" : "1f2937" },
            width: "500",
            height: "350",
          }}
        />
      </div>
    </>
  );
}

export default PortsBarChart;
