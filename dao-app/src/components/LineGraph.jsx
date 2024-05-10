import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
} from "chart.js";

import { Line } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);





const LineGraph = () => {

    


  return <Line options={} data={}/>;
};

export default LineGraph;
