import { Step, StepLabel, Stepper } from "@mui/material";

const steps = [
  "Order Placed",
  "Order Confirmed",
  "Shipped",
  "Out for Delivery",
  "Delivered",
];
const OrderTracker = ({ status }) => {
  const activeStep = steps.indexOf(status);
  return (
    <>
      <div className="w-full">
        <Stepper activeStep={activeStep} alternativeLabel>
          {steps.map((label) => (
            <Step>
              <StepLabel
                sx={{
                  color: "#34a4b8",
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
