/** @format */
import { useState, useEffect } from "react";
import { filterFilmsByDirector, getListOf } from "../helpers/film.helpers";

export function FilmsPage() {
  const [list, setList] = useState([]);
  const [searchDirector, setSearchDirector] = useState("");
  const [filmsByDirector, setFilmsByDirector] = useState([]);
  const [directors, setDirectors] = useState([]);

  function getFilms() {
    fetch("https://ghibliapi.herokuapp.com/films")
      .then(res => res.json())
      .then(films => setList(films))
      .catch(err => console.error(err));
  }

  useEffect(() => {
    getFilms();
  }, []);

  useEffect(() => {
    const filteredFilms = filterFilmsByDirector(list, searchDirector);
    setFilmsByDirector(filteredFilms);

    const directorsList = getListOf(list, "director");
    setDirectors(directorsList);
  }, [list, searchDirector]);

  return (
    <div>
      <h1>Studio Ghibli Films</h1>
      <form>
        <div className='form-group'>
          <label htmlFor='director'>Director:</label>
          <select
            value={searchDirector}
            onChange={e => setSearchDirector(e.target.value)}>
            <option value=''>All</option>
            {directors.map(director => (
              <option
                key={director}
                value={director}>
                {director}
              </option>
            ))}
          </select>
        </div>
      </form>
      <ul>
        {filmsByDirector.map(film => (
          <li key={film.title}>{film.title}</li>
        ))}
      </ul>
    </div>
  );
}
