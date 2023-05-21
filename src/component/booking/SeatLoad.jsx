import { useState } from "react";
function SeatLoad({ seat, setData, setSeat }) {
    const [status, setStatus] = useState(seat.status);
    // const [TabIndex, setTabIndex] = useState(0);
    let seatClass = "btn btn-info seat-available";
    let isButtonDisabled = false;
    if (status === "unavailable") {
        seatClass = "btn btn-info seat-unavailable";
        isButtonDisabled = true;
    }
    if (status === "choosen") {
        seatClass = "btn btn-info seat-choosen";
    }
    return (
        <button
            type="button"
            // className="btn btn-info"
            className={seatClass}
            disabled={isButtonDisabled}
            onClick={() => {
                if(status === "available"){
                    setStatus("choosen");
                    setSeat(1, "listSeatIds", seat.id);
                }else{
                    setStatus("available");
                    setSeat(2, "listSeatIds", seat.id);
                }
            }}
        >
            {seat.name}
        </button>
    );
}

export default SeatLoad;
