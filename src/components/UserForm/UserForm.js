import React from "react";
import CustomInput from "components/CustomInput/CustomInput.js";
import InputLabel from "@material-ui/core/InputLabel";
import GridItem from "components/Grid/GridItem.js";
import GridContainer from "components/Grid/GridContainer.js";
import CardBody from "components/Card/CardBody.js";

export default function UserForm({ setForm, form, registerPage }) {
  const handleChange = (ev) => {
    const { name, value } = ev.target;
    setForm({ ...form, [name]: value });
  };

  return (
    <CardBody>
      <GridContainer>
        <GridItem xs={12} sm={12} md={4}>
          <CustomInput
            labelText="Company"
            name="company"
            value={form.company}
            onChange={handleChange}
            formControlProps={{
              fullWidth: true,
            }}
          />
        </GridItem>
        <GridItem xs={12} sm={12} md={4}>
          <CustomInput
            labelText="Username"
            name="username"
            value={form.username}
            onChange={handleChange}
            formControlProps={{
              fullWidth: true,
            }}
          />
        </GridItem>
        {registerPage && (
          <GridItem xs={12} sm={12} md={4}>
            <CustomInput
              labelText="Password"
              value={form.passWord}
              onChange={handleChange}
              name="password"
              formControlProps={{
                fullWidth: true,
              }}
            />
          </GridItem>
        )}
      </GridContainer>
      <GridContainer>
        <GridItem xs={12} sm={12} md={4}>
          <CustomInput
            labelText="Email address"
            name="email"
            value={form.email}
            onChange={handleChange}
            formControlProps={{
              fullWidth: true,
            }}
          />
        </GridItem>
        <GridItem xs={12} sm={12} md={4}>
          <CustomInput
            labelText="First Name"
            name="firstName"
            value={form.firstName}
            onChange={handleChange}
            formControlProps={{
              fullWidth: true,
            }}
          />
        </GridItem>
        <GridItem xs={12} sm={12} md={4}>
          <CustomInput
            labelText="Last Name"
            value={form.lastName}
            onChange={handleChange}
            name="lastName"
            formControlProps={{
              fullWidth: true,
            }}
          />
        </GridItem>
      </GridContainer>
      <GridContainer>
        <GridItem xs={12} sm={12} md={4}>
          <CustomInput
            labelText="City"
            value={form.city}
            onChange={handleChange}
            name="city"
            formControlProps={{
              fullWidth: true,
            }}
          />
        </GridItem>
        <GridItem xs={12} sm={12} md={4}>
          <CustomInput
            labelText="Country"
            value={form.country}
            onChange={handleChange}
            name="country"
            formControlProps={{
              fullWidth: true,
            }}
          />
        </GridItem>
        <GridItem xs={12} sm={12} md={4}>
          <CustomInput
            labelText="Postal Code"
            value={form.postalCode}
            onChange={handleChange}
            name="postalCode"
            formControlProps={{
              fullWidth: true,
            }}
          />
        </GridItem>
      </GridContainer>
      <GridContainer>
        <GridItem xs={12} sm={12} md={12}>
          <InputLabel style={{ color: "#AAAAAA" }}>About me</InputLabel>
          <CustomInput
            value={form.about}
            name="about"
            onChange={handleChange}
            formControlProps={{
              fullWidth: true,
            }}
            inputProps={{
              multiline: true,
              rows: 5,
            }}
          />
        </GridItem>
      </GridContainer>
    </CardBody>
  );
}
