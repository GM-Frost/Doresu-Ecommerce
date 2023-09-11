import { GridColDef, GridValueGetterParams } from "@mui/x-data-grid";
import { useState } from "react";
import axios, { AxiosError } from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

interface IForm {
  firstname: string;
  lastname: string;
  email: string;
  password: string;
}

const AdminUsers = () => {
  const [formData, setFormData] = useState<IForm>({
    firstname: "",
    lastname: "",
    email: "",
    password: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (
      formData.firstname === "" ||
      formData.lastname === "" ||
      formData.email === "" ||
      formData.password === ""
    ) {
      toast.error("Please fill out all the details in the form.");
      return;
    }
    try {
      const response = await axios.post(
        "http://localhost:8083/api/admin/auth/register",
        formData
      );

      console.log(response.data);

      setFormData({
        firstname: "",
        lastname: "",
        email: "",
        password: "",
      });

      toast.success("Admin registered successfully!");
    } catch (error) {
      console.log(error);
      if (axios.isAxiosError(error)) {
        const axiosError = error as AxiosError; // Cast error to AxiosError
        console.log(axiosError.response?.status);
        if (axiosError.response?.status === 400) {
          toast.error("This Email Already Registered");
        } else {
          toast.error("Error registering admin.");
        }
      } else {
        toast.error("An error occurred while registering admin.");
      }
    }
  };

  return (
    <>
      <ToastContainer />
      <div className="users">
        <div className="info">
          <div className="flex flex-col items-center my-4">
            <div className="p-10">
              <h1 className="mb-8 font-extrabold text-4xl">
                Register New Admin
              </h1>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <form onSubmit={handleSubmit}>
                  <div>
                    <label className="block font-semibold">First Name</label>
                    <input
                      className="w-full capitalize shadow-inner bg-gray-100 rounded-lg placeholder-black text-2xl p-4 border-none block mt-1 "
                      id="firstname"
                      type="text"
                      name="firstname"
                      autoCapitalize="true"
                      value={formData.firstname}
                      onChange={handleChange}
                    />
                  </div>
                  <div>
                    <label className="block font-semibold">Last Name</label>
                    <input
                      className="w-full capitalize shadow-inner bg-gray-100 rounded-lg placeholder-black text-2xl p-4 border-none block mt-1 "
                      id="lastname"
                      type="text"
                      name="lastname"
                      value={formData.lastname}
                      onChange={handleChange}
                    />
                  </div>

                  <div className="mt-4">
                    <label className="block font-semibold">Email</label>
                    <input
                      className="w-full shadow-inner bg-gray-100 rounded-lg placeholder-black text-2xl p-4 border-none block mt-1"
                      id="email"
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                    />
                  </div>

                  <div className="mt-4">
                    <label className="block font-semibold">Password</label>
                    <input
                      className="w-full shadow-inner bg-gray-100 rounded-lg placeholder-black text-2xl p-4 border-none block mt-1 "
                      id="password"
                      type="password"
                      name="password"
                      value={formData.password}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="flex justify-center items-center">
                    <button className="btn text-white hover:bg-indigo-900 bg-indigo-800 border-indigo-900">
                      Add New Admin
                    </button>
                  </div>
                </form>

                <aside className="">
                  <div className="bg-gray-100 p-8 rounded">
                    <h2 className="font-bold text-2xl">Instructions</h2>
                    <ul className="list-disc mt-4 list-inside">
                      <li>
                        All Admin must provide a valid email address and
                        password to create an account.
                      </li>
                      <li>
                        Admins must not use offensive, vulgar, or otherwise
                        inappropriate language in their username or profile
                        information
                      </li>
                      <li>
                        Admins must not create multiple accounts for the same
                        person.
                      </li>
                    </ul>
                  </div>
                </aside>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AdminUsers;
