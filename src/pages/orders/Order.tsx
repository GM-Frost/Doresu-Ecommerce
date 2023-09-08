import { Box, Grid } from "@mui/material";
import OrderTable from "./OrderTable";

import { BiPurchaseTag } from "react-icons/bi";

const orderStatus = [
  {
    label: "Order Placed",
    value: "OrderConfirmed",
  },
  {
    label: "Shipped",
    value: "Shipped",
  },
  {
    label: "Delivered",
    value: "Delivered",
  },
  {
    label: "In Progress",
    value: "InProgress",
  },
  {
    label: "Cancelled",
    value: "Cancelled",
  },
  {
    label: "Returned",
    value: "Returned",
  },
];
const Order = () => {
  return (
    <>
      <div className="py-14 px-4 md:px-4 2xl:px-16 2xl:container 2xl:mx-auto">
        <div className="flex justify-start item-start space-y-2 flex-col ">
          <h1 className="text-3xl lg:text-4xl font-semibold leading-7 lg:leading-9  text-gray-800">
            Your Orders
          </h1>
        </div>
        <div className="mt-10 flex flex-col xl:flex-row jusitfy-center items-stretch  w-full xl:space-x-8 space-y-4 md:space-y-6 xl:space-y-0">
          <div className="bg-white shadow-md w-full xl:w-96 flex justify-between items-center md:items-start px-4 py-6 md:p-6 xl:p-8 flex-col ">
            <div className="space-y-4">
              <h1 className="flex gap-2 font-semibold">
                Order Status <BiPurchaseTag />
              </h1>
              {orderStatus.map((option) => (
                <div className="flex items-center">
                  <input
                    defaultValue={option.value}
                    type="checkbox"
                    className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-500"
                  />
                  <label
                    htmlFor={option.value}
                    className="ml-3 text-sm text-gray-600"
                  >
                    {option.label}
                  </label>
                </div>
              ))}
            </div>
          </div>
          <div className="flex flex-col justify-start items-start w-full space-y-4 md:space-y-6 xl:space-y-8">
            <div className="bg-white flex flex-col justify-start items-start shadow-md rounded-md px-4 py-4 md:py-6 md:p-6 xl:p-8 w-full">
              <p className="text-lg md:text-xl font-semibold leading-6 xl:leading-5 text-gray-800">
                All Orders
              </p>
              <div className="mt-4 md:mt-6 flex  flex-col md:flex-row justify-start items-start md:items-center md:space-x-6 xl:space-x-8 w-full "></div>
              <div className="mt-6 md:mt-0 flex justify-start flex-col md:flex-row  items-start md:items-center space-y-4  md:space-x-6 xl:space-x-8 w-full ">
                <Grid item xs={12} lg={7}>
                  <Box>
                    <OrderTable />
                  </Box>
                </Grid>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Order;
