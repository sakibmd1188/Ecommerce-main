import React from "react";
import {
  Checkbox,
  TextField,
  Button,
  Stepper,
  Step,
  StepLabel,
  StepContent,
  Card,
  CardContent,
  CardActions,
  Typography,
  RadioGroup,
  FormControlLabel,
  Radio,
  Box,
} from "@mui/material";
const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
export const steps = [
  {
    label: "Personal Information",
    content: (
      <div>
        <div>
          <Box display="flex" alignItems="center">
            <Typography variant="subtitle1" width="100px">
              Social Title
            </Typography>
            <RadioGroup
              row
              aria-label="social-title"
              name="social-title"
              defaultValue="mr"
            >
              <FormControlLabel
                value="mr"
                control={<Radio color="primary" />}
                label="Mr"
              />
              <FormControlLabel
                value="mrs"
                control={<Radio color="primary" />}
                label="Mrs"
              />
            </RadioGroup>
          </Box>
        </div>
        <Box display="flex" alignItems="center">
          <Typography variant="subtitle1" sx={{ width: "100px" }}>
            First Name
          </Typography>
          <TextField
            id="first-name"
            variant="outlined"
            // margin="normal"
            required // Add required attribute
          />
        </Box>
        <Box display="flex" alignItems="center">
          <Typography variant="subtitle1" sx={{ width: "100px" }}>
            Last Name
          </Typography>
          <TextField id="last-name" variant="outlined" margin="normal" />
        </Box>
        <Box display="flex" alignItems="center">
          <Typography variant="subtitle1" sx={{ width: "100px" }}>
            Email
          </Typography>
          <TextField
            id="email"
            variant="outlined"
            margin="normal"
            required // Add required attribute
            inputProps={{
              pattern: emailRegex.source, // Set the email regex pattern
            }}
          />
        </Box>
        <Typography>
          Create an account<i>(optional)</i>
          <br />
          And save time on yout next order
        </Typography>
        <Box display="flex" alignItems="center">
          <Typography variant="subtitle1" width="100px">
            Password
          </Typography>
          <TextField
            type="password"
            id="password"
            variant="outlined"
            margin="normal"
          />
        </Box>
        {/* Add more fields here */}
      </div>
    ),
  },

  {
    label: "Address",
    content: (
      <div>
      
        <Box display="flex" alignItems="center">
          <Typography variant="subtitle1" sx={{ width: "100px" }}>
            First Name
          </Typography>
          <TextField id="first-name" variant="outlined" margin="normal" />
        </Box>
        <Box display="flex" alignItems="center">
          <Typography variant="subtitle1" sx={{ width: "100px" }}>
            Last Name
          </Typography>
          <TextField id="firslastt-name" variant="outlined" margin="normal" />
        </Box>
        <Box display="flex" alignItems="center">
          <Typography variant="subtitle1" sx={{ width: "100px" }}>
            Company
          </Typography>
          <TextField id="company" variant="outlined" margin="normal" />
        </Box>
        <Box display="flex" alignItems="center">
          <Typography variant="subtitle1" sx={{ width: "100px" }}>
            Address
          </Typography>
          <TextField id="first-name" variant="outlined" margin="normal" />
        </Box>
        <Box display="flex" alignItems="center">
          <Typography variant="subtitle1" sx={{ width: "100px" }}>
            Address Complement
          </Typography>
          <TextField id="first-name" variant="outlined" margin="normal" />
        </Box>
        <Box display="flex" alignItems="center">
          <Typography variant="subtitle1" sx={{ width: "100px" }}>
            City
          </Typography>
          <TextField id="first-name" variant="outlined" margin="normal" />
        </Box>
        <Box display="flex" alignItems="center">
          <Typography variant="subtitle1" sx={{ width: "100px" }}>
            State
          </Typography>
          <TextField id="first-name" variant="outlined" margin="normal" />
        </Box>
        <Box display="flex" alignItems="center">
          <Typography variant="subtitle1" sx={{ width: "100px" }}>
            Zip/Postal Code
          </Typography>
          <TextField
            id="first-name"
            type="number"
            variant="outlined"
            margin="normal"
          />
        </Box>
        <Box display="flex" alignItems="center">
          <Typography variant="subtitle1" sx={{ width: "100px" }}>
            Country
          </Typography>
          <TextField id="first-name" variant="outlined" margin="normal" />
        </Box>
        <Box display="flex" alignItems="center">
          <Typography variant="subtitle1" sx={{ width: "100px" }}>
            Phone
          </Typography>
          <TextField id="first-name" variant="outlined" margin="normal" />
        </Box>
        <Box display="flex" alignItems="center">
          <Checkbox />
          <Typography>Use This Address For invoice too</Typography>
        </Box>
      </div>
    ),
  },
  {
    label: "Shipping Method",
    content: (
      <div>
        <Box display="flex" alignItems="center" justifyContent="space-between">
          <Radio />
          <img
            src="https://demo.posthemes.com/pos_pataku/layout2/img/s/2.jpg"
            alt=""
          />
          <Typography>My Carrier</Typography>
          <Typography>Dilevery Next day</Typography>
          <Typography>$7.00 tax excl.</Typography>
        </Box>
        <Box>
          <Typography>
            If you would like to add a comment about your order, please write it
            in the field below.
          </Typography>
          <TextField />
        </Box>
      </div>
    ),
  },
  {
    label: "Payment",
    content: (
      <div>
        <Box>
          <div className="flex">
            <Radio />
            <Typography>Pay by Cash on Delivery</Typography>
          </div>
          <Typography marginLeft="40px">
            You pay for the merchandise upon delivery
          </Typography>
          <div className="flex">
            <Checkbox />
            <Typography>
              I agree to the terms of service and will adhere to them
              unconditionally.
            </Typography>
          </div>
          <button className="btn_black">ORDER WITH AN OBLIGATORY TO PAY</button>
        </Box>
      </div>
    ),
  },
];
