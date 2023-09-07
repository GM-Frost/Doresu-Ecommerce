import * as React from "react";
import Box from "@mui/material/Box";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { useLocation, useNavigation } from "react-router-dom";
import DeliveryAddress from "./DeliveryAddress";
import OrderSummary from "./OrderSummary";

const steps = ["Login", "Delivery Address", "Order Summary", "Payment"];

const Checkout = () => {
  const location = useLocation();
  const navigation = useNavigation();

  // Get the current step from localStorage or default to step 0
  const initialStep = parseInt(localStorage.getItem("activeStep"), 10) || 0;

  const [activeStep, setActiveStep] = React.useState(initialStep);

  const handleNext = () => {
    const nextStep = activeStep + 1;
    setActiveStep(nextStep);
    updateStepUrl(nextStep);
  };

  const handleBack = () => {
    const prevStep = activeStep - 1;
    setActiveStep(prevStep);
    updateStepUrl(prevStep);
  };

  // Function to update the step in localStorage
  const updateStepUrl = (step) => {
    localStorage.setItem("activeStep", step.toString());
    const searchParams = new URLSearchParams(location.search);
    searchParams.set("step", step);
    navigation(`?${searchParams.toString()}`);
  };

  return (
    <>
      <div className="p-10 lg:px-20">
        <Box
          sx={{
            width: "100%",
          }}
        >
          <Stepper activeStep={activeStep}>
            {steps.map((label, index) => {
              const stepProps: { completed?: boolean } = {};
              const labelProps: {} = {};

              return (
                <Step key={label} {...stepProps}>
                  <StepLabel {...labelProps}>{label}</StepLabel>
                </Step>
              );
            })}
          </Stepper>
          {activeStep === steps.length ? (
            <React.Fragment>
              <Typography sx={{ mt: 2, mb: 1 }}>
                All steps completed - you&apos;re finished
              </Typography>
            </React.Fragment>
          ) : (
            <React.Fragment>
              <Box sx={{ display: "flex", flexDirection: "row", pt: 2 }}>
                <Button
                  color="inherit"
                  disabled={activeStep === 0}
                  onClick={handleBack}
                  sx={{ mr: 1 }}
                >
                  Back
                </Button>
                <Box sx={{ flex: "1 1 auto" }} />

                <Button onClick={handleNext}>
                  {activeStep === steps.length - 1 ? "Finish" : "Next"}
                </Button>
              </Box>
              <div>
                {activeStep === 1 ? (
                  <DeliveryAddress onSubmit={handleNext} />
                ) : (
                  <OrderSummary />
                )}
              </div>
            </React.Fragment>
          )}
        </Box>
      </div>
    </>
  );
};

export default Checkout;
