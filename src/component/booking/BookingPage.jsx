import { useState } from "react";
import image from "../../img/docter.png";
import ChooseDate from "./ChooseDate";



export default function BookablesPage() {
    const dataTabs = [
        {
            id: 1,
            name: "CHOOSE TIME",
        },
        {
            id: 2,
            name: "CHOOSE SEAT(S)",
        },
        {
            id: 3,
            name: "PAYMENT",
        },
        {
            id: 3,
            name: "GET TICKET",
        },
    ];
    // const bookablesInGroup = data.bookables.filter((b) => b.group === group);
    const [DataForm, setFormData] = useState({
        filmId: "",
        userId: "",
        scheduleId: "",
        listSeatIds: [],
        listServices: [],
    });
    const [TabIndex, setTabIndex] = useState(0);
    return (
        <div className="container booking-page">
            <h1>BOOKING</h1>
            <ul className="bookables items-list-nav">
                {dataTabs.map((tab, index) => (
                    <li
                        key={tab.id}
                        className={index === TabIndex ? "selected" : null}
                    >
                        <button
                            className="btn"
                            onClick={() => setTabIndex(index)}
                        >
                            {tab.name}
                        </button>
                    </li>
                ))}
            </ul>
            <div className="bottom">
                <div className="movie-booking">
                    <ChooseDate />
                </div>
                <div className="movie-infor">
                    <h3>DOCTER STRANGER</h3>
                    <img src={image} alt="" />
                </div>
            </div>
        </div>
    );
}
