import "./Popup.css";
import closeIcon from "../../img/close-icon.svg";

const PopupAdd = (props) => {
  return (
    <div className={`popup popupEdit ${props.isOpened ? "open" : "close"}`}>
      <div className="popup__body">
        <div className="popup__content popup__contentEdit">
          <img
            className="popup__close-img-edit popup__close-img close-popup"
            src={closeIcon}
            alt=""
            onClick={props.onPopupClose}
          />
          <div className="popup__inner">
            <form id="formEdit" className="popup__formEdit">
              <div className="popup__title">Новое место</div>
              <input
                id="input-name"
                className="popup__input-nameEdit popup__input"
                form="formEdit"
                type="text"
                placeholder="Название"
                required
              />
              <input
                id="input-post"
                className="popup__input-postEdit popup__input"
                form="formEdit"
                type="text"
                placeholder="Ссылка на картинку"
                required
              />
              <button
                id="save"
                className="popup__submit"
                form="formEdit"
                type="submit"
              >
                Сохранить
              </button>
            </form>
          </div>
        </div>
        <div className="overlay" onClick={props.onPopupClose}></div>
      </div>
    </div>
  );
};

export default PopupAdd;
