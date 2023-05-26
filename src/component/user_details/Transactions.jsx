
import axios from "axios";
import { useEffect, useState } from "react";
import { TbAlertCircle } from "react-icons/tb";
import { EyeOutlined } from "@ant-design/icons";
import { Table } from "antd";

//Show history transactions of user HungTD34
function Transactions() {
    const [bookings, setBooking] = useState()
    const [data, setData] = useState([])
    useEffect(() => {
        fecthData()
    }, [])
    const fecthData = async () => {
        var res = await axios.get("https://localhost:7113/api/Bookings/GetTransactionHistory?page=1&pageSize=10",
            {
                headers: { "Authorization": `Bearer ${sessionStorage.getItem('token')}` }
            })

        console.log(res?.data?.data?.listItem)
        // setBooking(res?.data?.data?.listItem)

        const list = []
        res?.data?.data?.listItem?.map((booking, index) => (
            list.push({
                id: booking?.id,
                createAt: booking?.createAt?.slice(0, 10),
                filmName: booking?.filmName,
                totalPrice: booking?.totalPrice,
                function: <EyeOutlined />,
            })
        ))

        setData(list)
    }

    const columns = [
        {
            title: 'Mã giao dịch',
            dataIndex: 'id',
        },
        {
            title: 'Ngày',
            dataIndex: 'createAt',
        },
        {
            title: 'Phim',
            dataIndex: 'filmName',
        },
        {
            title: 'Thành tiền',
            dataIndex: 'totalPrice',
        },
        // {
        //     title: '',
        //     dataIndex: 'function',
        // },
    ];

    return (
        // <table className="table" style={{minHeight:"45vh"}}>
        //     <thead>
        //         <tr>
        //             <th scope="col">Mã giao dịch</th>
        //             <th scope="col">Ngày</th>
        //             <th scope="col">Phim</th>
        //             <th scope="col">Thành tiền</th>
        //             <th scope="col"></th>
        //         </tr>
        //     </thead>
        //     <tbody>
        //         {
        //             bookings?.map((booking, index) => (
        //                 <tr key={index} style={{height:"20px"}}>
        //                     <th scope="row">{booking?.id}</th>
        //                     <td>{booking?.createAt?.slice(0, 10)}</td>
        //                     <td>{booking?.filmName}</td>
        //                     <td>{booking?.totalPrice}</td>
        //                     <td>
        //                         <EyeOutlined />
        //                     </td>
        //                 </tr>
        //             ))
        //         }

        //     </tbody>
        // </table>
        <div className="table" style={{ minHeight: "45vh" }}>
            <Table columns={columns} dataSource={data} size="middle" />
        </div>
    );
}

export default Transactions;
