import React,{ Component } from 'react';
import { Line as LineChart } from 'react-chartjs';

let chartData = {
    labels: ['6','7','8','9','10', '11', '12', '13', '14', '15', '16', '17', '18', '19'],
    datasets: [
        {
            label: "Tracker",
            data: [-44.894, -32.235, -28.657, -15.290, 0.645, 15.363, 29.098, 44.269, 34.108, 28.063, 6.1104, -14.8126, -32.6349]
        },
        {
          label: "Sun",
          data: [-1.277, 12.908, 27.194, 41.502, 55.716, 69.500, 80.531, 76.397, 63.428, 49.369, 35.087, 20.771, 6.507]
        }
    ]
};
let chartOptions = {
  responsive: false
};

class NueChart extends Component {
  render() {
    return(
      <LineChart data={chartData} options={chartOptions} width="938" height="300px"/>
    );
  }
}

export default NueChart;
