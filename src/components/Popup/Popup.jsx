import "./Popup.css";
import closeIcon from "../../img/close-icon.svg";
import React from "react";

const Popup = (props) => {
  let newName = React.createRef();
  let newPost = React.createRef();

  let addPost = () => {
    let newNameText = newName.current.value;
    let newPostText = newPost.current.value;
    props.addPost(newNameText, newPostText);
  };

  let onProfileChange = () => {
    let newNameTextChange = newName.current.value;
    let newPostTextChange = newPost.current.value;
    props.updateProfile(newNameTextChange, newPostTextChange);
  };

  return (
    <div className={`popup popupEdit ${props.isOpened ? "open" : " "}`}>
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
              <div className="popup__title">Редактировать профиль</div>
              <input
                id="input-name"
                className="popup__input-nameEdit popup__input"
                form="formEdit"
                type="text"
                placeholder="Введите имя"
                required
                ref={newName}
                onChange={onProfileChange}
                value={props.state.newProfileName}
              />
              <input
                id="input-post"
                className="popup__input-postEdit popup__input"
                form="formEdit"
                type="text"
                placeholder="Расскажите о себе"
                required
                ref={newPost}
                onChange={onProfileChange}
                value={props.state.newProfilePost}
              />
              <button
                id="save"
                className="popup__submit"
                form="formEdit"
                type="submit"
                onClick={addPost}
              >
                Сохранить
              </button>
            </form>
          </div>
        </div>
        <div className="overlay" onClick={props.onPopupClose} />
      </div>
    </div>
  );
};

export default Popup;
