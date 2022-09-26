import logo from '../img/heart.png'
import '../styles/logo.css'
function Logo(){
    return(
        <div className='logo-container'>
            {/* <img src={logo} alt='logo de abrazate' />  */}
            <div className='logo-text'>
                <h1 className='logo-title'>Abrá<span>z</span>ate</h1>
                <span className='logo-lengend'>red virtual de apoyo socioemocional</span>
            </div>
        </div>
    )
}


export default Logo;