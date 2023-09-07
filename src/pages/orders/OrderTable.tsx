import React from "react";
import { Link } from "react-router-dom";

const orders = [
  {
    orderNumber: 23422,
    orderName: "Black Tee",
    orderImage:
      "https://images.pexels.com/photos/2705752/pexels-photo-2705752.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    orderAddress: "Canada",
    orderStatus: "Delivered",
    orderItem: 4,
    orderPrice: 234.43,
  },
  {
    orderNumber: 44332,
    orderName: "Yellow Tee",
    orderImage:
      "https://images.pexels.com/photos/5797579/pexels-photo-5797579.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    orderAddress: "Canada",
    orderStatus: "In Progress",
    orderItem: 2,
    orderPrice: 322.43,
  },
  {
    orderNumber: 43321,
    orderName: "White Tee",
    orderImage:
      "https://images.pexels.com/photos/5855528/pexels-photo-5855528.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    orderAddress: "Canada",
    orderStatus: "Shipped",
    orderItem: 1,
    orderPrice: 258.43,
  },
  {
    orderNumber: 2342,
    orderName: "Red Tee",
    orderImage:
      "https://images.pexels.com/photos/5855528/pexels-photo-5855528.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    orderAddress: "Canada",
    orderStatus: "Returned",
    orderItem: 1,
    orderPrice: 422.43,
  },

  {
    orderNumber: 43321,
    orderName: "White Tee",
    orderImage:
      "https://images.pexels.com/photos/5855528/pexels-photo-5855528.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    orderAddress: "Canada",
    orderStatus: "Cancelled",
    orderItem: 1,
    orderPrice: 422.43,
  },
];

const OrderTable = () => {
  return (
    <>
      <div className="overflow-x-auto">
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
            {/* row 1 */}
            {orders.map((order) => (
              <tr>
                <td>
                  <label>
                    <span>#{order.orderNumber}</span>
                  </label>
                </td>
                <td>
                  <div className="flex items-center space-x-3">
                    <div className="avatar">
                      <div className="mask mask-squircle w-12 h-12">
                        <img
                          src={order.orderImage}
                          alt="Avatar Tailwind CSS Component"
                        />
                      </div>
                    </div>
                    <div>
                      <div className="font-bold">{order.orderName}</div>
                      <div className="text-sm opacity-50">
                        {order.orderAddress}
                      </div>
                    </div>
                  </div>
                </td>
                <td>
                  Expected Delivery on Sept 02
                  <br />
                  <span
                    className={`badge ${
                      order.orderStatus === "In Progress"
                        ? "badge-warning"
                        : order.orderStatus === "Delivered"
                        ? "badge-success"
                        : order.orderStatus === "Cancelled"
                        ? "badge-error"
                        : order.orderStatus === "Returned"
                        ? "badge-info"
                        : order.orderStatus === "Shipped"
                        ? "badge-secondary"
                        : "" // Default class or empty string
                    } badge-sm w-full h-full text-center`}
                  >
                    {order.orderStatus}
                  </span>
                </td>
                <td>{order.orderItem}</td>
                <td>$ {order.orderPrice}</td>
                <th>
                  <Link to={`/account/orders/${order.orderNumber}`}>
                    <button className="btn btn-ghost btn-xs">details</button>
                  </Link>
                </th>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default OrderTable;
