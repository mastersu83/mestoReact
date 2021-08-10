import { rerenderEntireTree } from "../render";

let state = {
  item: [
    {
      name: "Архыз",
      link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg",
    },
    {
      name: "Челябинская область",
      link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg",
    },
    {
      name: "Иваново",
      link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg",
    },
    {
      name: "Камчатка",
      link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg",
    },
    {
      name: "Холмогорский район",
      link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg",
    },
    {
      name: "Байкал",
      link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg",
    },
  ],
  name: "Жак-Ив Кусто",
  post: "Исследователь океана",
};

window.state = state;

export let addPlace = (newNameText, newLinkText) => {
  let newPlace = {
    name: newNameText,
    link: newLinkText,
  };
  state.item.unshift(newPlace);
  rerenderEntireTree(state);
};

export let addPost = (newNameText, newPostText) => {
  // let newItem = {
  //   name: newNameText,
  //   link: newPostText,
  // };
  state.name = newNameText;
  state.post = newPostText;
  rerenderEntireTree(state);
};

export let removeItem = () => {
  state.item.pop();
  rerenderEntireTree(state);
};

export let updateNewName = (newText) => {
  state.name = newText;
  rerenderEntireTree(state);
};
export let updateNewPost = (newText) => {
  state.post = newText;
  rerenderEntireTree(state);
};

export default state;
