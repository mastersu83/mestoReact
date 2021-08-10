import classes from "./Profile.module.css";
import addBtn from "../../../img/add-btn.svg";
import PopupAdd from "../../Popup/PopupAdd";
import React, { useState } from "react";

const AddPopup = (props) => {
  const [popup, setPopup] = useState({
    popup: false,
  });
  return (
    <div className={classes.profile__add}>
      <button
        className={`${classes.popupLinkAdd} ${classes.popupLink}`}
        onClick={() =>
          setPopup({
            ...popup,
            popup: true,
          })
        }
      >
        <img className={classes.profile__addButton} src={addBtn} alt="" />
      </button>
      <PopupAdd
        isOpened={popup.popup}
        onPopupClose={() =>
          setPopup({
            ...popup,
            popup: false,
          })
        }
        state={props.state}
        updateNewName={props.updateNewName}
        updateNewPost={props.updateNewPost}
        addPost={props.addPost}
        addPlace={props.addPlace}
      />
    </div>
  );
};

export default AddPopup;
