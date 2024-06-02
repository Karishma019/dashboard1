import Plot from "react-plotly.js";

function AlertGraph({ timeSeries, isDarkMode }) {
  return (
    <>
      <div
        className={`${
          isDarkMode ? "bg-gray-800" : "bg-gray-100"
        } p-4 rounded-lg shadow-lg container overflow-hidden overflow-x-auto lg:flex lg:flex-col items-center`}
      >
        <h2 className="text-xl font-semibold mb-4 text-center">
          Alert Timeline
        </h2>
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
            paper_bgcolor: isDarkMode ? "#1f2937" : "rgb(243 244 246)",
            plot_bgcolor: isDarkMode ? "#1f2937" : "rgb(243 244 246)",
            font: { color: isDarkMode ? "white" : "1f2937" },
          }}
        />
      </div>
    </>
  );
}

export default AlertGraph;
