import { useState } from 'react'
import logo from './logo.svg'
import './App.css'
import MoviesList from './MoviesList'

const moviesData = [
  {
    "_id": "1ae23ef1",
    "title": "The Godfather",
    "director": "Francis Coppola",
    "hasOscars": true,
    "IMDBRating": 9.2
  },
  {
    "_id": "1ae23ef2",
    "title": "Star Wars",
    "director": "George Lucas",
    "hasOscars": true,
    "IMDBRating": 8.7
  },
  {
    "_id": "1ae23ef3",
    "title": "The Shawshank Redemption",
    "director": "Frank Darabont",
    "hasOscars": false,
    "IMDBRating": 9.3
  },
  {
    "_id": "1ae23ef4",
    "title": "Jurassic Park",
    "director": "Steven Spielberg",
    "hasOscars": false,
    "IMDBRating": 8.0
  },
  {
    "_id": "1ae23ef5",
    "title": "Sharknado",
    "director": "Anthony C. Ferrante",
    "hasOscars": false,
    "IMDBRating": 5.2
  },
  {
    "_id": "1ae23ef6",
    "title": "Titanic",
    "director": "James Cameron",
    "hasOscars": true,
    "IMDBRating": 8.9
  }
]

function App() {

  const [movies, setMovies] = useState(moviesData)
  const [title, setTitle] = useState('')
  const [director, setDirector] = useState('')
  const [hasOscars, setHasOscars] = useState(false)
  const [IMDBRating, setIMDBRating] = useState(0)

  const addMovie = () => {
    const newMovie = {
      _id: '1ae2fdjer',
      title: 'Interstellar',
      director: 'Christopher Nolan',
      hasOscars: true,
      IMDBRating: 8.6
    }

    // update the state of movies
    // movies.push(newMovie) // -> don't mutate state directly
    // const moviesCopy = movies.slice()
    // moviesCopy.push(newMovie)
    // setMovies(moviesCopy)
    setMovies([newMovie, ...movies])
  }


  const handleSubmit = event => {
    // we want to prevent the default behaviour of the form  
    // (reloading the page and making a get request to itself)
    event.preventDefault()
    const newMovie = { title, director, hasOscars, IMDBRating, _id: '389210' }
    console.log(newMovie)
    // we add the created movie object to the list of movies
    setMovies(movies => [newMovie, ...movies])
    // reset the form
    setTitle('')
    setDirector('')
    setHasOscars(false)
    setIMDBRating(0)
  }
  const handleTitleChange = event => {
    // access the internal value from the form via the event 
    // console.log(event.target.value)
    // change the state of title
    setTitle(event.target.value)
  }
  const handleDirectorChange = event => {
    setDirector(event.target.value)
  }

  const handleHasOscarsChange = event => {
    setHasOscars(event.target.checked)
  }
  const handleIMDBRatingChange = event => {
    setIMDBRating(event.target.value)
  }
  // const movieList = movies.map(movie => <h3>{movie.title}</h3>)
  // console.log(movieList)
  return (
    <div className="App">
      <h1>Movies List</h1>
      {/* <button onClick={addMovie}>Add the movie Interstellar</button> */}
      {/* try to not use the array index as a key prop */}
      {/* {movies.map(movie => <h3 key={movie._id}>{movie.title}</h3>)} */}

      {/* {movieList} */}

      <form onSubmit={handleSubmit}>
        <label htmlFor="">Title: </label>
        <input type="text" value={title} onChange={handleTitleChange} />
        {/* another option is to call the setter directly */}
        {/* <input type="text" value={title} onChange={e => setTitle(e.target.value)} /> */}
        <label htmlFor="">Director: </label>
        <input type="text" value={director} onChange={handleDirectorChange} />

        <label htmlFor="">Oscars: </label>
        <input type="checkbox" checked={hasOscars} onChange={handleHasOscarsChange} />

        <label htmlFor="">IMDBRating: </label>
        <input type="number" value={IMDBRating} onChange={handleIMDBRatingChange} />

        <button type="submit">Add this movie</button>
      </form>

      <MoviesList list={movies} />
    </div>
  )
}

export default App
