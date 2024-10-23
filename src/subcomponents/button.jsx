import './styles/button.css';

const Button = ( props ) => {

    const scrollToView = () => {
        document.getElementById(props.section).scrollIntoView();
    }

    return (
        <button className="button-1" onClick={scrollToView} >{props.content}</button>
    )
}

export default Button;