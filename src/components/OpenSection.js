import Curso from "./Curso";
import svg from '../img/care.svg'
import {Outlet} from 'react-router-dom';

const contenido = [
  {
    img: svg,
    title: 'Autoreconocimiento',
    unit: '(1°-3°) - Vídeos (3)'
  },
  {
    img: svg,
    title: 'Amo y me quiero',
    unit: '(4°-5°) - Vídeos (3)'
  },
  {
    img: svg,
    title: 'Me identifico conmigo mismo',
    unit: '(6°-11°) - Vídeos (3)'
  }
]

const contenido2 = [
  {
    img: svg,
    title: 'Ser justo y ser correcto',
    unit: '(1°-3°) - Vídeos (3)'
  },
  {
    img: svg,
    title: 'Seguir normas',
    unit: '(4°-5°) - Vídeos (3)'
  },
  {
    img: svg,
    title: 'Los dilemas morales',
    unit: '(6°-11°) - Vídeos (3)'
  },
  {
    img: svg,
    title: 'La emoción y la expresión',
    unit: '(6°-11°) - Vídeos (3)'
  }
]

export default function OpenSection(){
    return (
        <section className="container">
            <div className="name-container">
                <img src = "" alt = 'student' />
                <h2 className="name">Hola, Andrea</h2>
            </div>
            <section className="curses-section">
                <Curso imgCurse={svg} title={'Cuidado de sí'} content = {contenido} />
                <Outlet/>
                <Curso imgCurse={svg} title={'Manejo de emociones'} content = {contenido2} />
                <Curso imgCurse={svg} title={'Generando vínculos con otros'} content = {contenido} />
            </section>
        </section>
    );
}