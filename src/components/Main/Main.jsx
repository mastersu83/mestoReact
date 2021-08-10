import Profile from "./Profile/Profile";
import Places from "./Places/Places";
import PopupAdd from "../Popup/PopupAdd";
import React from "react";

const Main = (props) => {
  return (
    <main className="main">
      <div className="container">
        <PopupAdd
          updateNewName={props.updateNewName}
          updateNewPost={props.updateNewPost}
          state={props.state}
          addPost={props.addPost}
          addPlace={props.addPlace}
        />
        <Profile
          state={props.state}
          updateNewName={props.updateNewName}
          updateNewPost={props.updateNewPost}
          addPost={props.addPost}
          addPlace={props.addPlace}
        />
        <Places state={props.state} removeItem={props.removeItem} />
      </div>
    </main>
  );
};

export default Main;
