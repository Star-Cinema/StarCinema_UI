import ChooseServices from "./ChooseServices";
import { useState, useEffect } from "react";
import Pay from "./Pay";
import SeatLoad from "./SeatLoad";
import ShowCase from "./ShowCase";
const rows = [0, 10, 20, 30];
function ChooseSeats({ timeIndex, idFilm, setData, price, postData }) {
    const [listSeats, setListSeats] = useState(null);
    const [servicesSelected, setServicesSelected] = useState([]);
    const [seatsSelected, setSeatsSelected] = useState([]);
    useEffect(() => {
        setListSeats(null);
        setServicesSelected([]);
        setSeatsSelected([]);
        if (timeIndex === null) {
        } else {
            fetch(
                `https://localhost:7113/api/Bookings/GetSeats?filmId=${idFilm}&scheduleId=${timeIndex}`
            )
                .then((resp) => resp.json())
                .then((data) => setListSeats(data.data));
        }
    }, [timeIndex]);
    
    const [services, setServices] = useState(null);
    const [listServicesS, setListServicesS] = useState([]);
    useEffect(() => {
        setData("listServiceId", servicesSelected);
        
        if (services !== null) {
            const selectedData = services.filter((item) =>
                servicesSelected.includes(item.id)
            );
            setListServicesS(selectedData);
            console.log("data: " + selectedData);
        }
    }, [servicesSelected]);
    const handleServicesId = (value) => {
        const newArray = [...value]; // Create a new array using spread operator
        setServicesSelected(newArray);
    };

    
    useEffect(() => {
        setData("listSeatId", seatsSelected);
    }, [seatsSelected]);

    useEffect(() => {
        if (seatsSelected === null) {
        } else {
            fetch(
                "https://localhost:7113/Service?PageIndex=0&PageSize=10&SortColumn=Name&SortOrder=ASC"
            )
                .then((resp) => resp.json())
                .then((data) => {
                    setServices(data.data);
                });
        }
    }, [seatsSelected]);
    const handleSeatsId = (type, value) => {
        if (type === 1) {
            const newArray = [...seatsSelected]; // Create a new array using spread operator
            newArray.push(value); // Add the new element to the new array
            setSeatsSelected(newArray);
        } else {
            let arrayIdSeatsNew =
                seatsSelected === null
                    ? seatsSelected
                    : seatsSelected.filter((item) => item !== value);
            setSeatsSelected([...arrayIdSeatsNew]);
        }
    };
    return (
        <div>
            {listSeats === null ? (
                " "
            ) : (
                <div>
                    <h4>Choose Seat(s)</h4>
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

                    {seatsSelected.length > 0 ? (
                        <div>
                            {/* <Demo /> */}
                            <ChooseServices
                                services={services}
                                handleServicesId={handleServicesId}
                            />
                            <Pay
                                seats={seatsSelected}
                                price={price}
                                services={listServicesS}
                                postData={postData}
                            />
                        </div>
                    ) : (
                        ""
                    )}
                </div>
            )}
        </div>
    );
}
export default ChooseSeats;
