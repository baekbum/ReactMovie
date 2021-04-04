import React from 'react';
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types';
import "./Movie.css";

function Movie({id, year, title, summary, poster, genres}) {
    return (
        <Link to={{
            pathname: `/movie/${id}`,
            state : {
                year: year,
                title: title,
                summary: summary,
                poster: poster,
                genres: genres
            }
        }}>
        <div className="movie">
            <img src={poster} alt={title} title={title} />
            <div className="movie_data">
                <h3 className="movie_title">{title}</h3>
                <h5 className="movie_year">{year}</h5>
                <p className="movie_summary">{summary.length > 140 ? summary.slice(0, 140) + "..." : summary }</p>
                <ul className="movie__genres">
                    {genres.map((genre, idx) => <li className="genres_genre" key={idx}>{genre}</li>)}
                </ul>
            </div>        
        </div>
        </Link>
    )
}

Movie.propTypes = {
    id: PropTypes.number.isRequired,
    year: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    summary: PropTypes.string.isRequired,
    poster: PropTypes.string.isRequired,
    genres: PropTypes.arrayOf(PropTypes.string).isRequired
}

export default Movie;