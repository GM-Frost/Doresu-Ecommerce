import { Box } from "@mui/material";
import { DataGrid, GridColDef, GridToolbar } from "@mui/x-data-grid";
import { Link } from "react-router-dom";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import VisibilityIcon from "@mui/icons-material/Visibility";

type ITypes = {
  columns: GridColDef[];
  rows: object[];
  slug: string;
};

const handleDelete = (id: number) => {};

const renderImage = (images: string[]) => {
  return (
    <div className="image-column flex gap-2">
      {images.map((image, index) => (
        <img
          key={index}
          src={image}
          alt={`Image ${index + 1}`}
          className="rounded-lg"
          width={25}
          height={25}
        />
      ))}
    </div>
  );
};
const renderSizes = (sizes: string[]) => {
  return (
    <div className="sizes-column flex gap-2">
      {sizes.map((size, index) => (
        <div key={index}>{size}</div>
      ))}
    </div>
  );
};

const ProductDataTable = (props: ITypes) => {
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

  const columnsWithRenderers = props.columns.map((column) => {
    if (column.field === "images") {
      return {
        ...column,
        renderCell: (params) => renderImage(params.row.images),
      };
    } else if (column.field === "sizes") {
      return {
        ...column,
        renderCell: (params) => renderSizes(params.row.sizes),
      };
    }
    return column;
  });

  return (
    <>
      <div className="dataTable">
        <Box
          sx={{
            height: "400",
            width: "100%",
            display: "flex",
            flexDirection: "column",
          }}
        >
          <DataGrid
            className="bg-white p-5"
            rows={props.rows}
            columns={[...columnsWithRenderers, actionColumn]}
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

export default ProductDataTable;
