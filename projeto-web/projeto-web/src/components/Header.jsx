import { Link } from "react-router-dom";
import logo from "../assets/tio-patinhas.png"; // Adicione uma imagem na pasta assets

const Header = () => {
  return (
    <nav className="header">
      <img src={logo} alt="Tio Patinhas" className="logo" />
      <ul>
        <li><Link to="/">Sobre Mim</Link></li>
        <li><Link to="/portfolio">Portfólio</Link></li>
        <li><Link to="/contato">Contato</Link></li>
      </ul>
    </nav>
  );
};

export default Header;
