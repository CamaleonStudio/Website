import { useEffect } from 'react';
import AOS from 'aos';
import Card from '../subcomponents/service_card';
import Button from '../subcomponents/button';
import ServiceImg1 from '../assets/ServiceImg.png'
import ServiceImg2 from "../assets/ServiceImg2.png";
import ServiceImg3 from "../assets/ServiceImg3.png";
import ServiceImg4 from "../assets/ServiceImg4.png";
import './styles/servicios.css'
import 'aos/dist/aos.css';


const Servicios = () => {

    useEffect(() => {
        AOS.init({
            duration: 1000,  
        });
    }, []);

    return (
        <section className='servicios' id="servicios">
            <h2 data-aos="zoom-in">SERVICIOS</h2>
            <p data-aos="zoom-in" className='servicios-subtitle'>¡Nos enfocamos en que cada cliente quede satisfecho con las historias que contamos,
                 garantizamos que su visión y objetivos se vean reflejados en nuestro trabajo, 
                 sin importar el ámbito o la plataforma!</p>

            <div className='servicios-container'>
                <div data-aos="fade-right"className='servicios-cards'>
                    <Card id='edicion-video' title="Edicion de Video" image={ServiceImg1}
                    description="Ofrecemos servicios profesionales de edición de video para todo tipo 
                    de proyectos, tanto personales como empresariales.
                    Nuestro objetivo es transformar tus ideas en producciones visuales
                     impactantes y de alta calidad, ajustándonos a tus necesidades y garantizando 
                     un resultado que destaque. Cada proyecto es único y nos comprometemos a darle 
                     el tratamiento profesional que merece."
                    ></Card>
                    <Card id='fotografia' title="Fotografía" image={ServiceImg2}
                    description="Ofrecemos servicios de sesiones fotográficas personalizadas, 
                    adaptadas a tus necesidades, ya sea para potenciar tu presencia en redes sociales, 
                    crear un book profesional o resaltar las cualidades de tus productos."
                    ></Card>
                </div>
                <div data-aos="fade-left" className='servicios-cards'>
                    <Card id='redes' title="Manejo de Redes" image={ServiceImg3}
                    description="Ofrecemos un servicio integral de manejo de redes sociales, 
                    diseñado para potenciar tu presencia digital. Nos encargamos de subir contenido, 
                    gestionar posteos y crear una comunidad sólida e interactiva en tus plataformas. 
                    Nuestro enfoque se centra en interactuar activamente con tu audiencia, fomentando
                     el engagement y fortaleciendo tu marca en el entorno digital."
                    ></Card>
                    <Card id='content-creation' title="Live Content Creation" image={ServiceImg4}
                    description="Ofrecemos servicios completos de fotografía, video y 
                    edición para eventos, todo realizado con la versatilidad y calidad de un 
                    teléfono móvil. Esta opción es ideal para cubrir eventos importantes y 
                    generar contenido inmediato para redes sociales, ya sea en tiempo real o 
                    de manera diferida. Utilizamos dispositivos como iPhone para capturar 
                    momentos clave con calidad profesional, los cuales pueden ser editados y 
                    enviados como contenido orgánico, adaptado a las necesidades de tu audiencia y 
                    plataforma. "
                    ></Card>
                </div>
            </div>

            <p className='servicios-subtitle' data-aos="zoom-in" data-aos-delay="500">
                Todos nuestros servicios se ofrecen como paquetes personalizados que se ajusten a las necesidades y presupuestos de cada cliente
            </p>

            <Button content="Contáctanos" section="contacto"></Button>
        </section>
    )
}

export default Servicios;