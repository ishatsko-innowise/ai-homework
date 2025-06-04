import "./index.css";

export default function Task2() {
  return (
    <nav className="nav">
      <button
        className="hamburger"
        id="menuBtn"
        onClick={() => {
          document.getElementById("menu")?.classList.toggle("open");
        }}
      >
        Menu
      </button>
      <ul className="menu" id="menu">
        <li>Home</li>
        <li>About</li>
        <li>Contact</li>
      </ul>
    </nav>
  );
}
