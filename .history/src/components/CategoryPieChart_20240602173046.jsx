import Plot from "react-plotly.js";

function CategoryPieChart({ categories, alertsByCategory }) {
  return (
    <>
      <div className="bg-gray-800 p-1  rounded-lg shadow-lg h-96">
        <h2 className="text-xl font-semibold">Alert Breakdown by Category</h2>
        <Plot
          data={[
            {
              labels: categories,
              values: alertsByCategory,
              type: "pie",
              marker: {
                colors: ["#ff6384", "#36a2eb", "#cc65fe", "#ffce56", "#4bc0c0"],
              },
            },
          ]}
          layout={{
            paper_bgcolor: "#1f2937",
            plot_bgcolor: "#1f2937",
            font: { color: "white" },
            transition: { duration: 500, easing: "easeInOutQuad" }, // Animation properties
            width: "550",
            height: "500",
          }}
          config={{ displayModeBar: false }} // Hide Plotly's mode bar
        />
      </div>
    </>
  );
}

export default CategoryPieChart;
