import Plot from "react-plotly.js";

function CategoryPieChart({ categories, alertsByCategory }) {
  return (
    <>
      <div className="bg-gray-800 p-2 rounded-lg shadow-lg h-96 transition">
        <h2 className="text-xl font-semibold text-center">
          Alert Breakdown by Category
        </h2>
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
            width: "500",
            height: "350",
          }}
        />
      </div>
    </>
  );
}

export default CategoryPieChart;
