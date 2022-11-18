import React from "react";

function Portfolio() {
    return (
        <section className="component portfolio">
            <div className="content">
            <h2 className="component__title">Портфолио</h2>
                <ul className="portfolio__list">
                    <li className="portfolio__project">
                        <a target="_blank" rel="noreferrer" className="portfolio__link" href="https://arti-d.github.io/How-to-learn/">How to learn (статичный сайт)</a>
                    </li>
                    <li className="portfolio__project">
                        <a target="_blank" rel="noreferrer" className="portfolio__link" href="https://arti-d.github.io/Russian-travel/">Russian-travel (адаптивный сайт)</a>
                    </li>
                    <li className="portfolio__project">
                        <a target="_blank" rel="noreferrer" className="portfolio__link" href="https://arti-d.github.io/mesto/index.html">Mesto (одностраничное приложение)</a>
                    </li>
                    <li className="portfolio__project">
                        <a target="_blank" rel="noreferrer" className="portfolio__link" href="https://arti-d.github.io/mesto-react/">Mesto (на React)</a>
                    </li>
                    <li className="portfolio__project">
                        <a target="_blank" rel="noreferrer" className="portfolio__link" href="https://arti-d.github.io/react-mesto-auth/">Mesto (с функцией регистрации)</a>
                    </li>
                    <li className="portfolio__project">
                        <a target="_blank" rel="noreferrer" className="portfolio__link" href="https://arti-d.github.io/Bin2Dec/src/index.html">Bin2Dec (простое приложение)</a>
                    </li>
                    <li className="portfolio__project">
                        <a target="_blank" rel="noreferrer" className="portfolio__link" href="https://arti-d.github.io/ThriveTalkLandingPage/">ThriveTalkLandingPage (лендинг)</a>
                    </li>
                    <li className="portfolio__project">
                        <a target="_blank" rel="noreferrer" className="portfolio__link" href="https://arti-d.github.io/TestTask-imperium/">
TestTask-imperium (тестовое задание)</a>
                    </li>
                </ul>
            </div>
        </section>
    )
}

export default Portfolio;