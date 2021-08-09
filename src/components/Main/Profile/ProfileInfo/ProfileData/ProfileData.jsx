import classes from "./ProfileData.module.css";

const ProfileData = (props) => {
  return (
    <div className={classes.profile__data}>
      <h2 id="name" className={classes.profile__name}>
        {props.profileData.name}
      </h2>
      <span id="post" className={classes.profile__post}>
        {props.profileData.post}
      </span>
    </div>
  );
};

export default ProfileData;
