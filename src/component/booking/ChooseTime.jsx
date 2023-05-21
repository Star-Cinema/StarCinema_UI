import { useState } from "react";
import ChooseSeats from "./ChooseSeats";
function createSeats() {
    const seats = [];
    const rows = ["A", "B", "C", "D"];
    const columns = 10;

    for (let i = 0; i < rows.length; i++) {
        if (i <= 1) {
            for (let j = 1; j <= columns; j++) {
                const seat = {
                    id: rows[i] + j,
                    name: rows[i] + j,
                    status: "available", // Trạng thái mặc định là "available"
                };
                seats.push(seat);
            }
        } else {
            for (let j = 1; j <= columns; j++) {
                const seat = {
                    id: rows[i] + j,
                    name: rows[i] + j,
                    status: "unavailable", // Trạng thái mặc định là "available"
                };
                seats.push(seat);
            }
        }
    }

    return seats;
}

// Sử dụng hàm để tạo danh sách ghế
const seatList = createSeats();
function ChooseTime({ listTimes, setData, setSeat }) {
    const [timeIndex, setTimeIndex] = useState(null);
    return (
        <div>
            <h4>Choose Time</h4>
            <ul className="choose-dates items-list-nav">
                {listTimes.map((time, index) => (
                    <li
                        key={index}
                        className={index === timeIndex ? "selected" : null}
                    >
                        <button
                            className="btn"
                            onClick={() => {
                                setTimeIndex(index);
                                setData("scheduleId", time.id);
                            }}
                        >
                            {time.date.getHours() +
                                ":" +
                                time.date.getMinutes()}
                        </button>
                    </li>
                ))}
            </ul>
            <hr></hr>
            <h4>Choose Seat(s)</h4>
            {timeIndex === null ? (
                ""
            ) : (
                <ChooseSeats
                    listSeats={seatList}
                    setData={setData}
                    setSeat={setSeat}
                />
            )}
        </div>
    );
}
export default ChooseTime;
