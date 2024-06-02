import Plot from "react-plotly.js";

function CategoryPieChart({ categories, alertsByCategory, isDarkMode }) {
  return (
    <>
      <div
        className={`${
          isDarkMode ? "bg-gray-800" : "bg-gray-100"
        } p-2 rounded-lg shadow-lg h-96 overflow-hidden`}
      >
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

export default CategoryPieChart;
