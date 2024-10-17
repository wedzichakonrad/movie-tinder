import MovieCard from "../movie-card/movie-card";
import './movie-section.sass';
import {MovieProps} from "../../utils/types";

type MovieSectionProps = {
    movie: MovieProps
}

export const MovieSection = ({movie}: MovieSectionProps) => {
    return (
        <section className='movie-section'>
            <div className='movie-section__card-wrapper'>
                <MovieCard movie={movie}/>
            </div>
            <div className='movie-section__summary-wrapper'>
                <h3>Summary</h3>
                <p>{movie.summary}</p>
            </div>
        </section>
    )
}