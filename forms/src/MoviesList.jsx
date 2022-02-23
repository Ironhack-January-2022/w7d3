import React from 'react'
import MovieCard from './MovieCard'

export default function MoviesList(props) {
	console.log(props)
	const moviesList = props.list.map(movie => <h3 key={movie._id}>{movie.title}</h3>)
	return (
		<>
			<div>MoviesList</div>
			{/* {props.list.map(movie => (<h3>{movie.title}</h3>))} */}
			{/* {moviesList} */}
			{props.list.map(movie => (
				<MovieCard key={movie._id} movie={movie} />
			))}
		</>
	)
}
