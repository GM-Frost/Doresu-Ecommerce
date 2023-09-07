import { Step, StepLabel, Stepper } from "@mui/material";

const steps = [
  "Placed",
  "Order Confirmed",
  "Shipped",
  "Out for Delivery",
  "Delivered",
];

const OrderTracker = ({ activeStep }) => {
  return (
    <>
      <div className="w-full">
        <Stepper activeStep={activeStep} alternativeLabel>
          {steps.map((label) => (
            <Step>
              <StepLabel
                sx={{
                  color: "#fs2dsx",
                  fontSize: "45px",
                }}
              >
                {label}
              </StepLabel>
            </Step>
          ))}
        </Stepper>
      </div>
    </>
  );
};

export default OrderTracker;
