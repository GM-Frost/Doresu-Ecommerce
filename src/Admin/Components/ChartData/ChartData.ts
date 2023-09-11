import ListAltIcon from "@mui/icons-material/ListAlt";
import CategoryIcon from "@mui/icons-material/Category";
import CurrencyExchangeIcon from "@mui/icons-material/CurrencyExchange";
import TrendingUpIcon from "@mui/icons-material/TrendingUp";

export const chartBoxOrders = {
  color: "#8884d8",
  icon: ListAltIcon,
  title: "Total Orders",
  number: "268",
  dataKey: "orders",
  percentage: 21,
  chartData: [
    { name: "Sun", orders: 400 },
    { name: "Mon", orders: 600 },
    { name: "Tue", orders: 500 },
    { name: "Wed", orders: 700 },
    { name: "Thu", orders: 400 },
    { name: "Fri", orders: 500 },
    { name: "Sat", orders: 450 },
  ],
};

export const chartBoxProducts = {
  color: "skyblue",
  icon: CategoryIcon,
  title: "Total Products",
  number: "268",
  dataKey: "products",
  percentage: 21,
  chartData: [
    { name: "Sun", products: 400 },
    { name: "Mon", products: 600 },
    { name: "Tue", products: 500 },
    { name: "Wed", products: 700 },
    { name: "Thu", products: 400 },
    { name: "Fri", products: 500 },
    { name: "Sat", products: 450 },
  ],
};

export const chartBoxRevenue = {
  color: "teal",
  icon: CurrencyExchangeIcon,
  title: "Total Revenue",
  number: "$235.55",
  dataKey: "revenue",
  percentage: -12,
  chartData: [
    { name: "Sun", revenue: 400 },
    { name: "Mon", revenue: 600 },
    { name: "Tue", revenue: 500 },
    { name: "Wed", revenue: 700 },
    { name: "Thu", revenue: 400 },
    { name: "Fri", revenue: 500 },
    { name: "Sat", revenue: 450 },
  ],
};

export const chartBoxConversion = {
  color: "gold",
  icon: TrendingUpIcon,
  title: "Total Ratio",
  number: "2.55",
  dataKey: "ratio",
  percentage: 14,
  chartData: [
    { name: "Sun", ratio: 400 },
    { name: "Mon", ratio: 600 },
    { name: "Tue", ratio: 500 },
    { name: "Wed", ratio: 700 },
    { name: "Thu", ratio: 400 },
    { name: "Fri", ratio: 500 },
    { name: "Sat", ratio: 450 },
  ],
};

export const barChartRevenue = {
  title: "Profit Earned",
  color: "#8884d8",
  dataKey: "profit",
  chartData: [
    { name: "Sun", profit: 4000 },
    { name: "Mon", profit: 3000 },
    { name: "Tue", profit: 2000 },
    { name: "Wed", profit: 3800 },
    { name: "Thu", profit: 4000 },
    { name: "Fri", profit: 8000 },
    { name: "Sat", profit: 2900 },
  ],
};

export const barChartVisit = {
  title: "Total Visit",
  color: "#FF8042",
  dataKey: "visit",
  chartData: [
    { name: "Sun", visit: 4125 },
    { name: "Mon", visit: 3325 },
    { name: "Tue", visit: 2580 },
    { name: "Wed", visit: 3522 },
    { name: "Thu", visit: 4258 },
    { name: "Fri", visit: 8000 },
    { name: "Sat", visit: 2581 },
  ],
};
