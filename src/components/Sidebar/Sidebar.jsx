import './Sidebar.scss';
import close from '../../assets/images/shared/icon-close.svg';
import { Link } from 'react-router-dom';
import * as ROUTES from '../../utils/routes';

export default function Sidebar({ toggleNav, setToggleNav }) {
  const handleCloseSidebar = () => {
    setToggleNav(false);
  };
  return (
    <aside className={` sidebar ${toggleNav ? 'active' : ''}`}>
      <figure className="sidebar__logo" onClick={handleCloseSidebar}>
        <img src={close} alt="close button" />
      </figure>
      <ul className="sidebar__links">
        <li className="sidebar__links-item">
          <Link to={ROUTES.HOME}>
            <span> 00</span> <span>HOME</span>
          </Link>
        </li>
        <li className="sidebar__links-item">
          <Link to={ROUTES.DESTINATION}>
            <span>02</span> <span>DESTINATION</span>
          </Link>
        </li>
        <li className="sidebar__links-item">
          <Link to={ROUTES.CREW}>
            <span>03</span> <span>CREW</span>
          </Link>
        </li>
        <li className="sidebar__links-item">
          <Link to={ROUTES.TECHNOLOGY}>
            <span>04</span> <span>TECHNOLOGY</span>
          </Link>
        </li>
      </ul>
    </aside>
  );
}
