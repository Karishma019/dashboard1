import Plot from "react-plotly.js";

function AlertGraph({ timeSeries }) {
  return (
    <>
      <div className="bg-gray-800 p-4 rounded-lg shadow-lg flex justify-center">
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
            width: "900",
            height: "500",
          }}
        />
      </div>
    </>
  );
}

export default AlertGraph;
