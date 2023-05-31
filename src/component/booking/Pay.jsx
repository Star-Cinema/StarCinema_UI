import numeral from 'numeral';
function Pay({ price, seats, services, postData }) {
    return (
        <div className="row">
            <div className="row">
                <div className="col-xl-8">
                </div>
                <div className="col-xl-4">
                    <ul className="list-unstyled">
                        <li className="text-muted">
                            <span className="text-black me-4">Giá vé: </span>{price * seats.length}
                        </li>
                        <li className="text-muted mt-2">
                            <span className="text-black me-4">Giá dịch vụ</span>{services !== null ? services.reduce((sum, service) => sum + service.price, 0) : ""}
                        </li>
                    </ul>
                    <p className="text-black float-start">
                        <span className="text-black me-3"> Tổng cộng</span>
                        <span >{numeral(price * seats.length + (services !== null ? services.reduce((sum, service) => sum + service.price, 0) : 0)).format('0,0.00')}đ</span>
                    </p>
                </div>
            </div>
            <hr></hr>
            <div className="row">
                <div className="col-xl-9">
                    <p>Tiến hành thanh toán để nhận vé ngay nào !!!!</p>
                </div>
                <div className="col-xl-3">
                    <button
                        type="button"
                        className="btn btn-primary text-capitalize"
                        onClick={postData}
                    >
                        Thanh toán 
                    </button>
                </div>
            </div>
        </div>
    );
}
export default Pay;
