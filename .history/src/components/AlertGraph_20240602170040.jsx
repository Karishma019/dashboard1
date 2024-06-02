import Plot from "react-plotly.js";

function AlertGraph() {
  return (
    <>
      <div className=" p-4 rounded-lg shadow-lg">
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
    </>
  );
}

export default AlertGraph;
