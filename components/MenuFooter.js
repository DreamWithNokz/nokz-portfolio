import { AiFillMail, AiFillTwitterCircle, AiFillGithub } from "react-icons/ai";

const MenuFooter = () => (
  <div className="menu-footer">
    <p className="menu-footer__title">-- Social links --</p>
    <a href="mailto:nmebron@protonmail.com" className="menu-footer__link">
      <AiFillMail size={40} />
    </a>
    <a
      href="https://twitter.com/DreamWithNokz"
      className="menu-footer__link"
      target="_blank"
    >
      <AiFillTwitterCircle size={40} />
    </a>
    <a
      href="https://github.com/DreamWithNokz"
      className="menu-footer__link"
      target="_blank"
    >
      <AiFillGithub size={40} />
    </a>
  </div>
);

export default MenuFooter;
