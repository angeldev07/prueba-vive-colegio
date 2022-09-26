import '../styles/curso.css'
import CardCurso from './CardCurso';

function Curso({imgCurse, title, content}){
    return (
        <div className="curse-container">
            <CardCurso imgCurse={imgCurse} title={title}/>
            <div className="content">
                <ul className="list-content">
                    {content.map(
                        (curse,i) => 
                        <li className="curse-item" key={i} >
                            <div className="curse-img"> 
                                <img alt={curse.title} src={curse.img} />
                            </div>
                            <div className="curse-text">
                                <h3 className="curse-title">{curse.title}</h3>
                                <span className="unit">{curse.unit}</span>
                            </div>
                        </li>
                    )}
                </ul>
            </div>
        </div>
    );
}

export default Curso;