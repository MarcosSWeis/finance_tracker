import {
  Chart as ChartJS,
  ArcElement,
  LineElement,
  BarElement,
  PointElement,
  BarController,
  BubbleController,
  DoughnutController,
  LineController,
  PieController,
  PolarAreaController,
  RadarController,
  ScatterController,
  CategoryScale,
  LinearScale,
  LogarithmicScale,
  RadialLinearScale,
  TimeScale,
  TimeSeriesScale,
  Decimation,
  Filler,
  Legend,
  Title,
  Tooltip,
  SubTitle,
} from "chart.js";
import $ from "jquery";
import { useEffect, useMemo, useState } from "react";
ChartJS.register(
  ArcElement,
  LineElement,
  BarElement,
  PointElement,
  BarController,
  BubbleController,
  DoughnutController,
  LineController,
  PieController,
  PolarAreaController,
  RadarController,
  ScatterController,
  CategoryScale,
  LinearScale,
  LogarithmicScale,
  RadialLinearScale,
  TimeScale,
  TimeSeriesScale,
  Decimation,
  Filler,
  Legend,
  Title,
  Tooltip,
  SubTitle
);
let labels = [];
for (let i = 1; i <= 31; i++) {
  labels.push(i);
}
export default function GraphicLineExpenses({
  arrPositionTotalExpenses,
  arrPositionFixedExpenses,
  arrPositionFlexibleExpenses,
  arrPositionSavingExpenses,
}) {
  console.log("renderizo GraphicBarChart");
  const [] = useState([]);
  useEffect(() => {
    const ctx = $("#graphicLinealExpenses");
    const horizontalBarGraphic = new ChartJS(ctx, {
      type: "line",
      data: {
        labels: labels,
        datasets: [
          {
            label: "Gastos totales",
            data: arrPositionTotalExpenses,
            backgroundColor: ["rgba(255, 99, 132, 0.2)"],
            borderColor: [
              "rgba(255, 99, 132, 1)",
              "rgba(54, 162, 235, 1)",
              "rgba(255, 206, 86, 1)",
              "rgba(75, 192, 192, 1)",
              "rgba(153, 102, 255, 1)",
              "rgba(255, 159, 64, 1)",
            ],
            borderWidth: 3,
            pointBorderWidth: 2,
            pointRadius: 7,
            pointBackgroundColor: "rgba(0,0,0,0.0)",
          },
          {
            label: "Gatos fijos",
            data: arrPositionFixedExpenses,
            backgroundColor: ["rgba(54, 162, 235, 0.2)"],
            borderColor: [
              "rgba(255, 99, 132, 1)",
              "rgba(54, 162, 235, 1)",
              "rgba(255, 206, 86, 1)",
              "rgba(75, 192, 192, 1)",
              "rgba(153, 102, 255, 1)",
              "rgba(255, 159, 64, 1)",
            ],
            borderWidth: 3,
            pointBorderWidth: 2,
            pointRadius: 7,
            pointBackgroundColor: "rgba(0,0,0,0.0)",
            hidden: true,
          },
          {
            label: "Gastos flixibles",
            data: arrPositionFlexibleExpenses,
            backgroundColor: ["rgba(255, 206, 86, 0.2)"],
            borderColor: [
              "rgba(255, 99, 132, 1)",
              "rgba(54, 162, 235, 1)",
              "rgba(255, 206, 86, 1)",
              "rgba(75, 192, 192, 1)",
              "rgba(153, 102, 255, 1)",
              "rgba(255, 159, 64, 1)",
            ],
            borderWidth: 3,
            pointBorderWidth: 2,
            pointRadius: 7,
            pointBackgroundColor: "rgba(0,0,0,0.0)",
            hidden: true,
          },
          {
            label: "Ahorros",
            data: arrPositionSavingExpenses,
            backgroundColor: ["rgba(75, 192, 192, 0.2)"],
            borderColor: [
              "rgba(255, 99, 132, 1)",
              "rgba(54, 162, 235, 1)",
              "rgba(255, 206, 86, 1)",
              "rgba(75, 192, 192, 1)",
              "rgba(153, 102, 255, 1)",
              "rgba(255, 159, 64, 1)",
            ],
            borderWidth: 3,
            pointBorderWidth: 2,
            pointRadius: 7,
            pointBackgroundColor: "rgba(0,0,0,0.0)",
            hidden: true,
          },
        ],
      },
      options: {
        spanGaps: true,
        scales: {
          x: {
            title: {
              display: true,
              text: "Dias",
            },
            grid: {
              color: "rgb(171, 171, 171,0.1)",
            },
          },

          y: {
            title: {
              display: true,
              text: "Pesos",
            },
            grid: {
              color: "rgb(171, 171, 171,0.1)",
            },
          },
        },
      },
    });
  }, []);

  return (
    <canvas
      className="p-2"
      id="graphicLinealExpenses"
      style={{
        position: "relative",
        height: "100vh",
        width: "80vw",
        backgroundColor: "#212529",
      }}
    ></canvas>
  );
}
