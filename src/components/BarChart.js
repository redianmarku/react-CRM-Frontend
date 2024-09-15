import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import React from "react";
import { Bar } from "react-chartjs-2";
import "../styles/BarChart.css";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export default function BarChart({ labels, values }) {
  if (!labels.length || !values.length) return null;

  const chartData = {
    labels: labels,
    datasets: [
      {
        label: "Sales",
        data: values,
        backgroundColor: "#007bff",
      },
    ],
  };

  return (
    <div className="barchart-container">
      <Bar data={chartData} />
    </div>
  );
}
