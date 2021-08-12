import Profile from "./Profile/Profile";
import Places from "./Places/Places";
import React from "react";

const Main = (props) => {
  return (
    <main className="main">
      <div className="container">
        <Profile
          state={props.state}
          updateProfile={props.updateProfile}
          updatePlaces={props.updatePlaces}
          addPost={props.addPost}
          addPlace={props.addPlace}
        />
        <Places state={props.state} removeItem={props.removeItem} />
      </div>
    </main>
  );
};

export default Main;
