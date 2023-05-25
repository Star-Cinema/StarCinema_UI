
import axios from "axios";
import { useEffect, useState } from "react";
import { TbAlertCircle } from "react-icons/tb";
import { EyeOutlined } from "@ant-design/icons";

//Show history transactions of user HungTD34
function Transactions() {
    const [bookings, setBooking] = useState()
    useEffect(() => {
        fecthData()
    }, [])
    const fecthData = async () => {
        var res = await axios.get("https://localhost:7113/api/Bookings/GetTransactionHistory?page=1&pageSize=10",
            {
                headers: { "Authorization": `Bearer ${sessionStorage.getItem('token')}` }
            })

        console.log(res?.data?.data?.listItem)
        setBooking(res?.data?.data?.listItem)
    }
    return (
        <table className="table" style={{minHeight:"45vh"}}>
            <thead>
                <tr>
                    <th scope="col">Mã giao dịch</th>
                    <th scope="col">Ngày</th>
                    <th scope="col">Phim</th>
                    <th scope="col">Thành tiền</th>
                    <th scope="col"></th>
                </tr>
            </thead>
            <tbody>
                {
                    bookings?.map((booking, index) => (
                        <tr key={index}>
                            <th scope="row">{booking?.id}</th>
                            <td>{booking?.createAt?.slice(0, 10)}</td>
                            <td>{booking?.filmName}</td>
                            <td>{booking?.totalPrice}</td>
                            <td>
                                <EyeOutlined />
                            </td>
                        </tr>
                    ))
                }

            </tbody>
        </table>
    );
}

export default Transactions;
