import React from "react";
import { Grid, Button, Box, TextField } from "@mui/material";
import AddressCard from "../../components/AddressCard/AddressCard";

import { TbTruckDelivery } from "react-icons/tb";
const DeliveryAddress = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
  };
  return (
    <>
      <div className="py-14 px-4 md:px-6 2xl:px-20 2xl:container 2xl:mx-auto">
        <div className="flex justify-start item-start space-y-2 flex-col ">
          <h1 className="text-3xl lg:text-4xl font-semibold leading-7 lg:leading-9  text-gray-800">
            Delivery Address
          </h1>
        </div>
        <div className="mt-10 flex flex-col xl:flex-row jusitfy-center items-stretch  w-full xl:space-x-8 space-y-4 md:space-y-6 xl:space-y-0">
          <div className="bg-white  shadow-md w-full xl:w-96 flex justify-between items-center md:items-start px-4 py-6 md:p-6 xl:p-8 flex-col ">
            <h3 className="text-xl font-semibold leading-5 text-gray-800">
              Your Addresses
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
                            id="firstname"
                            name="firstname"
                            label="First Name"
                            fullWidth
                          />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                          <TextField
                            required
                            id="lastname"
                            name="lastname"
                            label="Last Name"
                            fullWidth
                          />
                        </Grid>
                        <Grid item xs={12}>
                          <TextField
                            required
                            id="address"
                            name="address"
                            label="Address"
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
                            fullWidth
                          />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                          <TextField
                            required
                            id="province"
                            name="province"
                            label="State / Province / Region"
                            fullWidth
                          />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                          <TextField
                            required
                            id="postal"
                            name="postal"
                            label="Postal / Zipcode"
                            fullWidth
                            autoComplete="shipping postal-code"
                          />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                          <TextField
                            required
                            id="phonenumber"
                            name="phonenumber"
                            label="Contact Number"
                            fullWidth
                          />
                        </Grid>
                        <Grid item xs={12}>
                          <button
                            type="button"
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
