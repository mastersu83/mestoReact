import classes from "./PlacesItem.module.css";
import likeIcon from "../../../../img/like.svg";
import removeIcon from "../../../../img/Trash.svg";
import PopupImg from "../../../Popup/PopupImg";
import { useState } from "react";
import state from "../../../../Redux/state";

const PlacesItem = (props) => {
  const [popup, setPopup] = useState({
    popup: false,
  });
  return (
    <div className={classes.places__item}>
      <img
        className={classes.places__itemImg}
        src={props.link}
        alt="place"
        onClick={() =>
          setPopup({
            ...popup,
            popup: true,
          })
        }
      />
      <div className={classes.places__data}>
        <span className={classes.places__itemTitle}>{props.place}</span>
        <img src={likeIcon} alt="" className={classes.places__itemLike} />
      </div>
      <img src={removeIcon} alt="" className={classes.places__removeButton} />
      <PopupImg
        src={props.link}
        place={props.place}
        state={state}
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

export default PlacesItem;
