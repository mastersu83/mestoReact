import classes from "./Places.module.css";
import PlacesItem from "./PlacesItem/PlacesItem";

const Places = (props) => {
  let newItem = props.state.item.map((p) => (
    <PlacesItem place={p.name} link={p.link} />
  ));
  return (
    <div className={classes.places}>
      <div className={classes.places__items}>{newItem}</div>
    </div>
  );
};

export default Places;
