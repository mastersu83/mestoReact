import classes from "./Header.module.css";
import logo from "../../img/logo.svg";

const Header = (props) => {
  return (
    <header className="header">
      <div className="container">
        <div className={classes.header__wrapper}>
          <img
            className={classes.header__logo}
            src={logo}
            alt="logo"
            onClick={props.isOpened}
          />
        </div>
      </div>
    </header>
  );
};

export default Header;
