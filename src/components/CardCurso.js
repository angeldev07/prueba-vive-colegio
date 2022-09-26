import { Link } from "react-router-dom";

function CardCurso({ title, imgCurse }) {
  return (
    <div className="head">
      <div className="head-img">
        <Link to="algo">Cuidado</Link>
      </div>
      <h2 className="title">{title}</h2>
    </div>
  );
}

export default CardCurso;
