import logo from '../logo512.png';
import '../App.css';

function Header() {
  return (
    <div className="header">
        <nav className="navbar navbar-expand-sm bg-dark navbar-dark fixed-top">
            <a className="navbar-brand" href="hh">
                <img src={logo} alt="Logo" height="50" width="50"/> <span className="mb-0">React Blog</span>
            </a>
        </nav>
    </div>
  );
}

export default Header;