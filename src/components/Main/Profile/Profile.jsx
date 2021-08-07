import classes from "./Profile.module.css";
import avatar from "../../../img/Avatar.png";
import addBtn from "../../../img/add-btn.svg";
import ProfileInfo from "./ProfileInfo/ProfileInfo";

const Profile = (props) => {
  return (
    <div className={classes.profile}>
      <div className={classes.profile__wrapper}>
        <img className={classes.profile__avatar} src={avatar} alt="avatar" />
        <ProfileInfo />
        <div className={classes.profile__add}>
          <button className={`${classes.popupLinkAdd} ${classes.popupLink}`}>
            <img className={classes.profile__addButton} src={addBtn} alt="" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Profile;
