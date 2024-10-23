import "./styles/trabajo.css"
import { InstagramEmbed } from 'react-social-media-embed';

const Trabajo = () => {
    return (
        <section className='trabajo' id="trabajo">
            <h2>NUESTRO TRABAJO</h2>
            <article className="trabajo-cards-container">
                <InstagramEmbed url="https://www.instagram.com/akampa.mx/" width={550} />
                <InstagramEmbed url="https://www.instagram.com/watches_world_mag/" width={550} />
            </article>
            <article className="trabajo-cards-container">
                <InstagramEmbed url="https://www.instagram.com/muro.proyectos/" width={550} />
                <InstagramEmbed url="https://www.instagram.com/politica_salvaje/" width={550} />
            </article>
        </section>
        
    )
}

export default Trabajo;