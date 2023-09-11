import { BiSolidLogInCircle } from "react-icons/bi";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useAppDispatch } from "../../redux/hooks/Hooks";
import { useEffect, useState } from "react";
import { useLoginAdminMutation } from "../../redux/service/AdminApi";
import {
  clearAdminToken,
  setAdminToken,
} from "../../redux/features/AdminSlice";

interface IFormInput {
  email: string;
  password: string;
}

const initialState = {
  email: "",
  password: "",
};

const AdminLogin = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const [formData, setFormData] = useState(initialState);
  const { email, password } = formData;

  //REDUX STARTS
  const [
    loginAdmin,
    {
      data: loginAdminResponse,
      isSuccess: loginAdminSuccess,
      isError: loginAdminError,
    },
  ] = useLoginAdminMutation();

  //REDUX ENDS
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.email === "" || formData.password === "") {
      toast.error("Please enter all the required fields");
    } else {
      try {
        await loginAdmin({ email, password });
      } catch (error) {
        toast.error("An error occurred. Please try again later.");
      }
    }
  };

  // -----USE EFFECTS
  useEffect(() => {
    if (loginAdminSuccess && loginAdminResponse) {
      toast.success("Login Success");
      dispatch(
        setAdminToken({
          token: loginAdminResponse.token,
          adminDetails: {
            firstname: loginAdminResponse.firstname,
            lastname: loginAdminResponse.lastname,
            email: loginAdminResponse.email,
          },
        })
      );
      navigate("/admin/dashboard");
    }

    if (loginAdminError) {
      toast.error("Invalid Credentials");
      dispatch(clearAdminToken());
    }
  }, [loginAdminSuccess, loginAdminError]);

  return (
    <>
      <ToastContainer />
      <div className="min-h-screen bg-gray-100 text-gray-900 flex justify-center">
        <form
          onSubmit={handleSubmit}
          className="max-w-screen-xl m-0 sm:m-10 bg-white shadow sm:rounded-lg flex justify-center flex-1"
        >
          <div className="lg:w-1/2 xl:w-5/12 p-6 sm:p-12">
            <div className="mt-12 flex flex-col items-center">
              <h1 className="text-2xl xl:text-3xl font-extrabold">
                Welcome Admin
              </h1>
              <div className="w-full flex-1 mt-8">
                <div className="mx-auto max-w-xs">
                  <input
                    className="w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white"
                    type="email"
                    placeholder="Email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                  />
                  <input
                    className="w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white mt-5"
                    type="password"
                    placeholder="Password"
                    name="password"
                    value={formData.password}
                    onChange={handleInputChange}
                  />
                  <button
                    type="submit"
                    className="mt-5 tracking-wide font-semibold bg-indigo-500 text-gray-100 w-full py-4 rounded-lg hover:bg-indigo-700 transition-all duration-300 ease-in-out flex items-center justify-center focus:shadow-outline focus:outline-none"
                  >
                    <BiSolidLogInCircle className="text-2xl" />
                    <span className="ml-3">Log In</span>
                  </button>
                  <p className="mt-6 text-xs text-gray-600 text-center">
                    I agree to abide by Doresu's
                    <a
                      href="#"
                      className="border-b border-gray-500 border-dotted"
                    >
                      Terms of Service
                    </a>
                    and its
                    <a
                      href="#"
                      className="border-b border-gray-500 border-dotted"
                    >
                      Privacy Policy
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="flex-1 bg-indigo-100 text-center hidden lg:flex">
            <div
              className="m-12 xl:m-16 w-full bg-contain bg-center bg-no-repeat"
              style={{
                backgroundImage:
                  'url("https://storage.googleapis.com/devitary-image-host.appspot.com/15848031292911696601-undraw_designer_life_w96d.svg")',
              }}
            ></div>
          </div>
        </form>
      </div>
    </>
  );
};

export default AdminLogin;
