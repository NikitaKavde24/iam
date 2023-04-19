import React from "react";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
} from "recharts";

// const data = [
//   {
//     name: "Page A",
//     uv: 4000,
//     pv: 2400,
//     amt: 2400,
//   },
//   {
//     name: "Page B",
//     uv: 3000,
//     pv: 1398,
//     amt: 2210,
//   },
//   {
//     name: "Page C",
//     uv: 2000,
//     pv: 9800,
//     amt: 2290,
//   },
//   {
//     name: "Page D",
//     uv: 2780,
//     pv: 3908,
//     amt: 2000,
//   },
//   {
//     name: "Page E",
//     uv: 1890,
//     pv: 4800,
//     amt: 2181,
//   },
//   {
//     name: "Page F",
//     uv: 2390,
//     pv: 3800,
//     amt: 2500,
//   },
//   {
//     name: "Page G",
//     uv: 3490,
//     pv: 4300,
//     amt: 2100,
//   },
// ];

const data = [
  { day: 'Monday', hours: 8 },
  { day: 'Tuesday', hours: 10 },
  { day: 'Wednesday', hours: 7 },
  { day: 'Thursday', hours: 12 },
  { day: 'Friday', hours: 5 },
  { day: 'Saturday', hours: 10 },
  { day: 'Sunday', hours: 4 },
];

const CustomAreaChart = () => {
  return (
    <div className="flex flex-col items-center justify-center">
      <div className="font-medium text-iamblack">Productivity This Week</div>
      <div>
        <AreaChart
          width={400}
          height={120}
          data={data}
          margin={{
            top: 10,
            right: 30,
            left: 0,
            bottom: 0,
          }}
        >
          <XAxis dataKey="day" tick={false} />
          <YAxis tick={false} />

          <Area type="monotone" dataKey="hours" stroke="#295D93" fill="#295D93" />
        </AreaChart>
      </div>
      <div className="text-iamblue-500">View Analytics</div>
    </div>
  );
};

export default CustomAreaChart;