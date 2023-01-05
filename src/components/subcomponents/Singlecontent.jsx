import "../../style/substyle/singlecontent.css";

export default function SingleContent(props) {
  return (
    <div className="card">
      <img src={props.image} alt="" width={500} height={400} id="singleimage" />
      <div className="cardconatiner">
        <a href="" id="title">
          {props.title}
        </a>{" "}
        <p id="description">{props.description}</p>{" "}
        <a href="" id="read">
          Read More
        </a>
      </div>
    </div>
  );
}
