import React from "react";
import {
  Area,
  AreaChart,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

const data = [
  {
    name: "Sun",
    mensCloth: 4000,
    womensCloth: 2400,
    accessories: 2400,
  },
  {
    name: "Mon",
    mensCloth: 3000,
    womensCloth: 1398,
    accessories: 2210,
  },
  {
    name: "Tue",
    mensCloth: 2000,
    womensCloth: 9800,
    accessories: 2290,
  },
  {
    name: "Wed",
    mensCloth: 2780,
    womensCloth: 3908,
    accessories: 2000,
  },
  {
    name: "Thu",
    mensCloth: 1890,
    womensCloth: 4800,
    accessories: 2181,
  },
  {
    name: "Fri",
    mensCloth: 2390,
    womensCloth: 3800,
    accessories: 2500,
  },
  {
    name: "Sat",
    mensCloth: 3490,
    womensCloth: 4300,
    accessories: 2100,
  },
];

const BigChart = () => {
  return (
    <>
      <div className="h-full w-full flex flex-col justify-between">
        <h1>Revenue Analytics</h1>
        <div className="w-full h-[300px]">
          <ResponsiveContainer width="99%" height="100%">
            <AreaChart
              data={data}
              margin={{
                top: 10,
                right: 30,
                left: 0,
                bottom: 0,
              }}
            >
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Area
                type="monotone"
                dataKey="mensCloth"
                stackId="1"
                stroke="#8884d8"
                fill="#8884d8"
              />
              <Area
                type="monotone"
                dataKey="womensCloth"
                stackId="1"
                stroke="#82ca9d"
                fill="#82ca9d"
              />
              <Area
                type="monotone"
                dataKey="accessories"
                stackId="1"
                stroke="#ffc658"
                fill="#ffc658"
              />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      </div>
    </>
  );
};

export default BigChart;
