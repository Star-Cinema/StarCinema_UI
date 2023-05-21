import ChooseServices from "./ChooseServices";
import Pay from "./Pay";
import SeatLoad from "./SeatLoad";
import ShowCase from "./ShowCase";
const rows = [0, 10, 20, 30];
function ChooseSeats({ listSeats, setData, setSeat }) {
    return (
        <div>
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
                                                setData={setData}
                                                setSeat={setSeat}
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
                                                setSeat={setSeat}
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
                                                setSeat={setSeat}
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
