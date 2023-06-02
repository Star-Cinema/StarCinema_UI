import { useState } from "react";
function NavFilms({ listFilms, setFilm, setIntitial }) {
    const [selected, setSelected] = useState(setIntitial === null ? null : setIntitial.id);
    return (
        <ul className="list-group">
            {listFilms === null
                ? " "
                : listFilms.map((film, index) => {
                      return (
                          <li className="ng-scope" key={index}>
                              <a
                                  className={
                                      selected === film.id
                                          ? "list-group-item movie active"
                                          : "list-group-item movie"
                                  }
                                  onClick={() => {
                                      setFilm(film);
                                      setSelected(film.id);
                                  }}
                              >
                                  <div className="showtimes-row">
                                      <img src={film.images[0]?.path}></img>
                                      <i className="icon-c16"></i>
                                      <div className="title-movie">
                                          <p className="upper-text ng-binding">
                                              {film.name}
                                          </p>
                                      </div>
                                  </div>
                              </a>
                          </li>
                      );
                  })}
        </ul>
    );
}
export default NavFilms;
