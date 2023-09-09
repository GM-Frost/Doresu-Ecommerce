import { GridColDef } from "@mui/x-data-grid";

type IProps = {
  slug: string;
  columns: GridColDef[];
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

const AddProducts = (props: IProps) => {
  const handleSubmit = (e: React.FormEventHandler<HTMLFormElement>) => {
    e.preventDefault();
    //Add New Items
    //axios.post(`/api/${props.slug}`)
  };
  return (
    <>
      <div className="w-[100vw] h-[100vh] absolute top-0 left-0 bg-black bg-opacity-60 flex items-center justify-center">
        <div className=" p-14 rounded-lg bg-white relative">
          <span
            className="absolute top-3 right-3 cursor-pointer"
            onClick={() => props.setOpen(false)}
          >
            X
          </span>
          <h1>Add New {props.slug}</h1>
          <form
            className="text-black flex flex-wrap max-w-lg justify-between"
            onSubmit={handleSubmit}
          >
            {props.columns
              .filter((item) => item.field !== "id" && item.field !== "img")
              .map((column) => (
                <div className="flex flex-col gap-3 mb-5">
                  <label htmlFor="" className="text-sm">
                    {column.headerName}
                  </label>
                  <input
                    type={column.type}
                    placeholder={column.field}
                    className=" p-3 bg-transparent outline-none border rounded-md"
                  />
                </div>
              ))}
            <button>Send</button>
          </form>
        </div>
      </div>
    </>
  );
};

export default AddProducts;
