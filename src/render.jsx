import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import {
  addPlace,
  addPost,
  removeItem,
  updatePlaces,
  updateProfile,
} from "./Redux/state";

export let rerenderEntireTree = (state) => {
  ReactDOM.render(
    <React.StrictMode>
      <BrowserRouter>
        <App
          state={state}
          updateProfile={updateProfile}
          updatePlaces={updatePlaces}
          addPost={addPost}
          addPlace={addPlace}
          removeItem={removeItem}
        />
      </BrowserRouter>
    </React.StrictMode>,
    document.getElementById("root")
  );
};
