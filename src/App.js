import "./App.css";
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import Footer from "./components/Footer/Footer";
import React from "react";

function App(props) {
  return (
    <div className="root">
      <Header />
      <Main
        state={props.state}
        updateNewName={props.updateNewName}
        updateNewPost={props.updateNewPost}
        addPost={props.addPost}
        addPlace={props.addPlace}
        removeItem={props.removeItem}
      />
      <Footer />
    </div>
  );
}

export default App;
