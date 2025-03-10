import "../../style/header.css";

export default function Header() {
  return (
    <header className="header">
      <nav className="nav">
        <div className="flex items-center">
          <span className="text-xl font-bold">My Portfolio</span>
        </div>
        <div className="links">
          <a href="#home" className="link">
            Home
          </a>
          <a href="#about" className="link">
            About
          </a>
          <a href="#contact" className="link">
            Contact
          </a>
        </div>
      </nav>
    </header>
  );
}
