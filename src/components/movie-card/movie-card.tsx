import './movie-card.sass';
import { ReactComponent as Check } from '../../assets/check.svg';
import { ReactComponent as Cross } from '../../assets/cross.svg';
import MovieCardButton, {MovieCardButtonVariants} from "./button/movie-card-button";
import {MovieProps} from "../../utils/types";
import {updateMovieRecommendation} from "../../api/update-movie-recommendation";
import React, {useRef} from "react";

type MovieCardProps = {
    movie: MovieProps
    onClick?: () => void
    disabled?: boolean
}

const MovieCard = ({movie, onClick, disabled}:MovieCardProps) => {
    const ItemType = 'CARD';
    const ref = useRef(null);

    const onDragStart = (e: React.DragEvent) => {
        console.log(e,)
        // @ts-ignore
        ref.current.style.opacity = '0';
        e.dataTransfer.setData("sth", 'value')
    }
    const onButtonClick = (variant: string) => {
        onClick?.();
        // updateMovieRecommendation({variant, id: movie.id, onPending: setIsPending})
    }

    return (
        <div ref={ref} onDragStart={onDragStart} className='movie-card' draggable>
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
                        Icon={Check}
                        variant={MovieCardButtonVariants.accept}
                        onClick={onButtonClick}
                        disabled={disabled}
                    />
                    <MovieCardButton
                        text='Reject'
                        Icon={Cross}
                        variant={MovieCardButtonVariants.reject}
                        onClick={onButtonClick}
                        disabled={disabled}
                    />
                </div>
            </div>
        </div>
    )
}

export default MovieCard;