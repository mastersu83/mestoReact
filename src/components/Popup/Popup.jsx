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
    console.log(newNameText, newPostText);
  };

  return (
    <div className="popup__content popup__contentEdit">
      <img
        className="popup__close-img-edit popup__close-img close-popup"
        src={closeIcon}
        alt=""
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
          />
          <input
            id="input-post"
            className="popup__input-postEdit popup__input"
            form="formEdit"
            type="text"
            placeholder="Расскажите о себе"
            required
            ref={newPost}
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
  );
};

export default Popup;
