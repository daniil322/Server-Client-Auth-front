import React, { useState } from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// core components
import GridItem from "components/Grid/GridItem.js";
import GridContainer from "components/Grid/GridContainer.js";
import Button from "components/CustomButtons/Button.js";
import Card from "components/Card/Card.js";
import CardAvatar from "components/Card/CardAvatar.js";
import CardBody from "components/Card/CardBody.js";
import CardFooter from "components/Card/CardFooter.js";
import CardHeader from "components/Card/CardHeader.js";
import UserForm from "../../components/UserForm/UserForm";

import avatar from "assets/img/faces/marc.jpg";
import { useSelector, useDispatch } from "react-redux";
import { updateUser } from "actions/appActions";
import Snackbar from "components/Snackbar/Snackbar";
import { styles } from "../../services/utils";
import { hist } from "index";

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

  const updateProfile = async () => {
    if (!form.username) return;
    await dispatch(updateUser(form));
    setSnackBarState({ ...snackbarState, open: true });
    setTimeout(() => {
      setSnackBarState({ ...snackbarState, open: false });
    }, 2000);
  };

  if (!user.username) {
    hist.push("/");
    return <div></div>;
  }

  return (
    <div>
      <GridContainer>
        <GridItem xs={12} sm={12} md={8}>
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
        <GridItem xs={12} sm={12} md={4}>
          <Card profile>
            <CardAvatar profile>
              <a href="#pablo" onClick={(e) => e.preventDefault()}>
                <img src={avatar} alt="..." />
              </a>
            </CardAvatar>
            <CardBody profile>
              <h6 className={classes.cardCategory}>CEO / CO-FOUNDER</h6>
              <h4 className={classes.cardTitle}>Alec Thompson</h4>
              <p className={classes.description}>
                Don{"'"}t be scared of the truth because we need to restart the
                human foundation in truth And I love you like Kanye loves Kanye
                I love Rick Owens’ bed design but the back is...
              </p>
              <Button color="primary" round>
                Follow
              </Button>
            </CardBody>
          </Card>
        </GridItem>
      </GridContainer>
      <Snackbar props={snackbarState} message="" />
    </div>
  );
}
