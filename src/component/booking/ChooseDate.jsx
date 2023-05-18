import { useState } from "react";
import ChooseTime from "./ChooseTime";
const dates = [
    new Date("2022-03-25"),
    new Date("2022-03-24"),
    new Date("2022-03-23"),
    new Date("2022-03-22"),
    new Date("2022-03-21"),
];
const times = [
    new Date(1776, 6, 4, 12, 30, 0, 0),
    new Date(1776, 6, 4, 7, 0, 0, 0),
    new Date(1776, 6, 4, 8, 0, 0, 0),
    new Date(1776, 6, 4, 14, 30, 0, 0),
    new Date(1776, 6, 4, 17, 30, 0, 0),
];
var days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
function ChooseDate() {
    const [dateIndex, setDateIndex] = useState(0);
    return (
        <div>
            <div className="choose-dates ">
                <ul className="items-list-nav">
                    {dates.map((date, index) => (
                        <li
                            key={index}
                            className={index === dateIndex ? "selected" : null}
                        >
                            <button
                                className="btn"
                                onClick={() => setDateIndex(index)}
                            >
                                {days[date.getDay()]}
                            </button>
                        </li>
                    ))}
                </ul>
            </div>
            <div className="choose-times">
                <ChooseTime listTimes={times} />
            </div>
        </div>
    );
}
export default ChooseDate;
