import { useEffect } from 'react';
import AOS from 'aos';
import './styles/hero_image.css';
import 'aos/dist/aos.css';

const HeroImage = ( props ) => {    

    useEffect(() => {
        AOS.init({
            duration: 1000,  
        });
    }, []);

    return (
        <img 
        id={props.id}
        data-aos={`fade-${props.animation}`}
        data-aos-anchor-placement="bottom-bottom"
        className="hero-image"
        style={{top: props.top, left: props.left, bottom: props.bottom, right: props.right, width: props.width}}
        src={props.image} 
        alt="Landing page illustration" />
    );
}

export default HeroImage;