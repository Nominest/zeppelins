import "../style/main.css";
export default function Main() {
  return (
    <div className="main">
      <div className="main-left">
        <p id="pink">Blog Post</p>
        <p id="large">I think so, this is it</p>
        <p>
          Design begins after I begin to think about how to present an
          experience most successfully, whether a button I put in can solve a
          problem. The only point in design is not ui design, if the user does
          not have a good experience at the end of the product, the design will
          be considered unsuccessful in my opinion.
        </p>
        <div className="social">
          <a href="">
            <img src="./twitter.png" alt="" />
          </a>
          <a href="">
            <img src="./linkedin.png" alt="" />
          </a>
          <a href="">
            <img src="./medium.png" alt="" />
          </a>
        </div>
      </div>
      <div className="main-right">
        <img src="./sit.png" alt="" />
      </div>
    </div>
  );
}
