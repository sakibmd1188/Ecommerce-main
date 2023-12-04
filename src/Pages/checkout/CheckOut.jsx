// import React, { useState } from "react";
// import {
//   Button,
//   Stepper,
//   Step,
//   StepLabel,
//   StepContent,
//   Card,
//   CardContent,
//   CardActions,
//   Typography,
// } from "@mui/material";
// import "./Checkout.css"; // Make sure you have a CSS file for additional styling
// import EditIcon from "@mui/icons-material/Edit";
// import PriceCard from "../../components/Helper/PriceCard";
// import { steps } from "./CheckOutData";

// const CheckOut = () => {
//   const [activeStep, setActiveStep] = useState(0);
//   const handleNext = () => {
//     setActiveStep((prevStep) => prevStep + 1);
//   };

//   const handleBack = (index) => {
//     setActiveStep(index);
//   };
//   const handleSubmit = (e, index) => {
//     e.preventDefault();
//     // Your form submission logic here
//     console.log(`Form submitted for step ${index}`);
//   };
//   return (
//     <div className=" cart_main container">
//       <div>
//         <Stepper
//           activeStep={activeStep}
//           orientation="vertical"
//           sx={{ width: "500px", border: "none" }}
//         >
//           {steps.map((step, index) => (
//             <Step key={step.label}>
//               <Card>
//                 <StepLabel>
//                   <CardContent style={{ margin: 0 }}>
//                     <Typography
//                       variant="h4"
//                       display="flex"
//                       justifyContent="space-between"
//                     >
//                       {index + 1} {step.label}
//                       <span
//                         onClick={() => handleBack(index)}
//                         className="edit_checkout"
//                       >
//                         <EditIcon />
//                         edit
//                       </span>
//                     </Typography>
//                   </CardContent>

//                   <StepContent sx={{ borderLeft: "none" }}>
//                     <Typography variant="h6">
//                       {index === 0 && <div>Order as Guest | Sign in</div>}
//                     </Typography>
//                     <form onSubmit={(e) => handleSubmit(e, index)}>
//                       {step.content}

//                       <CardActions>
//                         <Button
//                           type="submit"
//                           variant="contained"
//                           color="primary"
//                           onClick={handleNext}
//                         >
//                           continue
//                           {/* {activeStep === steps.length - 1
//                             ? "Finish"
//                             : "Continue"} */}
//                         </Button>
//                       </CardActions>
//                     </form>
//                   </StepContent>
//                 </StepLabel>
//               </Card>
//             </Step>
//           ))}
//         </Stepper>
//       </div>

//       <PriceCard />
//     </div>
//   );
// };

// export default CheckOut;
