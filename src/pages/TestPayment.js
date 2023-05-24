import React from 'react';
import { Button } from 'antd';
import axios from 'axios';
import { redirect } from 'react-router';

const handlePayment = () => {
    axios.post('https://localhost:7113/api/VnPay?bookingId=1&PriceTicket=100000&PirceService=50000').then((response) => {
        console.log(response.data);
        window.location= response.data?.data;
    });
}

function TestPayment(props) {
    return (
        <div>
            <h3>Test chức năng thanh toán</h3>
            <Button type="primary" size="large" onClick={handlePayment}>Thanh toán</Button>
        </div>
    );
}

export default TestPayment;