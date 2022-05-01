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
import { useMemo } from "react";
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
const scores = [5, 10, 50, 500, 3, 9, 15, 85, 66]; //x
const scores2 = [52, 104, 501, 34, 39, 99, 115, 45, 126]; //x
let labels = [];
for (let i = 1; i <= 31; i++) {
  labels.push(i);
}

const options = {
  // el grafico ocupa toda la pantalla , pro cuando se achica la acompaña en tamaño
  responsive: true,
  // para indicar donde quiero que comience el valor mínimo del eje y uso

  plugins: {
    title: {
      display: true,
      text: "Chart.js Bar Chart - Stacked",
    },
  },
  type: "bar",

  //para sacar la animacion de entrada es
  //animation: false,
};
export default function GraphicBarChart({ barChartData }) {
  const data = useMemo(function () {
    return {
      //estructura de como lo pide react chart
      datasets: [
        {
          /*  label : "mis datos",
                data :  scores */
          label: "gastos toales",
          data: scores,
          //para cambiar los colores de las linear
          borderColor: "blue",
          //pinta de algun color el area bajo la curva
          backgroundColor: "rgba(75,172,192,0.3)",
        },
      ],
      labels: labels,

      options: {
        indexAxis: "y",
      },
    };
  }, []);

  return <Bar data={data} options={options} />;
}
