import { useState } from "react";
import ChooseSeats from "./ChooseSeats";
function createSeats() {
    const seats = [];
    const rows = ["A", "B", "C", "D"];
    const columns = 10;

    for (let i = 0; i < rows.length; i++) {
        for (let j = 1; j <= columns; j++) {
            const seat = {
                id: rows[i] + j,
                name: rows[i] + j,
                status: "available", // Trạng thái mặc định là "available"
            };
            seats.push(seat);
        }
    }

    return seats;
}

// Sử dụng hàm để tạo danh sách ghế
const seatList = createSeats();
function ChooseTime({ listTimes }) {
    const [timeIndex, setTimeIndex] = useState(0);
    return (
        <div>
            <ul className="choose-dates items-list-nav">
                {listTimes.map((time, index) => (
                    <li
                        key={index}
                        className={index === timeIndex ? "selected" : null}
                    >
                        <button
                            className="btn"
                            onClick={() => setTimeIndex(index)}
                        >
                            {time.getHours() + ":" + time.getMinutes()}
                        </button>
                    </li>
                ))}
            </ul>
            <div>
                <ChooseSeats listSeats = {seatList}/>
            </div>
        </div>
    );
}
export default ChooseTime;
