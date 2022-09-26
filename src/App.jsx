// import Curso from "./components/Curso";
import Logo from "./components/Logo";
import Role from "./components/Role";
import studentIMG from "./img/estudiantes.png";
import parentsIMG from "./img/padres.png";
import professorIMG from "./img/instructor.png";
import logoIMG from './img/logo.png'
import "./app.css";
import Foot from "./components/Foot";
// import OpenSection from "./components/OpenSection";


function App() {
  return (
    <>
    <header className="header">
      <div className="wrapper">
        <Logo />
        <figure className="logo-vive">
          <img className="logo" alt="vive colegio 3.0" src={logoIMG} />
        </figure>
        <section className="roles">
          <Role pathImg={studentIMG} roleText={"Estudiantes"} />
          <Role pathImg={parentsIMG} roleText={"Padres"} role={1} />
          <Role pathImg={professorIMG} roleText={"Profesores"} role={2} />
        </section>
        {/* <section className="curses">
          <OpenSection />
        </section> */}
      </div>
        <Foot />
    </header>
    <main>

    </main>
    </>
  );
}

export default App;
