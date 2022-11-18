import React from "react";

function Promo() {
    return (
        <section className="component component_promo">
            <div className="content promo">
                <div className="promo__content-wrapp">
                    <div className="promo__text-content">
                        <h1 className="promo__title">Портфолио Junior frontend-разработчика</h1>
                        <p className="promo__about">Листайте ниже, чтобы узнать больше про меня и мои проекты.</p>
                    </div>
                    <div className="promo__image-container"></div>
                </div>
                <a href="https://github.com/Arti-D/my-portfolio" target="_blank" rel="noreferrer" className="promo__link">Узнать больше</a>
            </div>
        </section>
    )
}

export default Promo;