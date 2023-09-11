import { Box } from "@mui/material";
import {
  DataGrid,
  GridColDef,
  GridToolbar,
  GridValueGetterParams,
} from "@mui/x-data-grid";
import "./styles.css";
import { Link } from "react-router-dom";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import VisibilityIcon from "@mui/icons-material/Visibility";

type ITypes = {
  columns: GridColDef[];
  rows: object[];
  slug: string;
};

const handleDelete = (id: number) => {
  //DELET THE ID FROM DATABASE
  //axios.delete(`/api/${slug}/id`)
};
const UserDataTable = (props: ITypes) => {
  const actionColumn: GridColDef = {
    field: "action",
    headerName: "Action",
    width: 200,
    renderCell: (params) => {
      return (
        <div className="action flex justify-between gap-2">
          <Link to={`${params.row.id}`}>
            <VisibilityIcon className="text-blue-600" />
          </Link>
          <div
            className="delete cursor-pointer"
            onClick={() => handleDelete(params.row.id)}
          >
            <DeleteForeverIcon className="text-red-600" />
          </div>
        </div>
      );
    },
  };
  return (
    <>
      <div className="dataTable">
        <Box sx={{ height: "400", width: "100%" }}>
          <DataGrid
            className="bg-white p-5"
            rows={props.rows}
            columns={[...props.columns, actionColumn]}
            initialState={{
              pagination: {
                paginationModel: {
                  pageSize: 10,
                },
              },
            }}
            slots={{ toolbar: GridToolbar }}
            slotProps={{
              toolbar: {
                showQuickFilter: true,
                quickFilterProps: { debounceMs: 500 },
              },
            }}
            pageSizeOptions={[5]}
            checkboxSelection
            disableRowSelectionOnClick
            disableColumnFilter
            disableDensitySelector
            disableColumnSelector
          />
        </Box>
      </div>
    </>
  );
};

export default UserDataTable;
