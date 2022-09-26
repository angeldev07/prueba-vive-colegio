import minTic from "../img/Logo_MINTIC.svg.png";
import minCiencia from "../img/1200px-Minciencias_Colombia.svg.png";
import ufps from "../img/logo-horizontal.jpg";
import gobernacion from "../img/gobernacion_oportunidades.png";
import "../styles/foot.css";
export default function Foot() {
  return (
    <section className="footer-logos-container">
      <h2 className="foot-title">Con el apoyo de: </h2>
      <div className="logos">
        <div className="companie-logo">
          <img src={minTic} alt="logo" />
        </div>
        <div className="companie-logo">
          <img src={minCiencia} alt="logo" />
        </div>
        <div className="companie-logo">
          <img src={ufps} alt="logo" />
        </div>
        <div className="companie-logo">
          <img src={gobernacion} alt="logo" />
        </div>
      </div>
    </section>
  );
}
