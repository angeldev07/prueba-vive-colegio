import Logo from "../components/Logo";
import logoIMG from "../img/logo.png";

function Layout() {
  return (
    <header className="header">
      <div className="">
        <Logo />
        <figure className="logo-vive">
          <img className="logo" alt="vive colegio 3.0" src={logoIMG} />
        </figure>
      </div>
    </header>
  );
}

export default Layout;
