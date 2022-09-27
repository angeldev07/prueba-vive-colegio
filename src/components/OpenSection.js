import Curso from "./Curso";
import svg from "../img/care.svg";
import student from "../img/estudiantes.png";
import "../styles/section1.css";
const contenido = [
  [
    {
      img: svg,
      title: "Autoreconocimiento",
      unit: "(1°-3°) - Vídeos (3)",
    },
    {
      img: svg,
      title: "Amo y me quiero",
      unit: "(4°-5°) - Vídeos (3)",
    },
    {
      img: svg,
      title: "Me identifico conmigo mismo",
      unit: "(6°-11°) - Vídeos (3)",
    },
  ],
  [
    {
      img: svg,
      title: "Ser justo y ser correcto",
      unit: "(1°-3°) - Vídeos (3)",
    },
    {
      img: svg,
      title: "Seguir normas",
      unit: "(4°-5°) - Vídeos (3)",
    },
    {
      img: svg,
      title: "Los dilemas morales",
      unit: "(6°-11°) - Vídeos (3)",
    },
    {
      img: svg,
      title: "La emoción y la expresión",
      unit: "(6°-11°) - Vídeos (3)",
    },
  ]
];



export function Indicator({show}) {
  return (
    <div className="name-container">
      <img src={student} alt="student" className="students" />
      <h2 className={`name ${show ? "":"no_name"}`}>
        Hola, <span>Andrea</span>
      </h2>
    </div>
  );
}

export default function OpenSection() {
  return (
    <section className="container wrapper">
      <Indicator show={true} />
      <section className="curses-section">
        <Curso
          imgCurse={svg}
          title={"Cuidado de sí"}
          content={contenido[0]}
          to={"cuidado-de-si"}
        />
        <Curso
          imgCurse={svg}
          title={"Manejo de emociones"}
          content={contenido[1]}
          to={"manejo-de-emociones"}
        />
        <Curso
          imgCurse={svg}
          title={"Generando vínculos con otros"}
          content={contenido[0]}
          to={"vinculos"}
        />
      </section>
    </section>
  );
}
