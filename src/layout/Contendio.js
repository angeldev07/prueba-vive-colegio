import CardCurso from "../components/CardCurso";
import { Indicator } from "../components/OpenSection";
import '../styles/contenido.css'

function Content({ content, tipo }) {

  const clase = ['green','orange','blue']


  return content.map((item) => (
    <ul className="list-content" key={Math.random()*100}>
      <div className="curse-item">
        <div className={`curse-img ${clase[tipo]}`}>
          <img alt={item.title} src={item.img} />
        </div>
        <div className="curse-text">
          <h3 className="curse-title">{item.title}</h3>
          <span className="unit">{item.unit}</span>
        </div>
      </div>
      {item.unidades.map((unidad) => (
        <li className="curse-item" key={Math.random()*100}>
          <div className="play">
            <span className="material-symbols-outlined"> play_arrow </span>
          </div>
          <div className="curse-text">
            <h3 className="curse-title">{unidad.title}</h3>
            <span className="unit">{unidad.unit}</span>
          </div>
        </li>
      ))}
    </ul>
  ));
}


export default function Contenido({ descripcion, contenido, tipo=0 }) {
  return (
    <section className="container wrapper">
      <Indicator />
      <div className="mensaje-curso">
        <CardCurso title={contenido[0].generalTitle} imgCurse={contenido[0].img} tipo={tipo}/>
      </div>
      <div className="curses-section">
        <Content content={contenido} tipo={tipo} />
      </div>
    </section>
  );
}
