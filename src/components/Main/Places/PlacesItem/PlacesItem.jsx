import classes from "./PlacesItem.module.css";
import likeIcon from "../../../../img/like.svg";
import removeIcon from "../../../../img/Trash.svg";

const PlacesItem = (props) => {
  return (
    <div className={classes.places__item}>
      <img className={classes.places__itemImg} src={props.link} alt="place" />
      <div className={classes.places__data}>
        <span className={classes.places__itemTitle}>{props.place}</span>
        <img src={likeIcon} alt="" className={classes.places__itemLike} />
      </div>
      <img
        onClick={props.removeItem}
        src={removeIcon}
        alt=""
        className={classes.places__removeButton}
      />
    </div>
  );
};

export default PlacesItem;
