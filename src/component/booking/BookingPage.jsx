import { useState, useEffect } from "react";
import ChooseDate from "./ChooseDate";
import NavFilms from "./NavFilms";
import axios from "axios";
import Header from "../../components/home/Header";
import AppFooter from "../../components/home/AppFooter";
export default function BookablesPage() {
    const listFilms = [];
    // const bookablesInGroup = data.bookables.filter((b) => b.group === group);
    const [films, setFilms] = useState(null);
    useEffect(() => {
        fetch("https://localhost:7113/api/Films/nowShowing")
            .then((resp) => resp.json())
            .then((data) => setFilms(data.data));
    }, []);
    const [filmSelected, setFilmSelected] = useState(null);
    const getIdFilm = () => {
        return filmSelected === null ? "" : filmSelected.id;
    };
    const [dataForm, setFormData] = useState({
        filmId: getIdFilm(),
        scheduleId: "",
        listServiceId: [],
        listSeatId: [],
    });

    useEffect(() => {
        setFormData({
            filmId: getIdFilm(),
            scheduleId: "",
            listServiceId: [],
            listSeatId: [],
        });
    }, [filmSelected]);

    const handleChange = (name, value) => {
        setFormData({ ...dataForm, [name]: value });
    };
    console.log(" data", dataForm);
    var token = sessionStorage.getItem("token");
    const postData = async () => {
        try {
            const response = await axios.post(
                "https://localhost:7113/api/Bookings/CreateBookingByUser",
                dataForm,
                {
                    headers: {
                        "Content-Type": "application/json",
                        Authorization: `Bearer ${token}`,
                    },
                }
            );
            if (response?.data?.code === 200) {
                window.location = response.data?.data;
            }
            console.log(response.data); // Process the response data
        } catch (error) {
            console.error(error);
        }
    };
    // const [TabIndex, setTabIndex] = useState(0);
    return (
        <div>
            <Header />
            <div className="container booking-page" style={{marginBottom:"30px"}}>
                <h1>ĐẶT VÉ</h1>
                <div className="main-booking row">
                    <div className="nav-films col col-xxl-4">
                        <NavFilms
                            listFilms={films === null ? listFilms : films}
                            setFilm={setFilmSelected}
                        />
                    </div>
                    <div className="content-booking col col-xxl-8 row">
                        {filmSelected === null ? (
                            <div className="bottom row">
                                <p className="please-film">
                                    Vui lòng chọn film
                                </p>
                            </div>
                        ) : (
                            <div className="bottom row">
                                <div className="movie-booking row">
                                    <h4>Chọn ngày chiếu</h4>
                                    <ChooseDate
                                        film={filmSelected}
                                        setData={handleChange}
                                        postData={postData}
                                    />
                                    {/* <ChooseServices />
                                <Pay /> */}
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </div>
            <AppFooter />
        </div>
    );
}
