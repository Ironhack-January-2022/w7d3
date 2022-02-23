import React from 'react'

export default function MovieCard(props) {
	return (
		<>
			<h2>{props.movie.title}</h2>
			<p>{props.movie.director}</p>
			{/* if statement in react */}
			{props.movie.IMDBRating > 9.1 && <p>{props.movie.IMDBRating} 😎</p>}
			{props.movie.hasOscars ? <p>Oscar Winner 🤩</p> : <p>No Oscar ☹️
			</p>}
		</>
	)
}
