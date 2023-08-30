import { Link } from "react-router-dom";

const Category = () => {
  return (
    <>
      <div className="flex h-[60vh] gap-4 m-3">
        <div className="col flex flex-1 flex-col gap-3">
          <div className="row relative flex flex-1 gap-3 overflow-hidden group">
            <img
              src="https://images.unsplash.com/photo-1621335829175-95f437384d7c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8bWVuJTIwd2VhcnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60"
              className="w-full h-full object-cover"
            />
            <div className="absolute h-full w-full bg-black/30 flex items-center justify-center -bottom-10 group-hover:bottom-0 opacity-0 group-hover:opacity-100 transition-all duration-500">
              <button className="btn btn-primary text-white py-2 px-5">
                Sale
              </button>
            </div>
          </div>

          <div className="row relative flex flex-1 gap-3 overflow-hidden group">
            <img
              src="https://plus.unsplash.com/premium_photo-1689371958595-e4c539dd371a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8d29tZW4lMjB3ZWFyfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60"
              className="w-full h-full object-cover"
            />
            <div className="absolute h-full w-full bg-black/30 flex items-center justify-center -bottom-10 group-hover:bottom-0 opacity-0 group-hover:opacity-100 transition-all duration-500">
              <button className="btn btn-primary text-white py-2 px-5">
                Sale
              </button>
            </div>
          </div>
        </div>
        <div className="col flex flex-1 flex-col gap-3">
          <div className="row relative flex flex-1 gap-3 overflow-hidden group">
            <img
              src="https://images.unsplash.com/photo-1581044777550-4cfa60707c03?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8ZmFzaGlvbnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60"
              className="w-full h-full object-cover"
            />
            <div className="absolute h-full w-full bg-black/30 flex items-center justify-center -bottom-10 group-hover:bottom-0 opacity-0 group-hover:opacity-100 transition-all duration-500">
              <button className="btn btn-primary text-white py-2 px-5">
                Sale
              </button>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-3 flex-[2]">
          <div className="row relative flex flex-1 gap-3 overflow-hidden">
            <div className="col flex flex-1 flex-col gap-3">
              <div className="row relative flex flex-1 gap-3 overflow-hidden group">
                <img
                  src="https://images.unsplash.com/photo-1557777586-f6682739fcf3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGZhc2hpb258ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60"
                  className="w-full h-full object-cover"
                />
                <div className="absolute h-full w-full bg-black/30 flex items-center justify-center -bottom-10 group-hover:bottom-0 opacity-0 group-hover:opacity-100 transition-all duration-500">
                  <button className="btn btn-primary text-white py-2 px-5">
                    Sale
                  </button>
                </div>
              </div>
            </div>
            <div className="col flex flex-1 flex-col gap-3">
              <div className="row relative flex flex-1 gap-3 overflow-hidden group">
                <img
                  src="https://images.unsplash.com/photo-1552374196-1ab2a1c593e8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTF8fGZhc2hpb258ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60"
                  className="w-full h-full object-cover"
                />
                <div className="absolute h-full w-full bg-black/30 flex items-center justify-center -bottom-10 group-hover:bottom-0 opacity-0 group-hover:opacity-100 transition-all duration-500">
                  <button className="btn btn-primary text-white py-2 px-5">
                    Sale
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div className="row relative  flex-1 overflow-hidden group">
            <img
              src="https://images.unsplash.com/photo-1566206091558-7f218b696731?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDd8fGZhc2hpb258ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60"
              className="w-full h-full object-cover"
            />
            <div className="absolute h-full w-full bg-black/30 flex items-center justify-center -bottom-10 group-hover:bottom-0 opacity-0 group-hover:opacity-100 transition-all duration-500">
              <button className="btn btn-primary text-white py-2 px-5">
                Sale
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Category;
