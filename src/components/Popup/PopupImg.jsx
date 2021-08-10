import "./Popup.css";
import closeIcon from "../../img/close-icon.svg";

const PopupImg = (props) => {
  return (
    <div
      className={`popup close-popup popupImg ${
        props.isOpened ? "open" : "close"
      }`}
    >
      <div className="popup__body">
        <div className="popupImg__container popup__contentImg">
          <img src={props.src} alt="" className="popupImg__image" />
          <h2 className="popupImg__name"> {props.place}</h2>
          <img
            src={closeIcon}
            alt=""
            className="popup__close-img close-popup"
            onClick={props.onPopupClose}
          />
        </div>
      </div>
      <div className="overlay" onClick={props.onPopupClose} />
    </div>
  );
};

export default PopupImg;
