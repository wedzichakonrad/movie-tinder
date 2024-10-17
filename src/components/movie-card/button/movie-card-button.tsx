import './movie-card-button.sass';

type MovieCardButtonProps = {
    icon: string
    alt: string
    variant: string
    text: string
    onClick: (variant: string) => void
}

export const MovieCardButtonVariants = {
    accept: 'accept',
    reject: 'reject'
}

const MovieCardButton = ({icon, alt, variant = '', text, onClick}: MovieCardButtonProps) => {
    return (
        <button className={`movie-card-button movie-card-button--${variant}`} onClick={() => onClick(variant)}>
            <div className='movie-card-button__icon-wrapper'>
                <img src={icon} alt={alt}/>
            </div>
            <span>{text}</span>
        </button>
    )
}

export default MovieCardButton;