import React from "react";

function Footer() {
    return (
        <footer className='footer'>
            <div className="content">
                <p className="footer__about">Учебный проект Яндекс.Практикум х BeatFilm.</p>
                <div className="footer__main">
                    <p className="footer__copyright">&copy;Arti {new Date().getFullYear()}</p>
                    <ul className="footer__socials">
                        <li className="footer__elem">
                            <a target="_blank" rel="noreferrer" className="footer__link" href="https://github.com/Arti-D">GitHub</a>
                        </li>
                        <li className="footer__elem">
                            <a target="_blank" rel="noreferrer" className="footer__link" href="https://t.me/arti_di">Telegram</a>
                        </li>
                    </ul>
                </div>
            </div>
        </footer>
    )
}

export default Footer;