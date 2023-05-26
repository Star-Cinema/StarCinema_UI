import { useState } from "react";
function SeatLoad({ seat, handleSeatsId }) {
    
    const [status, setStatus] = useState(seat.status);
    console.log(status);
    // const [TabIndex, setTabIndex] = useState(0);
    let seatClass = "btn btn-info seat-available";
    let isButtonDisabled = false;
    if (status === "Unavailable") {
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
                if(status === "Available"){
                    setStatus("choosen");
                    handleSeatsId(1, seat.id);
                }else{
                    setStatus("Available");
                    handleSeatsId(2, seat.id);
                }
            }}
        >
            {seat.seatName}
        </button>
    );
}

export default SeatLoad;
