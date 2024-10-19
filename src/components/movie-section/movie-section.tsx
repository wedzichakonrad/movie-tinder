import MovieCard from "../movie-card/movie-card";
import './movie-section.sass';
import {data} from "../../api/data";
import {useCurrentMovie} from "../../providers/current-movie-provider";
import {useState} from "react";

export const MovieSection = () => {
    const context = useCurrentMovie();
    const [isPending, setIsPending] = useState(false);

    const movies = [...data];
    const currentMovie = movies[context.currentMovieIndex];
    const nextMovie = movies[context.currentMovieIndex + 1];


    const onButtonClick = () => {
        setIsPending(true)

        const nextMovie = () => {
            context.setCurrentMovieIndex(context.currentMovieIndex + 1);
            setIsPending(false)
        }

        setTimeout(() => nextMovie(), 1000)
    }

    return (
        <section className='movie-section' >
            <div className='movie-section__card-wrapper'>
                {nextMovie && <div className={`movie-section__next-movie movie-section__next-movie--${isPending ? 'active' : ''}`}>
                    <MovieCard movie={nextMovie}/>
                </div>}
                {currentMovie ? (
                        <div className={`movie-section__current-movie movie-section__current-movie--${isPending ? 'active' : ''}`}>
                            <MovieCard movie={currentMovie} onClick={onButtonClick} disabled={isPending}/>
                        </div>)
                    : 'No more movies!'}
            </div>
            <div className='movie-section__summary-wrapper'>
                {currentMovie && (
                    <>
                        <h3>Summary</h3>
                        <p>{currentMovie.summary}</p>
                    </>
                )}
            </div>
        </section>
    )
}