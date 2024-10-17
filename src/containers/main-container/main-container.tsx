import './main-container.sass';
import {data} from "../../api/data";
import {MovieSection} from "../../components/movie-section/movie-section";

const MainContainer = () => {
    const currentMovie = data[0];
    return (
        <main className='main-container'>
            <div className='main-container__inner'>
                <MovieSection movie={currentMovie}/>
            </div>
        </main>
    )
}

export default MainContainer;