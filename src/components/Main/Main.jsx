import Profile from "./Profile/Profile";
import Places from "./Places/Places";
import Popup from "../Popup/Popup";
// import { Route } from "react-router-dom";

const Main = (props) => {
  return (
    <main className="main">
      <div className="container">
        <Profile state={props.state} />
        <Places state={props.state} />
        {/*<Route path={"/popup"} render={() => <Popup />}></Route>*/}
        <Popup state={props.state.popupEvent.popup} />
      </div>
    </main>
  );
};

export default Main;
