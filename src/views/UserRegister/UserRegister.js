import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
// core components
import Button from "components/CustomButtons/Button.js";
import Card from "components/Card/Card.js";
import CardFooter from "components/Card/CardFooter.js";
import CardHeader from "components/Card/CardHeader.js";
import UserForm from "../../components/UserForm/UserForm";
import { useDispatch } from "react-redux";
import { hist } from "index";
import { getEmptyForm } from "services/utils";
import { userSignUp } from "actions/appActions";
import { styles } from "../../services/utils";
import Snackbar from "components/Snackbar/Snackbar";

const useStyles = makeStyles(styles);

const UserProfile = () => {
  const [form, setForm] = useState(getEmptyForm());

  const classes = useStyles();
  const dispatch = useDispatch();
  const [snackbarState, setSnackBarState] = useState({
    open: false,
    message: "Please add username and password to sign up",
    place: "top",
  });

  const register = async () => {
    if (!form.username || !form.password) {
      setSnackBarState({ ...snackbarState, open: true });
      return setTimeout(() => {
        setSnackBarState({ ...snackbarState, open: false });
      }, 2000);
    }
    await dispatch(userSignUp(form));
    hist.push("/admin/dashboard");
  };

  return (
    <Card>
      <CardHeader color="primary">
        <h4 className={classes.cardTitleWhite}>Register</h4>
      </CardHeader>
      <UserForm registerPage={true} form={form} setForm={setForm} />
      <CardFooter>
        <Button onClick={register} color="primary">
          Register
        </Button>
      </CardFooter>
      <Snackbar props={snackbarState} message="" />
    </Card>
  );
};
export default UserProfile;
