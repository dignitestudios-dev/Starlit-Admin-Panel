import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";

// Register ChartJS components
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);
const GraphCard = () => {
  const months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];

  // Define the categories and their colors
  const categories = {
    lowest: {
      label: "Lowest",
      backgroundColor: "#d32f2f", // Red color
      data: [0, 120, 0, 0, 0, 0, 0, 0, 80, 0, 0, 0],
    },
    average: {
      label: "Average",
      backgroundColor: "#5b8cd5", // Blue color
      data: [180, 0, 250, 320, 180, 0, 0, 310, 0, 220, 0, 0],
    },
    highest: {
      label: "Highest",
      backgroundColor: "#1e3a5f", // Dark blue color
      data: [0, 0, 0, 0, 0, 550, 380, 0, 0, 0, 420, 370],
    },
  };

  // Create datasets for Chart.js
  const datasets = Object.values(categories).map((category) => ({
    label: category.label,
    backgroundColor: category.backgroundColor,
    data: category.data,
    barPercentage: 0.7,
    categoryPercentage: 0.8,
  }));

  // Chart data
  const data = {
    labels: months,
    datasets: datasets,
  };

  // Chart options
  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: "top",
        align: "start",
        labels: {
          boxWidth: 15,
          usePointStyle: false,
          padding: 20,
        },
      },
      title: {
        display: true,
        text: "Trends of New Users",
        align: "start",
        font: {
          size: 16,
          weight: "bold",
          color: "#000000",
        },
        padding: {
          bottom: 10,
        },
      },
      tooltip: {
        callbacks: {
          title: function (context) {
            return context[0].label;
          },
        },
      },
    },
    scales: {
      x: {
        grid: {
          display: false,
        },
      },
      y: {
        beginAtZero: true,
        max: 600,
        ticks: {
          stepSize: 100,
        },
        grid: {
          color: "#f0f5fa",
        },
      },
    },
    layout: {
      padding: {
        left: 10,
        right: 10,
        top: 0,
        bottom: 10,
      },
    },
  };

  // Add horizontal lines plugin
  const horizontalLines = {
    id: "horizontalLines",
    beforeDraw: (chart) => {
      const { ctx, chartArea, scales } = chart;
      const yAxis = scales.y;
      const lineValues = [125, 325, 500];
      const lineColors = ["#d32f2f", "#5b8cd5", "#1e3a5f"];

      ctx.save();
      ctx.setLineDash([5, 5]);
      ctx.lineWidth = 1;

      lineValues.forEach((value, index) => {
        const yPosition = yAxis.getPixelForValue(value);

        if (yPosition >= chartArea.top && yPosition <= chartArea.bottom) {
          ctx.strokeStyle = lineColors[index];
          ctx.beginPath();
          ctx.moveTo(chartArea.left, yPosition);
          ctx.lineTo(chartArea.right, yPosition);
          ctx.stroke();
        }
      });

      ctx.restore();
    },
  };

  // Register the plugin
  ChartJS.register(horizontalLines);

  return (
    <div
      style={{
        width: "100%",
        height: "500px",
        padding: "8px",
        paddingTop: "28px",
        backgroundColor: "white",
        borderRadius: "10px",
        boxShadow: "0 4px 12px rgba(0, 0, 0, 0.05)",
        marginTop: "16px",
      }}
    >
      <Bar data={data} options={options} />
    </div>
  );
};

export default GraphCard;
