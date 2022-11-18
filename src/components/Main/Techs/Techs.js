import React from "react";

function Techs() {
    return (
        <section className="component component_techs techs">
            <div className="content">
                <h2 className="component__title">Технологии</h2>
                <h3 className="techs__title">Стек технологий</h3>
                <ul className="techs__list">
                    <li className="techs__elem">HTML</li>
                    <li className="techs__elem">CSS</li>
                    <li className="techs__elem">Figma</li>
                    <li className="techs__elem">JS</li>
                    <li className="techs__elem">React</li>
                    <li className="techs__elem">Git</li>
                    <li className="techs__elem">Webpack</li>
                    <li className="techs__elem">npm</li>
                </ul>
            </div>
        </section>
    )
}

export default Techs;