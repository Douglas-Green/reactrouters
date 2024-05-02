/** @format */

import {useState, useEffect} from "react";
import {NavLink} from "react-router-dom";
import {filterFilmsByDirector, getListOf} from "../helpers/film.helpers";
import "./FilmsPage.css";

export function FilmsPage() {
  const [films, setFilms] = useState([]);
  const [searchDirector, setSearchDirector] = useState("");
  const [filmsByDirector, setFilmsByDirector] = useState([]);
  const [directors, setDirectors] = useState([]);
  const [hoveredItem, setHoveredItem] = useState(null);
  const [clickedChars, setClickedChars] = useState([]);

  useEffect(() => {
    fetch("(link unavailable)")
      .then(res => res.json())
      .then(films => setFilms(films))
      .catch(err => console.error(err));
  }, []);

  useEffect(() => {
    const filteredFilms = filterFilmsByDirector(films, searchDirector);
    setFilmsByDirector(filteredFilms);

    const directorsList = getListOf(films, "director");
    setDirectors(directorsList);
  }, [films, searchDirector]);

  return (
    <div className="films-page">
      <div className="films-header">
        <NavLink
          to="/"
          className="home-link"
          activeClassName="home-active-link"
        >
          Home
        </NavLink>{" "}
        <h1 className="filmsPage-title">
          {Array.from("Studio Ghibli Films").map((char, index) => (
            <span
              key={index}
              className={`char ${clickedChars.includes(index) ? "hidden" : ""}`}
              onClick={() => {
                if (!clickedChars.includes(index)) {
                  setClickedChars([...clickedChars, index]);
                }
              }}
            >
              {char}
            </span>
          ))}
        </h1>{" "}
        <NavLink
          to="/films"
          className="films-link"
          activeClassName="films-active-link"
        >
          Films
        </NavLink>{" "}
      </div>
      <form>
        <div className="films-form-group">
          <label className="director">
            Director:
            <select
              className="films-select"
              value={searchDirector}
              onChange={event => {
                setSearchDirector(event.target.value);
              }}
            >
              <option value="">All</option>
              {directors.map(director => (
                <option
                  key={director}
                  value={director}
                >
                  {director}
                </option>
              ))}
            </select>
          </label>
        </div>
      </form>
      {searchDirector ? (
        filmsByDirector.length > 0 ? (
          <ul>
            {filmsByDirector.map((film, index) => (
              <li
                className={`films-list-item ${
                  hoveredItem === index ? "active" : "dim"
                }`}
                key={film.title}
                onMouseEnter={() => setHoveredItem(index)}
                onMouseLeave={() => setHoveredItem(null)}
              >
                <img
                  className="image-small"
                  src={film.image}
                  alt={film.title}
                />
                <div className="film-info">
                  <div className="film-title">{film.title}</div>
                  <div className="film-description">{film.description}</div>
                </div>
              </li>
            ))}
          </ul>
        ) : (
          <p className="no-films-found">No films found</p>
        )
      ) : (
        <p className="select-director-mess">Select a director to view films</p>
      )}
      <footer className="films-footer">
        {Array.from("Studio Ghibli Films").map((char, index) => (
          <span
            key={index}
            className={`footer-char ${
              clickedChars.includes(index) ? "clicked" : "hidden"
            }`}
            onClick={() => {
              if (clickedChars.includes(index)) {
                setClickedChars(clickedChars.filter(i => i !== index));
              }
            }}
          >
            {char}
          </span>
        ))}
      </footer>
    </div>
  );
}
