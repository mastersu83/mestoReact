import classes from "./ProfileInfo.module.css";
import editBtn from "../../../../img/edit-btn.svg";
import ProfileData from "./ProfileData/ProfileData";
// import { useState } from "react";

const ProfileInfo = (props) => {
  // debugger;

  const potop = props.state.setPopup;
  console.log(potop);
  const propop = props.state;
  console.log(propop);

  // const [modal, setModal] = useState({
  //   modal: false,
  // });

  return (
    <div className={classes.profile__info}>
      <ProfileData />
      <div className={classes.profile__editLink}>
        <button
          className={`${classes.popupLinkEdit} ${classes.popupLink}`}
          // onClick={() =>
          //   setModal({
          //     ...modal,
          //     modal: true,
          //   })
          // }
          onClick={() => potop((props.state: true))}
        >
          <img className={classes.profile__editButton} src={editBtn} alt="" />
        </button>
      </div>
    </div>
  );
};

export default ProfileInfo;
