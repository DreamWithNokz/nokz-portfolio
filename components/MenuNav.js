import Image from "next/image";
import Link from "next/link";
import { Nav, Navbar } from "react-bootstrap";

const MenuNav = ({ imgSrc, onNavHover, onNavUnhover }) => {
  function handleNavHover(e) {
    onNavHover(e.target.getAttribute("value"));
  }

  return (
    <>
      <div className="menu-nav">
        <div className="menu-nav__image">
          <Image src={imgSrc} alt="My Avatar" width={200} height={200} />
        </div>
        <div className="menu-nav__navs">
          <ul className="menu-nav__ul">
            <li className="menu-nav__li">
              <Link href="/about">
                <a
                  className="menu-nav--effect"
                  onMouseOver={handleNavHover}
                  onMouseLeave={onNavUnhover}
                  value="/menu-about.png"
                >
                  ABOUT
                </a>
              </Link>
            </li>
            <li className="menu-nav__li">
              <Link href="/projects">
                <a
                  className="menu-nav--effect"
                  onMouseOver={handleNavHover}
                  onMouseLeave={onNavUnhover}
                  value="/menu-projects.png"
                >
                  PROJECTS
                </a>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default MenuNav;
