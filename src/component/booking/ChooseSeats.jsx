import ChooseServices from "./ChooseServices";
import { useState, useEffect } from "react";
import Pay from "./Pay";
import SeatLoad from "./SeatLoad";
import ShowCase from "./ShowCase";
const rows = [0, 10, 20, 30];
function ChooseSeats({ listSeats, setData }) {
    const [seatsSelected, setSeatsSelected] = useState([]);
    useEffect(() => {
        setData("listSeatIds", seatsSelected);
        console.log(seatsSelected);
    }, [seatsSelected]);
    const handleSeatsId = (type, value) => {
        if (type === 1) {
            const newArray = [...seatsSelected]; // Create a new array using spread operator
            newArray.push(value); // Add the new element to the new array
            // console.log(value);
            setSeatsSelected(newArray);
        } else {
            let arrayIdSeatsNew = seatsSelected === null ? seatsSelected : seatsSelected.filter(
                (item) => item !== value
            );
            setSeatsSelected([...arrayIdSeatsNew]);
        }
        
    };
    return (
        <div>
            <h4>Choose Seat(s)</h4>
            {/* <div className="screen" /> */}
            <div className="choose-seat">
                {rows.map((row, index) => {
                    return (
                        <div
                            className="btn-toolbar"
                            role="toolbar"
                            aria-label="Toolbar with button groups"
                            key={index}
                        >
                            <div
                                className="btn-group me-2"
                                role="group"
                                aria-label="Third group"
                            >
                                {listSeats
                                    .slice(0 + row, 2 + row)
                                    .map((seat, index) => {
                                        return (
                                            <SeatLoad
                                                key={index}
                                                seat={seat}
                                                // setData={setData}
                                                // setSeat={setSeat}
                                                handleSeatsId={
                                                    handleSeatsId
                                                }
                                            />
                                        );
                                    })}
                            </div>
                            <div
                                className="btn-group me-2"
                                role="group"
                                aria-label="First group"
                            >
                                {listSeats
                                    .slice(2 + row, 6 + row)
                                    .map((seat, index) => {
                                        return (
                                            <SeatLoad
                                                key={index}
                                                seat={seat}
                                                handleSeatsId={
                                                    handleSeatsId
                                                }
                                                // setSeat={setSeat}
                                            />
                                        );
                                    })}
                            </div>
                            <div
                                className="btn-group me-2"
                                role="group"
                                aria-label="Second group"
                            >
                                {listSeats
                                    .slice(6 + row, 9 + row)
                                    .map((seat, index) => {
                                        return (
                                            <SeatLoad
                                                key={index}
                                                seat={seat}
                                                handleSeatsId={
                                                    handleSeatsId
                                                }
                                                // setSeat={setSeat}
                                            />
                                        );
                                    })}
                            </div>
                        </div>
                    );
                })}
                <ShowCase />
            </div>

            <ChooseServices />
            <Pay />
        </div>
    );
}
export default ChooseSeats;
