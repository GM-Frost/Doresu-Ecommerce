import React, { useEffect, useState } from "react";
import { GridColDef } from "@mui/x-data-grid";
import AddProducts from "../../Components/ProductsDataTable/AddProducts";
import axios from "axios";
import ProductDataTable from "../../Components/ProductsDataTable/ProductDataTable";
const columns: GridColDef[] = [
  { field: "id", headerName: "ID", width: 100 },
  { field: "images", headerName: "Image", width: 150 },
  { field: "title", headerName: "Title", width: 180 },
  { field: "description", headerName: "Description", width: 200 },
  { field: "price", headerName: "Price", width: 70 },
  { field: "brand", headerName: "Brand", width: 120 },
  { field: "color", headerName: "Color", width: 100 },
  { field: "sizes", headerName: "Sizes", width: 100 },
  { field: "category", headerName: "Category", width: 130 },
];
const AdminProducts = () => {
  const [open, setOpen] = useState(false);

  const [productRows, setProductRows] = useState([]);

  useEffect(() => {
    const apiUrl = "http://localhost:8082/api/v1/products";
    axios
      .get(apiUrl)
      .then((response) => {
        setProductRows(response.data);
      })
      .catch((error) => {
        console.error("Error fetching orders:", error);
      });
  }, []);

  return (
    <>
      <div className="products">
        <div className="info">
          <div className="flex flex-col items-center my-4">
            <button
              onClick={() => setOpen(true)}
              className="py-2 px-4 bg-indigo-500 hover:bg-indigo-600 text-white font-bold text-lg rounded-full"
            >
              Add New Products
            </button>
          </div>
        </div>
        <ProductDataTable
          slug="products"
          columns={columns}
          rows={productRows}
        />
        {open && (
          <AddProducts slug="products" columns={columns} setOpen={setOpen} />
        )}
      </div>
    </>
  );
};
export default AdminProducts;
