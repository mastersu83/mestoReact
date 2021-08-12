import classes from "./Profile.module.css";
import avatar from "../../../img/Avatar.png";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import React from "react";
import AddPopup from "./AddPopup";

const Profile = (props) => {
  return (
    <div className={classes.profile}>
      <div className={classes.profile__wrapper}>
        <img className={classes.profile__avatar} src={avatar} alt="avatar" />
        <ProfileInfo
          state={props.state}
          updateProfile={props.updateProfile}
          addPost={props.addPost}
          addPlace={props.addPlace}
        />
        <AddPopup
          state={props.state}
          updatePlaces={props.updatePlaces}
          addPost={props.addPost}
          addPlace={props.addPlace}
        />
      </div>
    </div>
  );
};

export default Profile;
