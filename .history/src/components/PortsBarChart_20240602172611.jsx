import Plot from "react-plotly.js";

function PortsBarChart({ sortedPorts }) {
  return (
    <>
      <div className="bg-gray-800 p-4 rounded-lg shadow-lg">
        <h2 className="text-xl font-semibold mb-4">
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
            paper_bgcolor: "#1f2937",
            plot_bgcolor: "#1f2937",
            font: { color: "white" },
            width: "400",
          }}
        />
      </div>
    </>
  );
}

export default PortsBarChart;
