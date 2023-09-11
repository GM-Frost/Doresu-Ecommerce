import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useLoginUserMutation } from "../../redux/service/AuthApi";
import { useAppDispatch } from "../../redux/hooks/Hooks";
import { setToken } from "../../redux/features/AuthSlice";

interface IFormInput {
  email: string;
  password: string;
}

const initialState = {
  email: "",
  password: "",
};

const Login = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const inputStyle =
    "w-full bg-white-200 text-gray-700 border-b-2 border-primary py-[20px] px-[10px] leading-tight focus:outline-none focus:bg-white focus:border-secondary";

  const [formData, setFormData] = useState(initialState);
  const { email, password } = formData;

  //REDUX STARTS
  const [
    loginUser,
    { data: loginResponse, isSuccess: loginSuccess, isError: loginError },
  ] = useLoginUserMutation();

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
      await loginUser({ email, password });
    }
  };

  // -----USE EFFECTS
  useEffect(() => {
    if (loginSuccess && loginResponse) {
      toast.success("Login Success");
      dispatch(
        setToken({
          token: loginResponse.token,
          userDetails: {
            firstname: loginResponse.firstname,
            lastname: loginResponse.lastname,
            email: loginResponse.email,
          },
        })
      );
      navigate("/");
    }
    if (loginError) {
      toast.error("Invalid Credentials");
      return;
    }
  }, [loginSuccess, loginError]);

  return (
    <>
      <ToastContainer />
      <form onSubmit={handleSubmit}>
        <div
          className="h-[100vh] flex items-center justify-center"
          style={{
            backgroundImage:
              "url('https://img.freepik.com/free-photo/craft-shopping-bags-with-sale-inscriptions_23-2147957083.jpg?w=996&t=st=1693844455~exp=1693845055~hmac=28268b87e5ae790e8cde4851b6b4d0c862dab9035203c81959e3125ddb7a4777')",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
          }}
        >
          <div className="container my-auto mx-auto">
            <div
              className="flex flex-col lg:flex-row
          w-10/12 lg:w-8/12  bg-white rounded-xl mx-auto shadow-lg overflow-hidden"
            >
              <div
                className="
            bg-[url('https://media.istockphoto.com/id/1205852959/vector/dressshop.jpg?s=612x612&w=0&k=20&c=NMaPeISc7JmVGmQgDM2ZVoLGuMcBaIfj1-CQAxE-GlY=')]
            w-full lg:w-1/2 flex flex-col p-12 bg-norepeat bg-cover bg-center
            "
              ></div>

              <div className="w-full lg:w-1/2 py-16 px-12">
                <div className="flex justify-center items-center">
                  <img
                    src="https://user-images.githubusercontent.com/110303752/265511884-9b5ba805-6e22-48a6-b4c7-aab8d1232047.png"
                    alt=""
                    className="relative max-w-[200px] items-center mb-2"
                  />
                </div>
                <h2 className="text-3xl mb-4 text-neutral">Login</h2>
                <p className="mb-4 text-gray-500">Sign in to your account</p>

                <div className="mt-5">
                  <input
                    type="email"
                    placeholder="Email"
                    className={inputStyle}
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                  />
                </div>

                <div className="mt-5">
                  <input
                    type="password"
                    placeholder="Password"
                    className={inputStyle}
                    name="password"
                    value={formData.password}
                    onChange={handleInputChange}
                  />
                </div>

                <div className="mt-8">
                  <button
                    type="submit"
                    className="btn btn-primary w-full text-white"
                  >
                    Login
                  </button>
                </div>
                <div className="mt-8 flex gap-5 text-center items-center">
                  <p className="text-gray-600">Don't have an Account?</p>
                  <Link to="/register" className="text-indigo-800">
                    Register Here
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </form>
    </>
  );
};

export default Login;
