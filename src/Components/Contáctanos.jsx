import { useEffect } from 'react';
import AOS from 'aos';
import ImagenContacto2 from "../assets/ContactoImg2.png"
import ImagenContacto1 from "../assets/ContactoImg1.png"
import ImagenContacto3 from "../assets/ContactoImg3.png"
import "./styles/contactanos.css"
import 'aos/dist/aos.css';

const Contactanos = () => {

    useEffect(() => {
        AOS.init({
            duration: 1000,  
        });
    }, []);

    return (
        <section className="contactanos">
            <h2>CONTÁCTANOS</h2>
            <div className="contact-container">
                <div data-aos="fade-right" data-aos-delay="500" data-aos-anchor-placement="center-bottom" className="contact-card">
                    <img src={ImagenContacto1} alt="Imagen ilustración de teléfono" />
                    <p>+52 1 55 5502 0206</p>
                </div>
                <div data-aos="zoom-in" data-aos-delay="500" data-aos-anchor-placement="center-bottom" className="contact-card">
                    <img src={ImagenContacto2} alt="Imagen ilustración de E-mail" />
                    <a href='mailto:info@camaleon-studio.com'>info@camaleon-studio.com</a>
                </div>
                <div id='contacto' data-aos="fade-left"  data-aos-delay="500" data-aos-anchor-placement="center-bottom" className="contact-card">
                    <img src={ImagenContacto3} alt="Imagen ilustración de Redes Sociales" />
                    <a href="https://www.instagram.com/camaleon__studio/profilecard/?igsh=MWJoNDg1NWs3cTVtag==" target="_blank">IG: @camaleon__studio</a>
                    <a href="https://www.facebook.com/share/URRTNAwUV12ZcWDM/?mibextid=LQQJ4d" target="_blank">Facebook: Camaleón Studio</a>
                    <a href="https://www.tiktok.com/@camaleon.studio?_t=8qdEDw1cUZq&_r=1" target="_blank">TikTok: camaleon.studio</a>
                </div>
            </div>
        </section>
    );
}

export default Contactanos