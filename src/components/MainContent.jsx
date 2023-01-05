import "../style/maincontent.css";
import Articles from "./subcomponents/Articles";

export default function MainContent() {
  return (
    <div className="maincontent">
      <ul>
        <li>
          <a href="">All</a>
        </li>
        <li>
          <a href="">UI Design</a>
        </li>
        <li>
          <a href="">UX Design</a>
        </li>
        <li>
          <a href="">Product Design</a>
        </li>
        <li>
          <a href="">Articles</a>
        </li>
        <li>
          <a href="">Tutorials</a>
        </li>
        <li>
          <a href="">News</a>
        </li>
      </ul>
      <Articles />
    </div>
  );
}
