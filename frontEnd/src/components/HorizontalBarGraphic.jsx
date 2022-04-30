import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  BarElement, // para graficos de barra
  Title,
  Tooltip,
  Legend,
  Filler, // sirve para calcular el area bajo la curva , sin este componente no anda
} from "chart.js";
import $ from "jquery";
import { useEffect, useMemo, useState } from "react";
import { Bar } from "react-chartjs-2"; // para graficos de barras
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  BarElement,
  Title,
  Tooltip,
  Legend,
  Filler
);
let labels = [];
for (let i = 1; i <= 31; i++) {
  labels.push(i);
}
export default function HorizontalBarGraphic({
  arrPositionTotalExpenses,
  arrPositionFixedExpenses,
  arrPositionFlexibleExpenses,
  arrPositionSavingExpenses,
}) {
  console.log("renderizo GraphicBarChart");
  useEffect(() => {
    const ctx = $("#horizontalBarGraphic");
    const horizontalBarGraphic = new ChartJS(ctx, {
      type: "bar",
      data: {
        labels: labels,
        datasets: [
          {
            label: "Gastos totales",
            data: arrPositionTotalExpenses,
            backgroundColor: [
              "rgba(255, 99, 132, 0.2)",
              "rgba(54, 162, 235, 0.2)",
              "rgba(255, 206, 86, 0.2)",
              "rgba(75, 192, 192, 0.2)",
              "rgba(153, 102, 255, 0.2)",
              "rgba(255, 159, 64, 0.2)",
            ],
            borderColor: [
              "rgba(255, 99, 132, 1)",
              "rgba(54, 162, 235, 1)",
              "rgba(255, 206, 86, 1)",
              "rgba(75, 192, 192, 1)",
              "rgba(153, 102, 255, 1)",
              "rgba(255, 159, 64, 1)",
            ],
            borderWidth: 1,
          },
          {
            label: "Gatos fijos",
            data: arrPositionFixedExpenses,
            backgroundColor: [
              "rgba(54, 162, 235, 0.2)",
              "rgba(255, 99, 132, 0.2)",
              "rgba(255, 206, 86, 0.2)",
              "rgba(75, 192, 192, 0.2)",
              "rgba(153, 102, 255, 0.2)",
              "rgba(255, 159, 64, 0.2)",
            ],
            borderColor: [
              "rgba(54, 162, 235, 1)",
              "rgba(255, 99, 132, 1)",
              "rgba(255, 206, 86, 1)",
              "rgba(75, 192, 192, 1)",
              "rgba(153, 102, 255, 1)",
              "rgba(255, 159, 64, 1)",
            ],
            borderWidth: 1,
            hidden: true,
          },
          {
            label: "Gastos flixibles",
            data: arrPositionFlexibleExpenses,
            backgroundColor: [
              "rgba(255, 206, 86, 0.2)",
              "rgba(54, 162, 235, 0.2)",
              "rgba(255, 99, 132, 0.2)",
              "rgba(75, 192, 192, 0.2)",
              "rgba(153, 102, 255, 0.2)",
              "rgba(255, 159, 64, 0.2)",
            ],
            borderColor: [
              "rgba(255, 206, 86, 1)",
              "rgba(255, 99, 132, 1)",
              "rgba(54, 162, 235, 1)",
              "rgba(75, 192, 192, 1)",
              "rgba(153, 102, 255, 1)",
              "rgba(255, 159, 64, 1)",
            ],
            borderWidth: 1,
            hidden: true,
          },
          {
            label: "Ahorros",
            data: arrPositionSavingExpenses,
            backgroundColor: [
              "rgba(75, 192, 192, 0.2)",
              "rgba(255, 99, 132, 0.2)",
              "rgba(54, 162, 235, 0.2)",
              "rgba(255, 206, 86, 0.2)",
              "rgba(153, 102, 255, 0.2)",
              "rgba(255, 159, 64, 0.2)",
            ],
            borderColor: [
              "rgba(75, 192, 192, 1)",
              "rgba(255, 99, 132, 1)",
              "rgba(54, 162, 235, 1)",
              "rgba(255, 206, 86, 1)",
              "rgba(153, 102, 255, 1)",
              "rgba(255, 159, 64, 1)",
            ],
            borderWidth: 1,
            hidden: true,
          },
        ],
      },
      options: {
        indexAxis: "y",
        scales: {
          x: {
            title: {
              display: true,
              text: "Pesos",
            },
            grid: {
              color: "rgb(255, 255, 255,0.1)",
            },
          },
          y: {
            title: {
              display: true,
              text: "Dias",
            },
            grid: {
              color: "rgb(255, 255, 255,0.1)",
            },
          },
        },
      },
    });
  }, []);

  return (
    <canvas
      id="horizontalBarGraphic"
      style={{
        position: "relative",
        height: "100vh",
        width: "80vw",
        backgroundColor: "#212529",
      }}
    ></canvas>
  );
}
