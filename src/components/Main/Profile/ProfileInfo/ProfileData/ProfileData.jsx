import classes from "./ProfileData.module.css";

const ProfileData = (props) => {
  // debugger;
  return (
    <div className={classes.profile__data}>
      <h2 id="name" className={classes.profile__name}>
        {props.state.name}
      </h2>
      <span id="post" className={classes.profile__post}>
        {props.state.post}
      </span>
    </div>
  );
};

export default ProfileData;
