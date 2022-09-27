// import Curso from "./components/Curso";
// import Logo from "./components/Logo";
// import Role from "./components/Role";
// import studentIMG from "./img/estudiantes.png";
// import parentsIMG from "./img/padres.png";
// import professorIMG from "./img/instructor.png";
// import logoIMG from './img/logo.png'
import "./app.css";
import svg from "./img/care.svg";
import Foot from "./components/Foot";
// import OpenSection from "./components/OpenSection";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./layout/Layout";
import Button from "./components/Button";
import OpenSection from "./components/OpenSection";
import Contenido from "./layout/Contendio";

function App() {
  return (
    <Router>
      <Layout />
      <Routes>
        <Route path="/" element={<Button />} />
        <Route path="/estudiantes" element={<OpenSection />} />
        <Route path="/padres" element={<OpenSection />} />
        <Route path="/profesores" element={<OpenSection />} />
        <Route
          path="/estudiantes/cuidado-de-si"
          element={<Contenido contenido={contenido[0]} descripcion={contenido[0][0].descri} />}
        />
        <Route
          path="/estudiantes/manejo-de-emociones"
          element={<Contenido contenido={contenido[1]} tipo={1} descripcion={contenido[1][0].descri}/>}
        />
        <Route
          path="/estudiantes/vinculos"
          element={<Contenido contenido={contenido[2]} tipo={2} descripcion={contenido[2][0].descri}/>}
        />
      </Routes>
      < Foot/>
    </Router>
  );
}

export default App;
//Datos
const contenido = [
  [
    {
      img: svg,
      generalTitle: 'Cuidado de si',
      title: "Autoreconocimiento",
      unit: "(1°-3°) - Vídeos (3)",
      descri: 'Aprende a aceptar y a valorar tus diferencias, pues ellas te harán destacarte entre la multitud',
      unidades: [
        {
          img: svg,
          title: "Autoreconocimiento",
          unit: "(1°-3°) - Vídeos (3)",
        },
        {
          img: svg,
          title: "Autoreconocimiento",
          unit: "(4°-5°) - Vídeos (3)",
        },
        {
          img: svg,
          title: "Autoreconocimiento",
          unit: "(6°-11°) - Vídeos (3)",
        },
      ],
    },

    {
      img: svg,
      title: "Amo y me quiero",
      unit: "(4°-5°) - Vídeos (3)",
      unidades: [
        {
          img: svg,
          title: "Amo y me quiero",
          unit: "(1°-3°) - Vídeos (3)",
        },
        {
          img: svg,
          title: "Amo y me quiero",
          unit: "(4°-5°) - Vídeos (3)",
        },
        {
          img: svg,
          title: "Amo y me quiero",
          unit: "(6°-11°) - Vídeos (3)",
        },
      ],
    },

    {
      img: svg,
      title: "Me identifico conmigo mismo",
      unit: "(6°-11°) - Vídeos (3)",
      unidades: [
        {
          img: svg,
          title: "Me identifico conmigo mismo",
          unit: "(1°-3°) - Vídeos (3)",
        },
        {
          img: svg,
          title: "Me identifico conmigo mismo",
          unit: "(4°-5°) - Vídeos (3)",
        },
        {
          img: svg,
          title: "Me identifico conmigo mismo",
          unit: "(6°-11°) - Vídeos (3)",
        },
      ],
    },
  ],

  [
    {
      img: svg,
      generalTitle: 'Manejo de emociones',
      title: "Ser justo y ser correcto",
      unit: "(1°-3°) - Vídeos (3)",
      descri: '<<Anda despacio cuando escojas tus amigos; pero, cuando los tengas, mantente firme y constante>>',
      unidades: [
        {
          img: svg,
          title: "Ser justo y ser correcto",
          unit: "(1°-3°) - Vídeos (3)",
        },
        {
          img: svg,
          title: "Ser justo y ser correcto",
          unit: "(4°-5°) - Vídeos (3)",
        },
        {
          img: svg,
          title: "Ser justo y ser correcto",
          unit: "(6°-11°) - Vídeos (3)",
        },
      ],
    },
    {
      img: svg,
      title: "Seguir normas",
      unit: "(4°-5°) - Vídeos (3)",
      unidades: [
        {
          img: svg,
          title: "Seguir normas",
          unit: "(1°-3°) - Vídeos (3)",
        },
        {
          img: svg,
          title: "Seguir normas",
          unit: "(4°-5°) - Vídeos (3)",
        },
        {
          img: svg,
          title: "Seguir normas",
          unit: "(6°-11°) - Vídeos (3)",
        },
      ],
    },
    {
      img: svg,
      title: "Los dilemas morales",
      unit: "(6°-11°) - Vídeos (3)",
      unidades: [
        {
          img: svg,
          title: "Los dilemas morales",
          unit: "(1°-3°) - Vídeos (3)",
        },
        {
          img: svg,
          title: "Los dilemas morales",
          unit: "(4°-5°) - Vídeos (3)",
        },
        {
          img: svg,
          title: "Los dilemas morales",
          unit: "(6°-11°) - Vídeos (3)",
        },
      ],
    },
  ],

  [
    {
      img: svg,
      title: "Autoreconocimiento",
      generalTitle: 'Generando vínculos con otros',
      unit: "(1°-3°) - Vídeos (3)",
      descri: '<<Traten a los demás como ustedes quisieran ser tratados>>',
      unidades: [
        {
          img: svg,
          title: "Autoreconocimiento",
          unit: "(1°-3°) - Vídeos (3)",
        },
        {
          img: svg,
          title: "Autoreconocimiento",
          unit: "(4°-5°) - Vídeos (3)",
        },
        {
          img: svg,
          title: "Autoreconocimiento",
          unit: "(6°-11°) - Vídeos (3)",
        },
      ],
    },
    {
      img: svg,
      title: "Amo y me quiero",
      unit: "(4°-5°) - Vídeos (3)",
      unidades: [
        {
          img: svg,
          title: "Amo y me quiero",
          unit: "(1°-3°) - Vídeos (3)",
        },
        {
          img: svg,
          title: "Amo y me quiero",
          unit: "(4°-5°) - Vídeos (3)",
        },
        {
          img: svg,
          title: "Amo y me quiero",
          unit: "(6°-11°) - Vídeos (3)",
        },
      ],
    },
    {
      img: svg,
      title: "Me identifico conmigo mismo",
      unit: "(6°-11°) - Vídeos (3)",
      unidades: [
        {
          img: svg,
          title: "Me identifico conmigo mismo",
          unit: "(1°-3°) - Vídeos (3)",
        },
        {
          img: svg,
          title: "Me identifico conmigo mismo",
          unit: "(4°-5°) - Vídeos (3)",
        },
        {
          img: svg,
          title: "Me identifico conmigo mismo",
          unit: "(6°-11°) - Vídeos (3)",
        },
      ],
    },
  ],
];
