import FiveStarRealProperty from "../../assets/jpg/FiveStarRealProperty.png";
import { Link } from "react-router-dom";

//Logo
const Header = () => {
  return (
    <header className="headerLogo">
      <Link to="/">
        <img src={FiveStarRealProperty} alt="FiveStarRealProperty" />
      </Link>
    </header>
  );
};

export default Header;
