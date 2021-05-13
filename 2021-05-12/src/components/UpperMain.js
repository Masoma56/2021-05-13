import './UpperMain.css'

import laptop from '../utils/img/laptop.svg'



export default function UpperMain() {
    return (
        <div className="uppermain-grid-container">
            <div className="item-a">
                <span className="upper-main-header-white">Vi utbildar Sverige inom</span>
                <br />
                <span className="upper-main-header-orange">IT och programmering</span>
            </div>
            <div className="item-b">
                <p className="control_labels">Söker du kompetenta lärare till en yrkesutbildning, kodstuga eller</p>
                <p className="control_labels">gästföreläsning i Göteborg? <a href="#" className="upper-main-link-color">
                    Hur bokar jag ett möte? </a></p>
            </div>
            <div className="item-d">
                <button className="primary_button">Våra kurser</button>
                <button className="nav-button-dark">Kontakta oss</button>
            </div>

            <div className="item-c">
                <img src={laptop} alt="bild på en laptop" />
            </div>
        </div>

    )
}