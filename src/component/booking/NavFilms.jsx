import { useState } from "react";
function NavFilms({ listFilms, setFilm }) {
    const [selected, setSelected] = useState(null);
    return (
        <ul className="list-group">
            {listFilms === null
                ? " "
                : listFilms.map((film, index) => {
                      return (
                          <li className="ng-scope" key={index}>
                              <a
                                  className={
                                      selected === index
                                          ? "list-group-item movie active"
                                          : "list-group-item movie"
                                  }
                                  onClick={() => {
                                      setFilm(film);
                                      setSelected(index);
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
