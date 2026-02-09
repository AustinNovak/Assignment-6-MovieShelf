import MovieGrid from '../components/MovieGrid'
import LoadingSpinner from '../components/LoadingSpinner'
import ErrorMessage from '../components/ErrorMessage'

function Home({ movies, favorites, onToggleFavorite, loading, error }) {
  if (loading) return <LoadingSpinner />
  if (error) return <ErrorMessage message={error} />

  return (
    <main className="main-content">
      <div className="content-header">
        <h2>Popular Movies</h2>
        <p>Discover and save your favorite films</p>
      </div>

      <MovieGrid
        movies={movies}
        favorites={favorites}
        onToggleFavorite={onToggleFavorite}
      />
    </main>
  )
}

export default Home
