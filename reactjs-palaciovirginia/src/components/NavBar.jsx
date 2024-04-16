import logo from "../assets/images/logo-mandy.png";
import CartWidget from "./CartWidget";

const NavBar = () => {
    return (
        <div className="container-fluid">
            <div className="row bg-black p-3">
                <div className="col"></div>
                <div className="col-md text-center">
                    <a href="#">
                        <img src={logo} alt="MandyRock" width={130} />
                    </a>
                </div>
                <div className="col d-flex align-items-center justify-content-end">
                    <CartWidget />
                </div>
            </div>
            <div className="row my-3">
                <div className="col">
                    <ul className="nav justify-content-center">
                        <li className="nav-item">
                            <a className="nav-link text-secondary text-uppercase textoNavbar" href="#">Home</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link text-secondary text-uppercase textoNavbar" href="#">Medias</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link text-secondary text-uppercase textoNavbar" href="#">Soquetes</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link text-secondary text-uppercase textoNavbar" href="#">Gorras</a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default NavBar;