function ErrorMessage({ message }) {
  return (
    <div style={{ textAlign: 'center', padding: '3rem', color: '#e50914' }}>
      <p>Error: {message}</p>
    </div>
  )
}

export default ErrorMessage
