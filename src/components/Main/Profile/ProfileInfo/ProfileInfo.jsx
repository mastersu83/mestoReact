import classes from "./ProfileInfo.module.css";
import editBtn from "../../../../img/edit-btn.svg";
import ProfileData from "./ProfileData/ProfileData";

const ProfileInfo = (props) => {
  return (
    <div className={classes.profile__info}>
      <ProfileData state={props.state} />
      <div className={classes.profile__editLink}>
        <button className={`${classes.popupLinkEdit} ${classes.popupLink}`}>
          <img className={classes.profile__editButton} src={editBtn} alt="" />
        </button>
      </div>
    </div>
  );
};

export default ProfileInfo;
