import "./App.css";
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import Footer from "./components/Footer/Footer";

function App(props) {
  return (
    <div className="root">
      <Header />
      <Main state={props.state} />
      <Footer />
    </div>
  );
}

export default App;
