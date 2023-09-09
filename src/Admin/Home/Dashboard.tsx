import ChartBox from "../Components/ChartBox";
import BarChartBox from "../Components/ChartData/BarChartBox/BarChartBox";
import BigChart from "../Components/ChartData/BigChartBox/BigChart";
import {
  barChartRevenue,
  barChartVisit,
  chartBoxConversion,
  chartBoxOrders,
  chartBoxProducts,
  chartBoxRevenue,
} from "../Components/ChartData/ChartData";
import PieChartBox from "../Components/ChartData/PieChartBox/PieChartBox";
import TopBox from "../Components/TopBox";

const Dashboard = () => {
  return (
    <>
      <div className="grid gap-5 grid-cols-[repeat(4,1fr)] auto-rows-[minmax(180px,auto)]">
        <div className="p-5 rounded-xl bg-white shadow-lg border col-[span_1] row-[span_3] border-gray-100">
          <TopBox />
        </div>
        <div className="p-5 rounded-xl bg-white shadow-lg border border-gray-100">
          <ChartBox {...chartBoxOrders} />
        </div>
        <div className="p-5 rounded-xl bg-white shadow-lg border border-gray-100">
          <ChartBox {...chartBoxProducts} />
        </div>
        <div className="p-5 rounded-xl col-[span_1] row-[span_3] bg-white shadow-lg border border-gray-100">
          <PieChartBox />
        </div>
        <div className="p-5 rounded-xl bg-white shadow-lg border border-gray-100">
          <ChartBox {...chartBoxConversion} />
        </div>
        <div className="p-5 rounded-xl bg-white shadow-lg border border-gray-100">
          <ChartBox {...chartBoxRevenue} />
        </div>
        <div className="p-5 rounded-xl col-[span_2] row-[span_2] bg-white shadow-lg border border-gray-100">
          <BigChart />
        </div>
        <div className="p-5 rounded-xl bg-white shadow-lg border border-gray-100">
          <BarChartBox {...barChartVisit} />
        </div>
        <div className="p-5 rounded-xl bg-white shadow-lg border border-gray-100">
          <BarChartBox {...barChartRevenue} />
        </div>
      </div>
    </>
  );
};

export default Dashboard;
