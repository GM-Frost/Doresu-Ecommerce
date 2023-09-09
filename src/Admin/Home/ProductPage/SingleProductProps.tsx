import {
  Legend,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

interface IProps {
  id: number;
  img?: string;
  title: string;
  info: Record<string, any>; // Use Record to specify object type
  chart?: {
    dataKeys: { name: string; color: string }[];
    data: object[];
  };
  activities?: { time: string; text: string }[];
}

const SingleProductProps: React.FC<IProps> = (props) => {
  return (
    <>
      <div className="flex">
        <div className="view flex-1">
          <div className="info">
            <div className="topInfo flex items-center gap-5">
              {props.img && (
                <img
                  src={props.img}
                  alt=""
                  className="w-32 h-32 rounded-3xl object-cover"
                />
              )}
              <h1 className="font-bold">{props.title}</h1>
              <button>Update</button>
            </div>
            <div className="details text-md">
              {Object.entries(props.info).map(([key, value]) => (
                <div className="item my-7 mx-0" key={key}>
                  <span className="itemTitle font-normal mr-2 capitalize">
                    {key}
                  </span>
                  <span className="value font-normal mr-2 capitalize">
                    {value}
                  </span>
                </div>
              ))}
            </div>
          </div>
          <hr className="w-[90%]  h-0 my-5 mx-0" />
          <div className="chart mt-12 w-[80%] h-[400px]">
            {props.chart?.data ? (
              <ResponsiveContainer width="100%" height="100%">
                <LineChart
                  width={500}
                  height={300}
                  data={props.chart.data}
                  margin={{
                    top: 5,
                    right: 30,
                    left: 20,
                    bottom: 5,
                  }}
                >
                  <XAxis dataKey="name" />
                  <YAxis />
                  <Tooltip />
                  <Legend />
                  {props.chart?.dataKeys.map((dataKey) => (
                    <Line
                      type="monotone"
                      dataKey={dataKey.name}
                      stroke={dataKey.color}
                      key={dataKey.name}
                    />
                  ))}
                </LineChart>
              </ResponsiveContainer>
            ) : (
              <p>No chart data available.</p>
            )}
          </div>
        </div>
        <div className="activities flex-1">
          <h2 className="text-2xl font-semibold">Latest Activities</h2>
          {props.activities?.length ? (
            <ul>
              {props.activities.map((activity) => (
                <li
                  key={activity.text}
                  className="list-none relative w-px bg-[#f45b69] pt-[50px] after:content-[''] after:absolute after:w-2.5 after:h-2.5 after:bg-[#f45b69] after:-translate-x-2/4 after:rounded-[50%] after:left-2/4 after:bottom-0;"
                >
                  <div className="min-w-[480px] p-4 bg-[#6287eb47]">
                    <p className="mb-2">{activity.text}</p>
                    <p className="text-sm">{activity.time}</p>
                  </div>
                </li>
              ))}
            </ul>
          ) : (
            <p>No activities available.</p>
          )}
        </div>
      </div>
    </>
  );
};

export default SingleProductProps;
