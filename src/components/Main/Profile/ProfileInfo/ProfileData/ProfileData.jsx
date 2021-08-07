import classes from "./ProfileData.module.css";

const ProfileData = (props) => {
  return (
    <div className={classes.profile__data}>
      <h2 id="name" className={classes.profile__name}>
        Жак-Ив Кусто
      </h2>
      <span id="post" className={classes.profile__post}>
        Исследователь океана
      </span>
    </div>
  );
};

export default ProfileData;
