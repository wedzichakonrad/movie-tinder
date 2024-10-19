import './main-container.sass'
import { MovieSection } from '../../components/movie-section/movie-section'
import { CurrentMovieProvider } from '../../providers/current-movie-provider'

const MainContainer = () => {
  return (
    <main className="main-container">
      <div className="main-container__inner">
        <CurrentMovieProvider>
          <MovieSection />
        </CurrentMovieProvider>
      </div>
    </main>
  )
}

export default MainContainer
