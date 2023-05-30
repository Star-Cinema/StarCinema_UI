/*
    Account: AnhNT282
    Description: payment information display page
    Date created: 2023/05/20
*/
import axios from "axios";
import React, { useEffect, useState } from "react";
import { Spin } from "antd";

function VnPayReturn(props) {
    const [paymentInfo, setPaymentInfo] = useState(null);

    useEffect(() => {
        var currentUrl = window.location.href;
        var url = new URL(currentUrl);
        // Get query string from URL AnhNT282
        var queryString = url.search;
        axios
            .get("https://localhost:7113/api/VnPay" + queryString)
            .then((response) => {
                setPaymentInfo(response?.data);
            }).catch((error) => {
                setPaymentInfo(error);
                console.log(error);
            });
    }, []);

    return (
        <div style={{ minHeight: '60vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            {paymentInfo ?
                (<div className="container mt-5">
                    <div className="row">
                        <div className="col-md-6 offset-md-3">
                            <div className="card">
                                <div className="card-body">

                                    {paymentInfo?.code == 200 ? (
                                        <div>
                                            <h1 className="text-center">
                                                Thông tin thanh toán
                                            </h1>
                                            <h3 className="mt-4 text-success">
                                                Thanh toán thành công
                                            </h3>
                                            <div className="mb-3">
                                                <label className="form-label">
                                                    Mã booking:
                                                </label>
                                                <p className="form-control">
                                                    {paymentInfo?.data?.bookingId}
                                                </p>
                                            </div>
                                            <div className="mb-3">
                                                <label className="form-label">
                                                    Giá vé:
                                                </label>
                                                <p className="form-control">
                                                    {paymentInfo?.data?.priceTicket}
                                                </p>
                                            </div>
                                            <div className="mb-3">
                                                <label className="form-label">
                                                    Giá dịch vụ:
                                                </label>
                                                <p className="form-control">
                                                    {
                                                        paymentInfo?.data
                                                            ?.priceService
                                                    }
                                                </p>
                                            </div>
                                            <div className="mb-3">
                                                <label className="form-label">
                                                    Tổng:
                                                </label>
                                                <p className="form-control">
                                                    {paymentInfo?.data?.total}
                                                </p>
                                            </div>
                                        </div>
                                    ) : (
                                        <div style={{textAlign: 'center'}}>
                                            <h3 className="mt-4 text-danger">
                                                Thanh toán thất bại
                                            </h3>
                                            <p>{paymentInfo?.message}</p>
                                        </div>
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>)
                : <Spin tip="Loading" size="large">
                </Spin>}

        </div>
    );
}

export default VnPayReturn;
