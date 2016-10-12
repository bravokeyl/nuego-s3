import React,{ Component } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend , Brush } from 'recharts';

let chartData = {
    labels: ['6','7','8','9','10', '11', '12', '13', '14', '15', '16', '17', '18', '19'],
    datasets: [
        {
            label: "Tracker",
            data: [-44.894, -32.235, -28.657, -15.290, 0.645, 15.363, 29.098, 44.269,
              34.108, 28.063, 6.1104, -14.8126, -32.6349]
        },
        {
          label: "Sun",
          data: [-1.277, 12.908, 27.194, 41.502, 55.716, 69.500, 80.531, 76.397,
            63.428, 49.369, 35.087, 20.771, 6.507]
        }
    ]
};

const data = [
      {hour: '6', TrackerAngle: -44.894, SunAngle: -1.277},
      {hour: '7', TrackerAngle: -32.235, SunAngle: 12.908},
      {hour: '8', TrackerAngle: -28.657, SunAngle: 27.194},
      {hour: '9', TrackerAngle: -15.290, SunAngle: 41.502},
      {hour: '10', TrackerAngle: 0.645, SunAngle: 55.716},
      {hour: '11', TrackerAngle: 15.363, SunAngle: 69.500},
      {hour: '12', TrackerAngle: 29.098, SunAngle: 80.531},
      {hour: '13', TrackerAngle: 44.269, SunAngle: 76.397},
      {hour: '14', TrackerAngle: 34.108, SunAngle: 63.428},
      {hour: '15', TrackerAngle: 28.063, SunAngle: 49.369},
      {hour: '16', TrackerAngle: 6.1104, SunAngle: 35.087},
      {hour: '17', TrackerAngle: -14.8126, SunAngle: 20.771},
      {hour: '18', TrackerAngle: -32.6349, SunAngle: 6.507},
      {hour: '19'}
];

class NueLineChart extends Component {
  render() {
    return (
      <LineChart width={938} height={300} data={data} margin={{top: 5,right:20,bottom: 5}}>
        <XAxis dataKey="hour" axisLine={false} />
        <YAxis axisLine={false}/>
        <CartesianGrid stroke="#2d353a"/>
        <Tooltip/>
        <Legend align="center"/>
        <Line type="monotone" dataKey="SunAngle" stroke="#fc9839" activeDot={{r: 8}}/>
        <Line type="monotone" dataKey="TrackerAngle" stroke="#356d8f" />
      </LineChart>
    );
  }
}

export default NueLineChart;
