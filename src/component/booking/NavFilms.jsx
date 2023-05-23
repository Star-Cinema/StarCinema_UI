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
                                      {/* <img src={film.img}></img> */}
                                      <i className="icon-c16"></i>
                                      <div className="title-movie">
                                          <p className="upper-text ng-binding">
                                              {film.name}
                                          </p>
                                          {/* <p className="vn upper-text ng-binding">
                                        Fast &amp; Furious 10
                                    </p> */}
                                      </div>
                                  </div>
                              </a>
                          </li>
                      );
                  })}

            {/* <li
                ng-repeat="movie in items.movies"
                ng-click="getCinemaByMovie(movie,$index)"
                className="ng-scope"
            >
                <a
                    href="javascript:;"
                    // ng-className='{"active":currentMovie==$index}'
                    className="list-group-item movie active"
                >
                    <div className="showtimes-row">
                        <img src="https://cdn.galaxycine.vn/media/2023/5/9/450x300_1683602206164.jpg"></img>
                        <i className="icon-c16"></i>
                        <div className="title-movie">
                            <p className="upper-text ng-binding">Fast X</p>
                            <p className="vn upper-text ng-binding">
                                Fast &amp; Furious 10
                            </p>
                        </div>
                    </div>
                </a>
            </li>
            <li
                ng-repeat="movie in items.movies"
                // ng-click="getCinemaByMovie(movie,$index)"
                className="ng-scope"
            >
                <a
                    href="javascript:;"
                    // ng-className='{"active":currentMovie==$index}'
                    className="list-group-item movie"
                >
                    <div className="showtimes-row">
                        <img src="https://cdn.galaxycine.vn/media/2023/4/17/450wx300h_1681703427699.jpg"></img>
                        <i className="icon-c16"></i>
                        <div className="title-movie">
                            <p className="upper-text ng-binding">
                                Lật Mặt 6: Tấm Vé Định Mệnh
                            </p>
                            <p className="vn upper-text ng-binding"></p>
                        </div>
                    </div>
                </a>
            </li>
            <li
                ng-repeat="movie in items.movies"
                // ng-click="getCinemaByMovie(movie,$index)"
                className="ng-scope"
            >
                <a
                    href="javascript:;"
                    // ng-className='{"active":currentMovie==$index}'
                    className="list-group-item movie"
                >
                    <div className="showtimes-row">
                        <img src="https://cdn.galaxycine.vn/media/2023/4/27/450x300_1682565516691.jpg"></img>
                        <i className="icon-c16"></i>
                        <div className="title-movie">
                            <p className="upper-text ng-binding">
                                Con Nhót Mót Chồng
                            </p>
                            <p className="vn upper-text ng-binding"></p>
                        </div>
                    </div>
                </a>
            </li>
            <li
                // ng-repeat="movie in items.movies"
                // ng-click="getCinemaByMovie(movie,$index)"
                className="ng-scope"
            >
                <a
                    href="javascript:;"
                    // ng-className='{"active":currentMovie==$index}'
                    className="list-group-item movie"
                >
                    <div className="showtimes-row">
                        <img src="https://cdn.galaxycine.vn/media/2023/4/24/450x300_1682320154561.jpg"></img>
                        <i className="icon-c13"></i>
                        <div className="title-movie">
                            <p className="upper-text ng-binding">
                                Guardians Of The Galaxy Vol.3
                            </p>
                            <p className="vn upper-text ng-binding">
                                Vệ Binh Dải Ngân Hà 3
                            </p>
                        </div>
                    </div>
                </a>
            </li>
            <li
                // ng-repeat="movie in items.movies"
                // ng-click="getCinemaByMovie(movie,$index)"
                className="ng-scope"
            >
                <a
                    href="javascript:;"
                    // ng-className='{"active":currentMovie==$index}'
                    className="list-group-item movie"
                >
                    <div className="showtimes-row">
                        <img src="https://cdn.galaxycine.vn/media/2023/5/15/doraemon-utopia-1_1684121820088.jpg"></img>
                        <i className=""></i>
                        <div className="title-movie">
                            <p className="upper-text ng-binding">
                                Doraemon: Nobita’s Sky Utopia 2023
                            </p>
                            <p className="vn upper-text ng-binding">
                                Phim Điện Ảnh Doraemon: Nobita và Vùng Đất Lý
                                Tưởng Trên Bầu Trời
                            </p>
                        </div>
                    </div>
                </a>
            </li>
            <li
                // ng-repeat="movie in items.movies"
                // ng-click="getCinemaByMovie(movie,$index)"
                className="ng-scope"
            >
                <a
                    // href="javascript:;"
                    // ng-className='{"active":currentMovie==$index}'
                    className="list-group-item movie"
                >
                    <div className="showtimes-row">
                        <img src="https://cdn.galaxycine.vn/media/2023/4/28/450_1682666859057.jpg"></img>
                        <i className="icon-c18"></i>
                        <div className="title-movie">
                            <p className="upper-text ng-binding">Sisu</p>
                            <p className="vn upper-text ng-binding">
                                Già Gân Báo Thù
                            </p>
                        </div>
                    </div>
                </a>
            </li>
            <li
                // ng-repeat="movie in items.movies"
                // ng-click="getCinemaByMovie(movie,$index)"
                className="ng-scope"
            >
                <a
                    // href="javascript:;"
                    // ng-className='{"active":currentMovie==$index}'
                    className="list-group-item movie"
                >
                    <div className="showtimes-row">
                        <img src="https://cdn.galaxycine.vn/media/2023/5/5/450wx300h_1683254983194.jpg"></img>
                        <i className=""></i>
                        <div className="title-movie">
                            <p className="upper-text ng-binding">Fireheart</p>
                            <p className="vn upper-text ng-binding">
                                Cô Bé Cứu Hỏa
                            </p>
                        </div>
                    </div>
                </a>
            </li> */}
        </ul>
    );
}
export default NavFilms;
