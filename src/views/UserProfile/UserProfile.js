import React, { useState, useEffect } from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// core components
import GridItem from "components/Grid/GridItem.js";
import GridContainer from "components/Grid/GridContainer.js";
import Button from "components/CustomButtons/Button.js";
import Card from "components/Card/Card.js";
import CardFooter from "components/Card/CardFooter.js";
import CardHeader from "components/Card/CardHeader.js";
import UserForm from "../../components/UserForm/UserForm";
import { useSelector, useDispatch } from "react-redux";
import { updateUser } from "actions/appActions";
import Snackbar from "components/Snackbar/Snackbar";
import { styles, getEmptyForm } from "../../services/utils";

const useStyles = makeStyles(styles);

export default function UserProfile() {
  const { user } = useSelector((state) => state);
  const [snackbarState, setSnackBarState] = useState({
    open: false,
    message: "User has been succesfully updated",
    place: "top",
  });
  const dispatch = useDispatch();
  const [form, setForm] = useState(user);
  const classes = useStyles();

  useEffect(() => {
    user.username ? setForm(user) : setForm(getEmptyForm());
  }, [user]);

  const updateProfile = async () => {
    if (!form.username) return;
    await dispatch(updateUser(form));
    setSnackBarState({ ...snackbarState, open: true });
    setTimeout(() => {
      setSnackBarState({ ...snackbarState, open: false });
    }, 2000);
  };

  return (
    <div>
      <GridContainer>
        <GridItem xs={12} sm={12} md={12}>
          <Card>
            <CardHeader color="primary">
              <h4 className={classes.cardTitleWhite}>Edit Profile</h4>
              <p className={classes.cardCategoryWhite}>Complete your profile</p>
            </CardHeader>
            <UserForm user={user} form={form} setForm={setForm} />
            <CardFooter>
              <Button onClick={updateProfile} color="primary">
                Update Profile
              </Button>
            </CardFooter>
          </Card>
        </GridItem>
      </GridContainer>
      <Snackbar props={snackbarState} message="" />
    </div>
  );
}
