import classes from "./ProfileInfo.module.css";
import editBtn from "../../../../img/edit-btn.svg";
import ProfileData from "./ProfileData/ProfileData";
import Popup from "../../../Popup/Popup";
import { useState } from "react";

const ProfileInfo = (props) => {
  const [popup, setPopup] = useState({
    popup: false,
  });
  return (
    <div className={classes.profile__info}>
      <ProfileData profileData={props.state.profileData} />
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
      />
    </div>
  );
};

export default ProfileInfo;
