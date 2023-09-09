import { GridColDef, GridValueGetterParams } from "@mui/x-data-grid";
import { useEffect, useState } from "react";
import OrderDataTable from "../../Components/OrderDataTable/OrderDataTable";
import axios from "axios";

const columns: GridColDef[] = [
  { field: "orderId", headerName: "Order#ID", width: 70 },
  { field: "userId", headerName: "Email", width: 130 },
  { field: "accFirstname", headerName: "First Name", width: 130 },
  { field: "accLastname", headerName: "Last name", width: 130 },
  { field: "status", headerName: "Order Status", width: 130 },
  { field: "orderDate", headerName: "Order Date", width: 240 },
  { field: "expectedDate", headerName: "Delivery Date", width: 240 },
  { field: "totalPrice", headerName: "Price $", width: 130 },
];

const AdminOrders = () => {
  const [orderRows, setOrderRows] = useState([]);

  useEffect(() => {
    const apiUrl = "http://localhost:8082/api/v1/orders";
    axios
      .get(apiUrl)
      .then((response) => {
        setOrderRows(response.data);
      })
      .catch((error) => {
        console.error("Error fetching orders:", error);
      });
  }, []);

  return (
    <>
      <div className="products">
        <div className="info">
          <div className="flex flex-col items-center my-4">All Orders</div>
        </div>
        <OrderDataTable slug="orders" columns={columns} rows={orderRows} />
      </div>
    </>
  );
};

export default AdminOrders;
