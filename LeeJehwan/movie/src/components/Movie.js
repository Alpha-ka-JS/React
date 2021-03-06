import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import "./Movie.css";

function Movie({ id, year, title, summary, poster, genres }) {
  const mumble =
    "There is no plot and it is so short that I just write it roughly. If you are curious, buy the movie yourself. But it might not be possible to see it because it is corona. Well, what else should I use? It might not be long this much, but it's not as long as I thought. Hmm";
  const finedSummary =
    summary.length > 200 ? summary.slice(0, 400) : summary + mumble;
  return (
    <Link
      to={{
        pathname: `/movie/${id}`,
        state: {
          year,
          title,
          finedSummary,
          poster,
          genres,
        },
      }}
    >
      <div className='movie'>
        <img src={poster} alt={title} title={title} />
        <div className='movie__data'>
          <h3 className='movie__title'>{title}</h3>
          <h5 className='movie__year'>{year}</h5>
          <ul className='movie__genres'>
            {genres.map((genre, index) => (
              <li key={index} className='genres__genre'>
                {genre}
              </li>
            ))}
          </ul>
          <p className='movie__summary'>{finedSummary}...</p>
        </div>
      </div>
    </Link>
  );
}

Movie.propTypes = {
  id: PropTypes.number.isRequired,
  year: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  summary: PropTypes.string.isRequired,
  poster: PropTypes.string.isRequired,
  genres: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Movie;
