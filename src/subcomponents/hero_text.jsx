import { useEffect } from 'react';
import AOS from 'aos';
import './styles/hero_text.css';
import 'aos/dist/aos.css';

const HeroText = (props) => {

    useEffect(() => {
        AOS.init({
            duration: 2000,  
        });
    }, []);


    return (
        <p className="hero-text"
            id={props.id}
            data-aos={`fade-${props.animation}`}
            style={{ textDecoration: props.crossed ? "line-through" : "none",
            top: props.top, left: props.left, bottom: props.bottom, right: props.right,
            textAlign: props.textAlign
         }}>
            {props.children}
        </p>
    );
}

export default HeroText;