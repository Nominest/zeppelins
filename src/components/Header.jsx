import "../style/header.css";

export default function Header() {
  return (
    <header>
      <div className="header-nav">
        <div>
          <img src="./Leap.png" alt="" srcset="" />
          <img src="./HireMe.png" alt="" srcset="" />
        </div>
        <div>
          <ul>
            <li>
              <a href="">Portfolio</a>
            </li>
            <li>
              <a href="">Blog</a>
            </li>
            <li>
              <a href="">CV</a>
            </li>
            <li>
              <a href="">Store</a>
            </li>
            <li>
              <a href="">Freelance</a>
            </li>
            <li>
              <a href="">About Me</a>
            </li>
            <li>
              <a href="">Contact</a>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
}
