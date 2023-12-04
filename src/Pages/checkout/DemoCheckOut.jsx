import React, { useState } from "react";
import {
  Button,
  Stepper,
  Step,
  StepLabel,
  StepContent,
  Typography,
  TextField,
  Card,
  CardContent,
  CardActions,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
  FormHelperText,
  Box,
  Checkbox,
  Radio,
} from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import PriceCard from "../../components/Helper/PriceCard";

const FormStepper = () => {
  const [activeStep, setActiveStep] = useState(0);
  const [show, setShow] = useState(false);
  const [show2, setShow2] = useState(false);
  const [show3, setShow3] = useState(false);
  const [show4, setShow4] = useState(false);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    address: "",
    addressComplement: "",
    city: "",
    state: "",
    zipCode: "",
    country: "United States",
    phone: "",
    payment: "",
  });
  const [formErrors, setFormErrors] = useState({
    firstName: "",
    lastName: "",
    email: "",
    address: "",
    city: "",
    state: "",
    zipCode: "",
    phone: "",
  });

  const handleNext = () => {
    if (activeStep === 0) {
      const errors = {};
      if (formData.firstName.trim() === "") {
        errors.firstName = "First name is required";
      }
      if (formData.lastName.trim() === "") {
        errors.lastName = "Last name is required";
      }
      if (!isValidEmail(formData.email)) {
        errors.email = "Invalid email address";
      }
      if (Object.keys(errors).length === 0) {
        setActiveStep((prevStep) => prevStep + 1);
        setShow(true);
      }
      if (Object.keys(errors).length > 0) {
        setShow(false);
      }

      setFormErrors(errors);
    } else if (activeStep === 1) {
      const errors = {};
      if (formData.address.trim() === "") {
        errors.address = "Address is required";
      }
      if (formData.city.trim() === "") {
        errors.city = "City is required";
      }
      if (formData.state.trim() === "") {
        errors.state = "State is required";
      }
      if (formData.zipCode.trim() === "") {
        errors.zipCode = "Zip/Postal Code is required";
      }
      if (formData.phone.trim() === "") {
        errors.phone = "Phone is required";
      }
      if (Object.keys(errors).length === 0) {
        setActiveStep((prevStep) => prevStep + 1);
        setShow2(true);
      }
      if (Object.keys(errors).length > 0) {
        setShow2(false);
      }
      setFormErrors(errors);
    } else if (activeStep === 2) {
      setActiveStep((prevStep) => prevStep + 1);
      setShow3(true);
    }
  };

  const handleBack = (index) => {
    setActiveStep(index);
  };

  const isValidEmail = (email) => {
    const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{3}$/i;
    return emailRegex.test(email);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("yu");
  };
  return (
    <div className="cart_main container">
      <form onSubmit={handleSubmit}>
        <Stepper
          activeStep={activeStep}
          orientation="vertical"
          sx={{ width: "700px", border: "none" }}
        >
          {/* step1 */}
          <Step>
            <Card>
              <Typography
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  margin: "10px",
                }}
              >
                <h4 style={{ display: "flex", alignItems: "center" }}>
                  {show && <h4 style={{ color: "green" }}>✓</h4>}1: PERSONAL
                  INFORMATION
                </h4>
                {show && (
                  <h5 onClick={() => handleBack(0)} className="edit_checkout">
                    <EditIcon />
                    edit
                  </h5>
                )}
              </Typography>

              <StepContent>
                <Typography>First Name</Typography>
                <TextField
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                  variant="outlined"
                  margin="normal"
                  fullWidth
                  required
                  error={!!formErrors.firstName}
                  helperText={formErrors.firstName}
                />
                <Typography>Last Name</Typography>
                <TextField
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                  variant="outlined"
                  margin="normal"
                  fullWidth
                  required
                  error={!!formErrors.lastName}
                  helperText={formErrors.lastName}
                />
                <Typography>Email</Typography>
                <TextField
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  variant="outlined"
                  margin="normal"
                  fullWidth
                  required
                  error={!!formErrors.email}
                  helperText={formErrors.email}
                />
                <CardActions>
                  <Button
                    onClick={handleNext}
                    variant="contained"
                    color="primary"
                  >
                    CONTINUE
                  </Button>
                </CardActions>
              </StepContent>
            </Card>
          </Step>

          {/* step2 */}
          <Step>
            <Card>
              <Typography
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  margin: "10px",
                }}
              >
                <h4 style={{ display: "flex", alignItems: "center" }}>
                  {show2 && <h4 style={{ color: "green" }}>✓</h4>} 2: ADDRESS
                </h4>
                {show2 && (
                  <h5 onClick={() => handleBack(1)} className="edit_checkout">
                    <EditIcon />
                    edit
                  </h5>
                )}
              </Typography>

              <StepContent>
                <Typography>First Name</Typography>
                <TextField
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                  variant="outlined"
                  margin="normal"
                  fullWidth
                  required
                />
                <Typography>Last Name</Typography>
                <TextField
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                  variant="outlined"
                  margin="normal"
                  fullWidth
                  required
                />
                <Typography>Company</Typography>
                <TextField
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  variant="outlined"
                  margin="normal"
                  fullWidth
                  error={!!formErrors.company}
                  helperText={formErrors.company}
                />
                <Typography>Address</Typography>
                <TextField
                  name="address"
                  value={formData.address}
                  onChange={handleChange}
                  variant="outlined"
                  margin="normal"
                  fullWidth
                  required
                  error={!!formErrors.address}
                  helperText={formErrors.address}
                />
                <Typography>Address Complement</Typography>
                <TextField
                  name="addressComplement"
                  value={formData.addressComplement}
                  onChange={handleChange}
                  variant="outlined"
                  margin="normal"
                  fullWidth
                  error={!!formErrors.addressComplement}
                  helperText={formErrors.addressComplement}
                />
                <Typography>City</Typography>
                <TextField
                  name="city"
                  value={formData.city}
                  onChange={handleChange}
                  variant="outlined"
                  margin="normal"
                  fullWidth
                  required
                  error={!!formErrors.city}
                  helperText={formErrors.city}
                />
                <Typography>State</Typography>
                <TextField
                  name="state"
                  value={formData.state}
                  onChange={handleChange}
                  variant="outlined"
                  margin="normal"
                  fullWidth
                  required
                  error={!!formErrors.state}
                  helperText={formErrors.state}
                />
                <Typography>Zip/Postal Code</Typography>
                <TextField
                  name="zipCode"
                  value={formData.zipCode}
                  onChange={handleChange}
                  variant="outlined"
                  margin="normal"
                  fullWidth
                  required
                  error={!!formErrors.zipCode}
                  helperText={formErrors.zipCode}
                />
                <Typography>Country</Typography>
                <FormControl variant="outlined" fullWidth>
                  <Select
                    name="country"
                    value={formData.country}
                    onChange={handleChange}
                    label="Country"
                  >
                    <MenuItem value="United States">United States</MenuItem>
                    <MenuItem value="1">team1</MenuItem>
                    <MenuItem value="2">team2</MenuItem>
                  </Select>
                </FormControl>
                <Typography>Phone</Typography>
                <TextField
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  variant="outlined"
                  margin="normal"
                  fullWidth
                  required
                  error={!!formErrors.phone}
                  helperText={formErrors.phone}
                />
                <CardActions>
                  <Button
                    onClick={handleNext}
                    variant="contained"
                    color="primary"
                  >
                    CONTINUE
                  </Button>
                </CardActions>
              </StepContent>
            </Card>
          </Step>

          {/* step3 */}
          <Step>
            <Card>
              <Typography
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  margin: "10px",
                }}
              >
                <h4 style={{ display: "flex", alignItems: "center" }}>
                  {show2 && <h4 style={{ color: "green" }}>✓</h4>} 3: SHIPPING
                  METHOD
                </h4>
                {show3 && (
                  <h5 onClick={() => handleBack(2)} className="edit_checkout">
                    <EditIcon />
                    edit
                  </h5>
                )}
              </Typography>
              <StepContent>
                <div>
                  <Box
                    display="flex"
                    alignItems="center"
                    justifyContent="space-between"
                  >
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
                      If you would like to add a comment about your order,
                      please write it in the field below.
                    </Typography>
                    <TextField />
                  </Box>
                </div>
                <CardActions>
                  <Button
                    onClick={handleNext}
                    variant="contained"
                    color="primary"
                  >
                    CONTINUE
                  </Button>
                </CardActions>
              </StepContent>
            </Card>
          </Step>
          {/* step4 */}
          <Step>
            <Card>
              <Typography
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  margin: "10px",
                }}
              >
                <h4> 4: PAYMENT</h4>
                {show4 && (
                  <h5 onClick={() => handleBack(3)} className="edit_checkout">
                    <EditIcon />
                    edit
                  </h5>
                )}
              </Typography>
              <StepContent>
                <Typography>
                  <Radio required />
                  Pay by Cash on Delivery
                  <br />
                  <Checkbox required />I agree to the terms of service and will
                  adhere to them unconditionally.
                </Typography>
                <TextField
                  name="payment"
                  value={formData.payment}
                  onChange={handleChange}
                  variant="outlined"
                  margin="normal"
                  fullWidth
                  required
                />
                <CardActions>
                  <button type="submit">Finish</button>
                </CardActions>
              </StepContent>
            </Card>
          </Step>
        </Stepper>
      </form>

      <PriceCard />
    </div>
  );
};

export default FormStepper;
