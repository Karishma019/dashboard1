import Plot from "react-plotly.js";

function AlertGraph({ timeSeries, isDarkMode }) {
  return (
    <>
      <div
        className={`${
          isDarkMode ? "bg-gray-800" : "bg-gray-100"
        } p-4 rounded-lg shadow-lg container`}
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
            paper_bgcolor: "#1f2937",
            plot_bgcolor: "#1f2937",
            font: { color: "white" },
          }}
        />
      </div>
    </>
  );
}

export default AlertGraph;
