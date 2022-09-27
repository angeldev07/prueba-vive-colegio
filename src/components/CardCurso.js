import { Link } from "react-router-dom";

function CardCurso({ title, imgCurse, to , tipo}) {
  const color = ['green','orange','blue'];
  return (
    <div className="head">
      <div>
        <Link className={`head-img ${color[tipo]} `} to={to}>
          <img src= {imgCurse} alt ={title}/>
        </Link>
      </div>
      <h2 className="title">{title}</h2>
    </div>
  );
}

export default CardCurso;
