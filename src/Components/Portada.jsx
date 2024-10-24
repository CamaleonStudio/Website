import { useEffect } from 'react';
import AOS from 'aos';
import Button from '../subcomponents/button';
import HeroImage from '../subcomponents/hero_image';
import Image1 from '../assets/ImagenHero1.png'
import Image2 from '../assets/ImagenHero2.png'
import Image3 from '../assets/ImagenHero3.png'
import Image4 from '../assets/ImagenHero4.png'
import HeroText from '../subcomponents/hero_text';
import './styles/portada.css'
import 'aos/dist/aos.css';

const Portada = () => {

    useEffect(() => {
        AOS.init({
            duration: 1000,  
            once: true,
        });
    }, []);

    return (
        <section className="portada">
            <h1></h1>
            <p id="portada-subititle">Somos una agencia de creación y edición de contenido que busca
            conectar y transmitir mensajes poderosos</p>
            <Button content="Conoce más" section='servicios'></Button>

            <HeroImage id='periodico' animation="right" image={Image1} width="295px" left="159px" top='101px'></HeroImage>
            <HeroImage id='camara' animation="left" image={Image2} width="377px" right="0" ></HeroImage>
            <HeroImage id='flores' animation="right" image={Image3} width="441px" left="159px" bottom='20px'></HeroImage>
            <HeroImage id='cd' animation="left" image={Image4} width="320px" top="43px" right='311px'></HeroImage>
        
            <HeroText id='eventos' animation="right" crossed={false} left='34px' top="304px">Eventos</HeroText>
            <HeroText id='edicion' animation="right" crossed={false} left='159px' bottom="291px">Edicion de <br/> Video</HeroText>
            <HeroText id='creacion' animation="left" crossed={false} right='93px' top="600px">Creación de Contenido</HeroText>
            <HeroText id='sociales' animation="left" crossed={false} top='251px' right="61px" textAlign="right">Manejo de <br/>Redes Sociales</HeroText>
        </section>
    )
}

export default Portada;