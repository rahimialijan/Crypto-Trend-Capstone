import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import navIcon from "../../assets/images/back.svg";
import "./navigation.css";
import microphoneLogo from "../../assets/images/microphone.svg";
import settinLogo from "../../assets/images/setting.svg";

const Nav = () => {
  const { title } = useSelector((state) => state.crypto);
  const history = "";
  return (
    <nav className="nav">
      <span className="logo">
        <Link to={history}>
          <img src={navIcon} alt="logo" className="back-button" />
        </Link>
      </span>
      <span className="nav-title">{title}</span>
      <span className="nav-icon">
        <img src={microphoneLogo} alt="" />
        <img src={settinLogo} alt="" />
      </span>
    </nav>
  );
};

export default Nav;
