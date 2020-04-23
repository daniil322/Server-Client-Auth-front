import React, { useState } from "react";
// core components
import CustomInput from "components/CustomInput/CustomInput.js";
import GridItem from "components/Grid/GridItem.js";
import GridContainer from "components/Grid/GridContainer.js";
import CardBody from "components/Card/CardBody.js";
import Card from "components/Card/Card";
import CardFooter from "components/Card/CardFooter";
import Button from "components/CustomButtons/Button.js";

export default function UserLogin() {
  const [form, setForm] = useState({ username: "", password: "" });

  const handleChange = (ev) => {
    const { name, value } = ev.target;
    setForm({ ...form, [name]: value });
  };
  return (
    <Card>
      <CardBody>
        <GridContainer>
          <GridItem xs={2} sm={12} md={6}>
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
          <GridItem xs={12} sm={12} md={6}>
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
        </GridContainer>
      </CardBody>
      <CardFooter>
            <Button color="primary">Update Profile</Button>
          </CardFooter>
    </Card>
  );
}
