import UserDataTable from "../../Components/UserDataTable/UserDataTable";
import { userRows } from "../../Components/UserDataTable/Data";
import AddUser from "../../Components/UserDataTable/AddUser";
import { GridColDef, GridValueGetterParams } from "@mui/x-data-grid";
import { useState } from "react";

const columns: GridColDef[] = [
  { field: "id", headerName: "ID", width: 90 },
  {
    field: "img",
    headerName: "Avatar",
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
    field: "firstName",
    type: "string",
    headerName: "First name",
    width: 150,
  },
  {
    field: "lastName",
    type: "string",
    headerName: "Last name",
    width: 150,
  },
  {
    field: "fullName",
    type: "string",
    headerName: "Full name",
    description: "This column has a value getter and is not sortable.",
    sortable: false,
    width: 160,
    valueGetter: (params: GridValueGetterParams) =>
      `${params.row.firstName || ""} ${params.row.lastName || ""}`,
  },
  {
    field: "email",
    type: "string",
    headerName: "Email",
    width: 200,
  },
  {
    field: "phone",
    type: "string",
    headerName: "Phone",
    width: 200,
  },
  {
    field: "verified",
    headerName: "Verified",
    width: 150,
    type: "boolean",
  },
];

const AdminUsers = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <div className="users">
        <div className="info">
          <div className="flex flex-col items-center my-24">
            <button
              onClick={() => setOpen(true)}
              className="py-2 px-4 bg-indigo-500 hover:bg-indigo-600 text-white font-bold text-lg rounded-full"
            >
              Add User
            </button>
          </div>
        </div>
        <UserDataTable slug="users" columns={columns} rows={userRows} />
        {open && <AddUser slug="user" columns={columns} setOpen={setOpen} />}
      </div>
    </>
  );
};

export default AdminUsers;
