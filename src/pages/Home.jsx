import { useState, useEffect } from 'react'

const moviesURL = import.meta.env.VITE_API
const apiKey = import.meta.env.VITE_API_KEY

export const Home = () => {

  const [topMovies, setTopMovies] = useState([])

  const getTopRatedMovies = async (url) => {
    const response = await fetch(url)
    const data = await response.json()

    setTopMovies(data.results)
  }

  useEffect(() => {
    const topRatedUrl = `${moviesURL}top_rated?${apiKey}`

    
    getTopRatedMovies(topRatedUrl)
  }, [])

  return (
    <div>
      {topMovies && topMovies.map((movie)=>(
        <p>
          {movie.title}
        </p>
      ))}
    </div>
  )
}