import React, { useState } from "react";
import { Grid, Button, Box, TextField } from "@mui/material";
import AddressCard from "../../components/AddressCard/AddressCard";

import { TbTruckDelivery } from "react-icons/tb";
import { useAppDispatch } from "../../redux/hooks/Hooks";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { setDeliveryAddress } from "../../redux/features/OrderSummarySlice";
import { setAddress } from "../../redux/features/AddressSlice";

interface IFormInput {
  firstName: string;
  lastName: string;
  addressLine: string;
  phoneNumber: string;
  city: string;
  province: string;
  postalCode: string;
  country: string;
}

const initialState = {
  firstName: "",
  lastName: "",
  addressLine: "",
  phoneNumber: "",
  city: "",
  province: "",
  postalCode: "",
  country: "",
};

const DeliveryAddress: React.FC<DeliveryAddressProps> = ({ onSubmit }) => {
  const dispatch = useAppDispatch();

  const [formData, setFormData] = useState<IFormInput>(initialState);
  const {
    firstName,
    lastName,
    addressLine,
    phoneNumber,
    city,
    province,
    postalCode,
    country,
  } = formData;

  //REDUX ENDS
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (
      formData.firstName === "" ||
      formData.lastName === "" ||
      formData.addressLine === "" ||
      formData.city === "" ||
      formData.phoneNumber === "" ||
      formData.province === "" ||
      formData.postalCode === "" ||
      formData.country === ""
    ) {
      toast.success("Please enter all the required fields");
    } else {
      dispatch(setAddress(formData));
      onSubmit();
    }
  };

  return (
    <>
      <ToastContainer />
      <div className="py-14 px-4 md:px-6 2xl:px-20 2xl:container 2xl:mx-auto">
        <div className="flex justify-start item-start space-y-2 flex-col ">
          <h1 className="text-3xl lg:text-4xl font-semibold leading-7 lg:leading-9  text-gray-800">
            Delivery Address
          </h1>
        </div>
        <div className="mt-10 flex flex-col xl:flex-row jusitfy-center items-stretch  w-full xl:space-x-8 space-y-4 md:space-y-6 xl:space-y-0">
          <div className="bg-white  shadow-md w-full xl:w-96 flex justify-between items-center md:items-start px-4 py-6 md:p-6 xl:p-8 flex-col ">
            <h3 className="text-xl font-semibold leading-5 text-gray-800">
              Your Current Address
            </h3>
            <AddressCard />
          </div>
          <div className="flex flex-col justify-start items-start w-full space-y-4 md:space-y-6 xl:space-y-8">
            <div className="bg-white flex flex-col justify-start items-start shadow-md rounded-md px-4 py-4 md:py-6 md:p-6 xl:p-8 w-full">
              <p className="text-lg md:text-xl font-semibold leading-6 xl:leading-5 text-gray-800">
                Your Address
              </p>
              <div className="mt-4 md:mt-6 flex  flex-col md:flex-row justify-start items-start md:items-center md:space-x-6 xl:space-x-8 w-full "></div>
              <div className="mt-6 md:mt-0 flex justify-start flex-col md:flex-row  items-start md:items-center space-y-4  md:space-x-6 xl:space-x-8 w-full ">
                <Grid item xs={12} lg={7}>
                  <Box>
                    <form onSubmit={handleSubmit}>
                      <Grid container spacing={3}>
                        <Grid item xs={12} sm={6}>
                          <TextField
                            required
                            id="firstName"
                            name="firstName"
                            label="First Name"
                            value={formData.firstName}
                            onChange={handleInputChange}
                            fullWidth
                          />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                          <TextField
                            required
                            id="lastName"
                            name="lastName"
                            autoCapitalize="true"
                            label="Last Name"
                            value={formData.lastName}
                            onChange={handleInputChange}
                            fullWidth
                          />
                        </Grid>

                        <Grid item xs={12}>
                          <TextField
                            required
                            id="addressLine"
                            name="addressLine"
                            label="Address"
                            value={formData.addressLine}
                            onChange={handleInputChange}
                            fullWidth
                            multiline
                            rows={4}
                          />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                          <TextField
                            required
                            id="city"
                            name="city"
                            label="City"
                            value={formData.city}
                            onChange={handleInputChange}
                            fullWidth
                          />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                          <TextField
                            required
                            id="province"
                            name="province"
                            value={formData.province}
                            onChange={handleInputChange}
                            label="State / Province / Region"
                            fullWidth
                          />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                          <TextField
                            required
                            id="postalCode"
                            name="postalCode"
                            value={formData.postalCode}
                            onChange={handleInputChange}
                            label="Postal / Zipcode"
                            fullWidth
                            autoComplete="shipping postal-code"
                          />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                          <TextField
                            required
                            id="country"
                            name="country"
                            value={formData.country}
                            onChange={handleInputChange}
                            label="Country"
                            fullWidth
                          />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                          <TextField
                            required
                            id="phoneNumber"
                            name="phoneNumber"
                            value={formData.phoneNumber}
                            onChange={handleInputChange}
                            label="Contact Number"
                            fullWidth
                          />
                        </Grid>
                        <Grid item xs={12}>
                          <button
                            type="submit"
                            className="btn group inline-flex w-full items-center 
                    border-indigo-900
                    justify-center rounded-md bg-indigo-900 px-6 py-4 text-lg font-semibold text-white transition-all duration-200 ease-in-out focus:shadow hover:bg-indigo-800"
                          >
                            Deliver Here
                            <TbTruckDelivery className="group-hover:ml-8 ml-4 h-6 w-6 transition-all" />
                          </button>
                        </Grid>
                      </Grid>
                    </form>
                  </Box>
                </Grid>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DeliveryAddress;
