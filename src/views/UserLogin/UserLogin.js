import React, { useState } from "react";
// core components
import CustomInput from "components/CustomInput/CustomInput.js";
import GridItem from "components/Grid/GridItem.js";
import GridContainer from "components/Grid/GridContainer.js";
import CardBody from "components/Card/CardBody.js";
import Card from "components/Card/Card";
import CardFooter from "components/Card/CardFooter";
import Button from "components/CustomButtons/Button.js";
import CardHeader from "components/Card/CardHeader.js";
import { makeStyles } from "@material-ui/core";
import { useDispatch } from "react-redux";
import { setLoggedInUser } from "actions/appActions";
import Snackbar from "components/Snackbar/Snackbar";
import { hist } from "index";
import { styles } from "../../services/utils";

const useStyles = makeStyles(styles);

export default function UserLogin() {
  const [form, setForm] = useState({ username: "", password: "" });
  const [snackbarState, setSnackBarState] = useState({
    open: false,
    message: "Wrong username/password please try again",
    place: "top",
  });
  const classes = useStyles();
  const dispatch = useDispatch();

  const handleChange = (ev) => {
    const { name, value } = ev.target;
    setForm({ ...form, [name]: value });
  };

  const login = async () => {
    if (!form.username || !form.password) return;
    const ds = await dispatch(setLoggedInUser(form));
    if (!ds) {
      setSnackBarState({ ...snackbarState, open: true });
      return setTimeout(() => {
        setSnackBarState({ ...snackbarState, open: false });
      }, 2000);
    } else {
      hist.push("/admin/dashboard");
    }
  };

  return (
    <Card>
      <CardHeader color="primary">
        <h4 className={classes.cardTitleWhite}>Login</h4>
      </CardHeader>
      <CardBody>
        <GridContainer>
          <GridItem xs={5} sm={10} md={7}>
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
        <Button onClick={login} color="primary">
          Login
        </Button>
      </CardFooter>
      <Snackbar props={snackbarState} message="" />
    </Card>
  );
}
