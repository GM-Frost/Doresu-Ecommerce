import React, { useState } from "react";
import UserDataTable from "../../Components/UserDataTable/UserDataTable";
import { GridColDef } from "@mui/x-data-grid";
import AddProducts from "../../Components/ProductsDataTable/AddProducts";
import { productData } from "../../Components/ProductsDataTable/Data";

const columns: GridColDef[] = [
  { field: "id", headerName: "ID", width: 90 },
  {
    field: "img",
    headerName: "Image",
    width: 100,
    renderCell(params) {
      return (
        <>
          <img
            src={
              params.row.img ||
              "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png"
            }
            alt=""
          />
        </>
      );
    },
  },
  {
    field: "title",
    type: "string",
    headerName: "Title",
    width: 250,
  },
  {
    field: "size",
    type: "string",
    headerName: "Size",
    width: 150,
  },
  {
    field: "price",
    type: "string",
    headerName: "Price",
    width: 200,
  },
  {
    field: "category",
    type: "string",
    headerName: "Category",
    width: 200,
  },
  {
    field: "brand",
    type: "string",
    headerName: "Brand",
    width: 200,
  },
];

const AdminProducts = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <div className="products">
        <div className="info">
          <div className="flex flex-col items-center my-24">
            <button
              onClick={() => setOpen(true)}
              className="py-2 px-4 bg-indigo-500 hover:bg-indigo-600 text-white font-bold text-lg rounded-full"
            >
              Add New Products
            </button>
          </div>
        </div>
        <UserDataTable slug="products" columns={columns} rows={productData} />
        {open && (
          <AddProducts slug="products" columns={columns} setOpen={setOpen} />
        )}
      </div>
    </>
  );
};
export default AdminProducts;
