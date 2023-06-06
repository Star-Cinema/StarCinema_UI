import { useState, useEffect } from "react";
import ChooseSeats from "./ChooseSeats";
function ChooseTime({ listTimes, setData, idFilm, price, postData, setTime }) {
    console.log("id: ", setTime);
    const [timeIndex, setTimeIndex] = useState(
        setTime === null ? null : setTime.id
    );
    useEffect(() => {
        if (setTime !== null) {
            setTimeIndex(setTime?.id);
            setData("scheduleId", setTime?.id);
        } else {
            setTimeIndex(null);
        }
    }, []);
    return (
        <div>
            <h4>Chọn khung giờ</h4>
            <ul className="choose-dates items-list-nav">
                {listTimes.dates.map((time, index) => (
                    <li
                        key={index}
                        className={
                            time.id === timeIndex ? "selected col" : "col"
                        }
                    >
                        <button
                            className="btn"
                            onClick={() => {
                                setTimeIndex(time.id);
                                setData("scheduleId", time.id);
                            }}
                        >
                            {new Date(time.date).getHours() +
                                ":" +
                                (new Date(time.date).getMinutes() === 0
                                    ? "00"
                                    : new Date(time.date).getMinutes())}
                        </button>
                    </li>
                ))}
            </ul>
            <hr></hr>
            {timeIndex === null ? (
                ""
            ) : (
                <ChooseSeats
                    timeIndex={timeIndex}
                    idFilm={idFilm}
                    setData={setData}
                    price={price}
                    postData={postData}
                />
            )}
        </div>
    );
}
export default ChooseTime;
