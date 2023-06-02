
import axios from "axios";
import { useEffect, useState } from "react";
import { TbAlertCircle } from "react-icons/tb";
import { EyeOutlined } from "@ant-design/icons";
import { Button, Modal, Table } from "antd";
import Barcode from "react-barcode";

//Show history transactions of user HungTD34
function Transactions() {
    const [bookings, setBooking] = useState()
    const [code, setCode] = useState()
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
                status: booking?.status == "Success" ? <Button style={{ width: "150px" }} type="primary">Thành công</Button> :
                    booking?.status == "Pending" ? <Button style={{ width: "150px" }}>Chưa thanh toán</Button> : <Button type="primary" danger style={{ width: "150px" }}>Thất bại</Button>,
                function: booking?.status == "Success" && <EyeOutlined onClick={() => showBarcode(booking)} id={1} />
                // barcode : <div className = "barcode"><Barcode height={50} width={1} displayValue = {false} value={booking} /></div>
            })
        ))

        setData(list)
    }

    const showBarcode = (booking) => {
        setCode("Booking id : " + booking?.id)
        showModal()
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
        {
            title: 'Trạng thái',
            dataIndex: 'status',
        },
        {
            title: '',
            dataIndex: 'function',
            // dataIndex: 'barcode',
        },
    ];

    const [isModalOpen, setIsModalOpen] = useState(false);
    const showModal = () => {
        setIsModalOpen(true);
    };
    const handleOk = () => {
        setIsModalOpen(false);
    };
    const handleCancel = () => {
        setIsModalOpen(false);
    };

    return (
        <>
            <div className="table" style={{ minHeight: "45vh" }}>
                <Table columns={columns} dataSource={data} size="middle" />
            </div>

            <Modal title="Mã booking" open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
                <div
                    style={{
                        display: "flex",
                        justifyContent: "center"
                    }}
                >
                    <Barcode
                        height={70}
                        width={2}
                        displayValue={false}
                        // value={code}
                        value={code}
                    />
                </div>
            </Modal>
        </>
    );
}

export default Transactions;
