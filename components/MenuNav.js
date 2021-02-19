import Image from "next/image";
import Link from "next/link";

const MenuNav = ({ imgSrc, onNavHover, onNavUnhover }) => {
  function handleNavHover(e) {
    onNavHover(e.target.getAttribute("value"));
  }

  return (
    <div className="menu-nav">
      <div className="menu-nav__image">
        <Image src={imgSrc} alt="My Avatar" width={200} height={200} />
      </div>
      <div className="menu-nav__navs d-flex">
        <ul className="menu-nav__ul w-100 align-self-center">
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
  );
};

export default MenuNav;
