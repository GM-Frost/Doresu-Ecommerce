import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useRegisterUserMutation } from "../../redux/service/AuthApi";

interface IFormInput {
  firstname: string;
  lastname: string;
  email: string;
  password: string;
}

const initialState = {
  firstname: "",
  lastname: "",
  email: "",
  password: "",
};

const Register = () => {
  const inputStyle =
    "w-full bg-white-200 text-gray-700 border-b-2 border-indigo-800 py-[20px] px-[10px] leading-tight focus:outline-none focus:bg-white focus:border-primary";

  //----------------REDUX PART STARTS-------------
  const [
    registerUser,
    {
      data: registerResponse,
      isSuccess: registrationSuccess,
      isError: registrationError,
    },
  ] = useRegisterUserMutation();

  //--------------REDUX PART ENDS---------------

  //FORM VALUES
  const [formValue, setFormValue] = useState(initialState);
  const { firstname, lastname, email, password } = formValue;

  const handleFormChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormValue((prevState) => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (
      formValue.firstname === "" ||
      formValue.lastname === "" ||
      formValue.email === "" ||
      formValue.password == ""
    ) {
      toast.error("Please enter all the required fields");
    } else {
      try {
        await registerUser(formValue);
      } catch (error) {
        toast.error("An error occurred. Please try again later.");
      }
    }
  };

  //---------USEEFFECT HOOKS-------------

  useEffect(() => {
    if (registerResponse && registrationSuccess) {
      toast.success("New Registration Success!");
    }
    if (registrationError) {
      toast.error("This Email already Exists!");
    }
  }, [registrationSuccess, registrationError]);

  return (
    <>
      <ToastContainer />
      <form onSubmit={handleSubmit}>
        <div
          className="h-[100vh] flex items-center justify-center"
          style={{
            backgroundImage:
              "url('https://img.freepik.com/free-photo/colorful-shopping-bags-white-surface_23-2147889071.jpg?w=1800&t=st=1693847046~exp=1693847646~hmac=f8f83674fc1adf9b5a98459147863cfd0a9d2f2f38daa36fe54bc9f927898b93')",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
          }}
        >
          <div className="container my-auto mx-auto">
            <div
              className="flex flex-col lg:flex-row-reverse
        w-10/12 lg:w-8/12  bg-white rounded-xl mx-auto shadow-lg overflow-hidden"
            >
              <div
                className="
          bg-[url('https://img.freepik.com/free-vector/costumers-using-digital-gadgets-online-shopping-sales-professional-drones-delivering-parcels-from-internet-stores-female-users-flat-vector-illustration-delivery-ecommerce-concept_74855-22426.jpg?w=1380&t=st=1693847309~exp=1693847909~hmac=606420af5ff546170e8dab60fe6f7b05b6cc8d49cc2b46766ef7bb3b584f09ef')]
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
                <h2 className="text-3xl mb-4 text-neutral">Sign-Up</h2>
                <p className="mb-4 text-gray-500">Register to Order</p>

                <div className="flex justify-between gap-5">
                  <div className="w-[50%]">
                    <input
                      type="text"
                      placeholder="John"
                      name="firstname"
                      className={inputStyle}
                      onChange={handleFormChange}
                    />
                  </div>
                  <div className="w-[50%]">
                    <input
                      type="text"
                      placeholder="Doe"
                      name="lastname"
                      className={inputStyle}
                      onChange={handleFormChange}
                    />
                  </div>
                </div>
                <div className="mt-5">
                  <input
                    type="email"
                    placeholder="Email"
                    name="email"
                    className={inputStyle}
                    onChange={handleFormChange}
                  />
                </div>

                <div className="mt-5">
                  <input
                    type="password"
                    placeholder="Password"
                    name="password"
                    className={inputStyle}
                    onChange={handleFormChange}
                  />
                </div>

                <div className="mt-8">
                  <button
                    type="submit"
                    className="btn bg-indigo-800 w-full border-indigo-800 hover:bg-indigo-900 hover:border-indigo-950 text-white"
                  >
                    Register
                  </button>
                </div>
                <div className="mt-8 flex gap-5 text-center items-center">
                  <p className="text-gray-600">Have an account?</p>
                  <Link to="/login" className="text-primary">
                    Login Now
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

export default Register;
