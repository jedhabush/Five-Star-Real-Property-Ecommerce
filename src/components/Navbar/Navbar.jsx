import { useNavigate, useLocation } from "react-router-dom";

import { ReactComponent as OfferIcon } from "../../assets/svg/localOfferIcon.svg";
import { ReactComponent as ExploreIcon } from "../../assets/svg/exploreIcon.svg";
import { ReactComponent as PersonOutlineIcon } from "../../assets/svg/personOutlineIcon.svg";
const Navbar = () => {
  //Init the hooks to navigate
  const navigate = useNavigate();
  const location = useLocation();

  // function to change the color of icon and text when path is matched
  const pathRouteMatching = (route) => {
    if (route === location.pathname) {
      return true;
    }
  };

  return (
    <footer className="navbar">
      <nav className="navbarNav">
        <ul className="navbarListItems">
          <li className="navbarListItem" onClick={() => navigate("/")}>
            <ExploreIcon
              fill={pathRouteMatching("/") ? "#444" : "#8f8f8f"}
              width="36px"
              height="36px"
            />
            <p
              className={
                pathRouteMatching("/")
                  ? "navbarListItemNameActive"
                  : "navbarListItemName"
              }
            >
              Explore
            </p>
          </li>
          <li className="navbarListItem" onClick={() => navigate("/offers")}>
            <OfferIcon
              fill={pathRouteMatching("/offers") ? "green" : "#8f8f8f"}
              width="36px"
              height="36px"
            />
            <p
              className={
                pathRouteMatching("/offers")
                  ? "navbarListItemNameActive"
                  : "navbarListItemName"
              }
            >
              Offers
            </p>
          </li>
          <li className="navbarListItem" onClick={() => navigate("/profile")}>
            <PersonOutlineIcon
              fill={pathRouteMatching("/profile") ? "#444" : "#8f8f8f"}
              width="36px"
              height="36px"
            />
            <p
              className={
                pathRouteMatching("/profile")
                  ? "navbarListItemNameActive"
                  : "navbarListItemName"
              }
            >
              Profile
            </p>
          </li>
        </ul>
      </nav>
    </footer>
  );
};

export default Navbar;
