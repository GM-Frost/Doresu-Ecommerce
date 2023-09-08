import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useAppSelector } from "../../redux/hooks/Hooks";
import axios from "axios";
import { RootState } from "../../redux/app/Store";

const OrderTable = () => {
  const user = useAppSelector((state: RootState) => state.auth.userDetails);
  const accEmail = user?.email;
  const userId = user?.email;

  const [orderData, setOrderData] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const response = await axios.get(
          "http://localhost:8082/api/v1/orders/user/orders",
          {
            params: { accEmail, userId },
          }
        );

        setOrderData(response.data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching orders:", error);
        setLoading(false);
      }
    };

    fetchOrders();
  }, [accEmail, userId]);

  return (
    <>
      <div className="overflow-x-auto">
        {loading ? (
          <div>Loading...</div>
        ) : orderData.length === 0 ? (
          <div>
            <p className="text-center ">You dont have any orders</p>
            <img
              src="https://img.freepik.com/free-vector/empty-concept-illustration_114360-1188.jpg?w=1060&t=st=1694145639~exp=1694146239~hmac=a607cf5b008362299ed19a9cd0e5633493a309949dee4a9007d23daa2c31b547"
              alt="No Orders Found"
            />
          </div>
        ) : (
          <table className="table">
            {/* head */}
            <thead>
              <tr>
                <th>
                  <label>
                    <span>Order Number</span>
                  </label>
                </th>
                <th>Name</th>
                <th>Status</th>
                <th>Total Item</th>
                <th>Total Price</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {orderData.map((order) => (
                <tr>
                  <td>
                    <label>
                      <span>#{order.orderId}</span>
                    </label>
                  </td>
                  <td>
                    <div className="flex items-center space-x-3">
                      <div className="avatar">
                        <div className="mask mask-squircle w-12 h-12">
                          <img
                            src={order.orderItems[0].images}
                            alt="Avatar Tailwind CSS Component"
                          />
                        </div>
                      </div>
                      <div>
                        <div className="font-bold">{order.orderName}</div>
                        <div className="text-sm opacity-50">
                          {order.country}
                        </div>
                      </div>
                    </div>
                  </td>
                  <td>
                    Expected Delivery on {order.expectedDate}
                    <br />
                    <span
                      className={`badge ${
                        order.status === "Order Confirmed"
                          ? "bg-orange-100 border-orange-100"
                          : order.status === "Delivered"
                          ? "badge-success text-white"
                          : order.status === "Out for Delivery"
                          ? "bg-primary border-primary text-white"
                          : order.status === "Cancelled"
                          ? "badge-error text-white"
                          : order.status === "Returned"
                          ? "badge-warning"
                          : order.status === "Shipped"
                          ? "badge-info text-white"
                          : "" // Default class or empty string
                      } badge-sm w-full h-full text-center`}
                    >
                      {order.status}
                    </span>
                  </td>
                  <td>{order.orderItems.length}</td>
                  <td>$ {order.totalPrice}</td>
                  <th>
                    <Link to={`/account/orders/${order.orderId}`}>
                      <button className="btn btn-ghost btn-xs">details</button>
                    </Link>
                  </th>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </>
  );
};

export default OrderTable;
