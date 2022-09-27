import studentIMG from "../img/estudiantes.png";
import parentsIMG from "../img/padres.png";
import professorIMG from "../img/instructor.png";
import Role from './Role.js'

export default function Button() {
  return (
    <section className="roles">
      <Role pathImg={studentIMG} roleText={"Estudiantes"} to={'estudiantes'}/>
      <Role pathImg={parentsIMG} roleText={"Padres"} role={1} to={'estudiantes'}/>
      <Role pathImg={professorIMG} roleText={"Profesores"} role={2} to={'estudiantes'}/>
    </section>
  );
}
