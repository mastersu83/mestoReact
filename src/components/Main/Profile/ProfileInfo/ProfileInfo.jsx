import classes from "./ProfileInfo.module.css";
import editBtn from "../../../../img/edit-btn.svg";
import ProfileData from "./ProfileData/ProfileData";
import React, { useState } from "react";
import Popup from "../../../Popup/Popup";

const ProfileInfo = (props) => {
  const [popup, setPopup] = useState({
    popup: false,
  });
  return (
    <div className={classes.profile__info}>
      <ProfileData state={props.state} />
      <div className={classes.profile__editLink}>
        <button
          className={`${classes.popupLinkEdit} ${classes.popupLink}`}
          onClick={() =>
            setPopup({
              ...popup,
              popup: true,
            })
          }
        >
          <img className={classes.profile__editButton} src={editBtn} alt="" />
        </button>
      </div>
      <Popup
        isOpened={popup.popup}
        onPopupClose={() =>
          setPopup({
            ...popup,
            popup: false,
          })
        }
        updateNewName={props.updateNewName}
        updateNewPost={props.updateNewPost}
        state={props.state}
        addPost={props.addPost}
        addPlace={props.addPlace}
      />
    </div>
  );
};

export default ProfileInfo;
