import './movie-card.sass';
import {Config} from "../../utils/config";
import MovieCardButton, {MovieCardButtonVariants} from "./button/movie-card-button";
import {MovieProps} from "../../utils/types";
import {updateMovieRecommendation} from "../../api/update-movie-recommendation";
import {useState} from "react";

type MovieCardProps = {
    movie: MovieProps
}

const MovieCard = ({movie}:MovieCardProps) => {
    const [isPending, setIsPending] = useState(false);

    const onButtonClick = (variant: string) => {
        updateMovieRecommendation({variant, id: movie.id, onPending: setIsPending})
    }

    return (
        <div className='movie-card'>
            <div className='movie-card__inner'>
                <div className='movie-card__heading-wrapper'>
                    <h2>{movie.title}</h2>
                    <span>({movie.rating}/10)</span>
                </div>
                <div className='movie-card__img-wrapper'>
                    <img src={movie.imageURL} alt='movie photo'/>
                </div>
                <div className='movie-card__buttons-wrapper'>
                    <MovieCardButton
                        text='Accept'
                        icon={Config.assets.svgs.check}
                        variant={MovieCardButtonVariants.accept}
                        alt='check icon'
                        onClick={onButtonClick}
                    />
                    <MovieCardButton
                        text='Reject'
                        icon={Config.assets.svgs.cross}
                        variant={MovieCardButtonVariants.reject}
                        alt='cross icon'
                        onClick={onButtonClick}
                    />
                </div>
            </div>
        </div>
    )
}

export default MovieCard;