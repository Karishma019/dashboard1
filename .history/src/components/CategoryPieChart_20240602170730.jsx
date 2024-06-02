import Plot from "react-plotly.js";

function CategoryPieChart({ categories, alertsByCategory }) {
  return (
    <>
      <div className="bg-gray-800 p-4 rounded-lg shadow-lg">
        <h2 className="text-xl font-semibold mb-4">
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
            paper_bgcolor: "#fff",
            plot_bgcolor: "#fff",
            font: { color: "white" },
          }}
        />
      </div>
    </>
  );
}

export default CategoryPieChart;