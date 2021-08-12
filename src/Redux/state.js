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
  newPlaceName: "",
  newPlaceLink: "",
  newProfileName: "",
  newProfilePost: "",
  name: "Жак-Ив Кусто",
  post: "Исследователь океана",
};

window.state = state;

export let addPlace = () => {
  if (state.newPlaceName.length && state.newPlaceLink.length !== 0) {
    let newPlace = {
      name: state.newPlaceName,
      link: state.newPlaceLink,
    };
    state.item.unshift(newPlace);
    rerenderEntireTree(state);
  }
};

export let addPost = () => {
  if (state.newProfileName.length && state.newProfilePost.length !== 0) {
    state.name = state.newProfileName;
    state.post = state.newProfilePost;
    rerenderEntireTree(state);
  } else {
  }
};

export let removeItem = () => {
  state.item.pop();
  rerenderEntireTree(state);
};

export let updateProfile = (newNameTextChange, newPostTextChange) => {
  state.newProfileName = newNameTextChange;
  state.newProfilePost = newPostTextChange;
  rerenderEntireTree(state);
};
export let updatePlaces = (newNameTextChange, newPostTextChange) => {
  state.newPlaceName = newNameTextChange;
  state.newPlaceLink = newPostTextChange;
  rerenderEntireTree(state);
};

export default state;
