import { useState, useEffect } from "react";
import ChooseTime from "./ChooseTime";

const dates = [
    new Date("2022-03-25"),
    new Date("2022-03-24"),
    new Date("2022-03-23"),
    new Date("2022-03-22"),
    new Date("2022-03-21"),
];
const times = [
    {
        id: "1",
        date: new Date(1776, 6, 4, 12, 30, 0, 0),
    },
    {
        id: "2",
        date: new Date(1776, 6, 4, 7, 0, 0, 0),
    },
    {
        id: "3",
        date: new Date(1776, 6, 4, 8, 0, 0, 0),
    },
    {
        id: "4",
        date: new Date(1776, 6, 4, 14, 30, 0, 0),
    },
    {
        id: "5",
        date: new Date(1776, 6, 4, 17, 30, 0, 0),
    },
];

function getDatesFromData(data) {
    const newDates = [];
    data.data.listItem.map((date) => {
        let d = date.startTime;
        newDates.push(d);
    });
    newDates.sort((a, b) => a - b);
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
    // console.log("schedule: " + uniqueList.length);
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
                console.log("uni: " + uniqueList);
                listDatesOfUnique.push(dateNormal);
            }
        });
        finalListDates.push({
            id: index,
            dates: listDatesOfUnique,
        });
    });
    return finalListDates;
}

var days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
function ChooseDate({ setData, film }) {
    const [datess, setDates] = useState(null);
    const [dateSelected, setDateSelected] = useState(null);
    useEffect(() => {
        fetch(`https://localhost:7113/api/Schedules?filmId=${film.id}`)
            .then((resp) => resp.json())
            .then((data) => {
                setDates(getDatesFromData(data));
                setDateSelected(null);
            });
    }, [film]);
    // const [dateIndex, setDateIndex] = useState(null);
    return (
        <div>
            <div className="choose-dates ">
                <ul className="items-list-nav">
                    {datess === null
                        ? " "
                        : datess.map((date, index) => (
                              <li
                                  key={index}
                                  className={
                                      dateSelected === null ? null : date.id === dateSelected.id ? "selected" : null
                                  }
                              >
                                  <button
                                      className="btn"
                                      onClick={() => {
                                        //   setDateIndex(index);
                                          setDateSelected(date);
                                      }}
                                  >
                                      {days[new Date(date.dates[0]).getDay()]}
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
                    />
                )}
            </div>
        </div>
    );
}
export default ChooseDate;
