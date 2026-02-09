import MovieCard from '../components/MovieCard'

function Favorites({ favorites, onToggleFavorite }) {
  if (favorites.length === 0) {
    return <p style={{ padding: '2rem' }}>No favorites yet.</p>
  }

  return (
    <div className="movie-grid">
      {favorites.map(movie => (
        <MovieCard
          key={movie.id}
          movie={movie}
          isFavorite={true}
          onToggleFavorite={onToggleFavorite}
        />
      ))}
    </div>
  )
}

export default Favorites
