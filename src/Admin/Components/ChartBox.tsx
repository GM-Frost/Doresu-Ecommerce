import React from "react";
import { Link } from "react-router-dom";
import { LineChart, Tooltip, Line, ResponsiveContainer } from "recharts";

type IProps = {
  color: string;
  icon: any;
  title: string;
  dataKey: string;
  number: number | string;
  percentage: number;
  chartData: object[];
};

const ChartBox = (props: IProps) => {
  return (
    <>
      <div className="chartBox flex h-full">
        <div className="boxInfo flex-[3] flex flex-col justify-between">
          <div className="title flex items-center gap-2">
            <span className="font-bold">
              {props.icon && React.createElement(props.icon)}
            </span>
            <span>{props.title}</span>
          </div>
          <h1>{props.number}</h1>
          <Link to="/admin" style={{ color: props.color }}>
            View All
          </Link>
        </div>
        <div className="chartInfo flex-[2] flex flex-col justify-between">
          <div className="chart h-full w-full">
            <ResponsiveContainer width="99%" height="100%">
              <LineChart data={props.chartData}>
                <Tooltip
                  contentStyle={{ background: "transparent", border: "none" }}
                  labelStyle={{ display: "none" }}
                  position={{ x: 10, y: 50 }}
                />
                <Line
                  type="monotone"
                  dataKey={props.dataKey}
                  stroke={props.color}
                  strokeWidth={2}
                  dot={false}
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
          <div className="text flex flex-col text-right">
            <div
              className={`percentage font-bold text-xl 
            ${props.percentage < 0 ? "text-red-400" : "text-green-400"}
            `}
            >
              {props.percentage}%
            </div>
            <div className="duration text-sm">this month</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ChartBox;
