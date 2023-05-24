/*
    Account : AnhNT282
    Description : payment information display page
    Date created : 2023/05/20
*/
import axios from 'axios';
import React, { useEffect, useState } from 'react';


function VnPayReturn(props) {

    const [paymentInfo, setPaymentInfo] = useState({});

    useEffect(() => {
        var currentUrl = window.location.href;
        var url = new URL(currentUrl);
        // Get query string from URL AnhNT282
        var queryString = url.search;
        axios.get("https://localhost:7113/api/VnPay" + queryString).then((response) => {
            setPaymentInfo(response?.data);
        })
    }, [])


    return (
        <div>
            <h1>Thông tin thanh toán</h1>
            {paymentInfo?.code == 200 ?
                (
                    <div>
                        <h3>Thanh toán thành công</h3>
                        <h5>Mã booking: {paymentInfo?.data?.bookingId}</h5>
                        <h5>Giá vé: {paymentInfo?.data?.priceTicket}</h5>
                        <h5>Giá dịch vụ: {paymentInfo?.data?.priceService}</h5>
                        <h5>Tổng: {paymentInfo?.data?.total}</h5>
                    </div>
                ) :
                (
                    <div>
                        <h3>Thanh toán thất bại</h3>
                        <h5>{paymentInfo?.message}</h5>
                    </div>
                )
            }

        </div>
    );
}

export default VnPayReturn;