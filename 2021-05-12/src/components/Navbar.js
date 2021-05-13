import './Navbar.css'
import logo from '../utils/img/Codic-logo.svg'

export default function Navbar() {
    return (
        <nav className="grid-container">
            <div className="grid-item">
                <img className="nav-logo" src={logo} alt="codic" />
            </div>

            <div className="grid-item">
                <ul className="links">
                    <li className="links-item">
                        <a className="links-item-a" href="#">Startsidan</a></li>
                    <li className="links-item">
                        <a className="links-item-a" href="#">Våra kurser</a></li>
                    <li className="links-item">
                        <a className="links-item-a" href="#">Kontakta Oss</a></li>
                    <li className="links-item">
                        <a className="links-item-a" href="#">Om Oss</a></li>
                    <li className="links-item">
                        <a className="links-item-a" href="#">LIA</a></li>
                </ul>
            </div>

            <div className="grid-item">
                <button className="nav-button-dark">Login</button>
                <button className="nav-button-grey">Sign up</button>
            </div>

        </nav>

    )
}