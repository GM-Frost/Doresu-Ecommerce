import {
  BarChart,
  Bar,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

type IProps = {
  title: string;
  color: string;
  dataKey: string;
  chartData: object[];
};
const BarChartBox = (props: IProps) => {
  return (
    <>
      <div className="barChartBox w-full h-full">
        <h1 className="text-xl mb-5">{props.title}</h1>
        <div className="chart">
          <ResponsiveContainer width="100%" height={150}>
            <BarChart width={150} height={40} data={props.chartData}>
              <Tooltip
                contentStyle={{ background: "#15212d", borderRadius: "5px" }}
                labelStyle={{ display: "none" }}
              />
              <Bar dataKey={props.dataKey} fill={props.color} />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
    </>
  );
};

export default BarChartBox;
