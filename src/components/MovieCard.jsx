function MovieCard({ movie, isFavorite, onToggleFavorite }) {
  const posterUrl = movie.poster_path
    ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
    : 'https://placehold.co/300x450/667eea/ffffff?text=No+Image'

  return (
    <div className="movie-card">
      <div className="movie-poster">
        <img src={posterUrl} alt={movie.title} />
      </div>

      <div className="movie-info">
        <h3 className="movie-title">{movie.title}</h3>

        <div className="movie-details">
          <span className="movie-rating">
            ⭐ {movie.vote_average}
          </span>
          <span className="movie-year">
            {movie.release_date
              ? movie.release_date.substring(0, 4)
              : 'N/A'}
          </span>
        </div>

        <button
          className={`favorite-button ${isFavorite ? 'favorited' : ''}`}
          onClick={() => onToggleFavorite(movie)}
        >
          {isFavorite ? '❤️ Remove Favorite' : '♡ Add to Favorites'}
        </button>
      </div>
    </div>
  )
}

export default MovieCard
