import Profile from "./Profile/Profile";
import Places from "./Places/Places";

const Main = (props) => {
  return (
    <main className="main">
      <div className="container">
        <Profile state={props.state} />
        <Places state={props.state} />
      </div>
    </main>
  );
};

export default Main;
