import './Main.css'
import nodejs from '../utils/img/nodejs.png'

export default function Main() {
    return (
        <section>
            <article>
                <div className="">
                    <h3>POPULÄRA KURSER</h3>
                    <p className="main-paragraph">här hittar du de mest populära kurser hos oss</p>
                </div>
            </article>
            <div>
                <div className="nodejs-course">
                    <img src={nodejs} alt="bild på nodejs course" />
                    <h4>node.js</h4>
                    <p>Felhantering, routes, middleware, mongoDB, MVC, CRUD, med mera . . . </p>
                    <button className="nodejs-button">Till kursen</button>
                </div>
            </div>
        </section>

    )
}