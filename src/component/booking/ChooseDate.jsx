import { useState, useEffect } from "react";
import ChooseTime from "./ChooseTime";

function getDatesFromData(data) {
    const newDates = [];
    data.data.listItem.map((date) => {
        let d = date.startTime;
        // console.log("date: " + d);
        if (new Date(d) >= Date.now()) {
            newDates.push(d);
        }
        console.log("date: " + d);
    });
    // newDates.sort((a, b) =>  - b);
    const uniqueList = [];

    newDates.forEach((date) => {
        const currentDate = new Date(
            new Date(date).getFullYear(),
            new Date(date).getMonth(),
            new Date(date).getDate()
        );

        if (!uniqueList.some((d) => d.getTime() === currentDate.getTime())) {
            uniqueList.push(currentDate);
        }
    });
    uniqueList.sort((a, b) => new Date(a) - new Date(b));
    const finalListDates = [];
    uniqueList.map((dateUnique, index) => {
        const listDatesOfUnique = [];
        newDates.map((dateNormal) => {
            const year1 = new Date(dateNormal).getFullYear();
            const month1 = new Date(dateNormal).getMonth();
            const day1 = new Date(dateNormal).getDate();

            const year2 = new Date(dateUnique).getFullYear();
            const month2 = new Date(dateUnique).getMonth();
            const day2 = new Date(dateUnique).getDate();

            if (year1 === year2 && month1 === month2 && day1 === day2) {
                data.data.listItem.map((date) => {
                    let d = date.startTime;
                    if (d === dateNormal) {
                        listDatesOfUnique.push({
                            id: date.id,
                            date: dateNormal,
                        });
                    }
                });
            }
            //
        });

        finalListDates.push({
            id: index,
            dates: listDatesOfUnique.sort(
                (a, b) => new Date(a.date) - new Date(b.date)
            ),
        });
    });
    return finalListDates;
}

var days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
function ChooseDate({ setData, film, postData, dataTime }) {
    const [datess, setDates] = useState(null);
    const [price, setPrice] = useState(0);
    const [dateSelected, setDateSelected] = useState(null);
    const [timeChoose, setTimeChoose] = useState(null);
    const [load, setLoad] = useState(true);
    useEffect(() => {
        if(load === true){
            if (datess !== null) {
                const date = datess.find(
                    (dat) => {
                        console.log(dat);
                        return dat.dates.find(d => d.date === dataTime);
                    }
                );
                if (date !== undefined) {
                    
                    setDateSelected(date);
                    setTimeChoose(date.dates.find(d => d.date === dataTime));
                    console.log("bip: ", dataTime);
                    
                }
            }
        }
        
    }, [datess]);
    var token = sessionStorage.getItem("token");
    useEffect(() => {
        fetch(`https://localhost:7113/api/Schedules?filmId=${film.id}`, {
            method: "GET", // or 'POST', 'PUT', etc. depending on your API requirements
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${token}`,
            },
        })
            .then((resp) => resp.json())
            .then((data) => {
                setPrice(data.data?.listItem[0]?.ticket?.price);
                // console.log(data);
                setDates(getDatesFromData(data));
                setDateSelected(null);
            });
    }, [film]);
    // const [dateIndex, setDateIndex] = useState(null);
    return (
        <div>
            <div className="choose-dates ">
                <ul className="items-list-nav row">
                    {datess === null
                        ? " "
                        : datess.map((date, index) => (
                              <li
                                  key={index}
                                  className={
                                      dateSelected === null
                                          ? null
                                          : date.id === dateSelected.id
                                          ? "selected"
                                          : null
                                  }
                              >
                                  <button
                                      className="btn"
                                      onClick={() => {
                                          //   setDateIndex(index);
                                          setDateSelected(date);
                                      }}
                                  >
                                      {days[
                                          new Date(date.dates[0].date).getDay()
                                      ] +
                                          " " +
                                          new Date(
                                              date.dates[0].date
                                          ).getDate() +
                                          "/" +
                                          (new Date(
                                              date.dates[0].date
                                          ).getMonth() +
                                              1)}
                                  </button>
                              </li>
                          ))}
                </ul>
            </div>
            <hr></hr>
            <div className="choose-times">
                {dateSelected === null ? (
                    ""
                ) : (
                    <ChooseTime
                        listTimes={dateSelected}
                        setData={setData}
                        idFilm={film.id}
                        price={price}
                        postData={postData}
                        setTime={timeChoose}
                    />
                )}
            </div>
        </div>
    );
}
export default ChooseDate;
