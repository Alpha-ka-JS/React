import React from "react";
import axios from "axios";
import Movie from "../components/Movie";
import Loader from "react-loader-spinner";
import Fade from "react-reveal/Fade";

import logo from "../img/logo.png";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import "./Home.css";

class Home extends React.Component {
  state = {
    isLoading: true,
    movies: [],
  };

  getMoives = async () => {
    const {
      data: {
        data: { movies },
      },
    } = await axios.get(
      "https://yts-proxy.nomadcoders1.now.sh/list_movies.json?sort_by=rating"
    );
    this.setState({ movies, isLoading: false });
  };

  componentDidMount() {
    this.getMoives();
  }

  render() {
    const { isLoading, movies } = this.state;
    return (
      <section className='container'>
        {isLoading ? (
          <div className='loader'>
            <span className='loader__text'>
              <img src={logo} className='logo' alt='logo' />
              <Loader type='Oval' color='#00BFFF' height={100} width={100} />
            </span>
          </div>
        ) : (
          <div className='movies'>
            {movies.map((movie) => (
              <Fade key={movie.id} left>
                <Movie
                  key={movie.id}
                  id={movie.id}
                  year={movie.year}
                  title={movie.title}
                  summary={movie.summary}
                  poster={movie.medium_cover_image}
                  genres={movie.genres}
                />
              </Fade>
            ))}
          </div>
        )}
      </section>
    );
  }
}

export default Home;
