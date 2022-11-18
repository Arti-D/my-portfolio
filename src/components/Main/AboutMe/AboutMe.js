import React from "react";
import avatar from "../../../images/avatar.jpg"

function AboutMe() {
    return (
        <section className="component about-me">
            <div className="content">
                <h2 className="component__title">Разработчик</h2>
                <div className="about-me__profile">
                    <div className="about-me__info">
                        <div className="about-me__text">
                            <h3 className="about-me__name">Диана</h3>
                            <p className="about-me__annotation">18 лет</p>
                            <p className="about-me__about">Всем привет!! Я начинающий frontend-разработчик, рада видеть вас тут) 
                            </p>
                            <p className="about-me__about">Немного обо мне: люблю читать и вести дискуссию по прочитанному, болею физикой, обожаю
                            узнавать и создавать что-то новое(именно поэтому разработка ван лав), всегда за выбраться куда-то и приятно провести время в хорошей компании, меломанка)</p>
                            <p className="about-me__about">Ниже на этой странице вы найдете мое
                            портфолио &#10552;
                            Заглядывайте почаще посмотреть мои новые работы и до скорого! &#128151;</p>

                        </div>
                        <ul className="about-me__socials">
                            <li className="about-me__socials-elem"><a href="https://github.com/Arti-D" target="_blank" rel="noreferrer" className="about-me__link">GitHub</a></li>
                            <li className="about-me__socials-elem"><a href="https://t.me/arti_di" target="_blank" rel="noreferrer" className="about-me__link">Telegram</a></li>
                        </ul>
                    </div>
                        <img className="about-me__avatar" src={avatar} alt="аватарка"/>
                </div>
            </div>
            
        </section>
    )
}

export default AboutMe;