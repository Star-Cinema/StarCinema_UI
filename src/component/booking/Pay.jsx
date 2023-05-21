function Pay() {
    return (
        <div className="row">
            <div className="row">
                <div className="col-xl-8">
                    <p className="ms-3">
                        Add additional notes and payment information
                    </p>
                </div>
                <div className="col-xl-3">
                    <ul className="list-unstyled">
                        <li className="text-muted ms-3">
                            <span className="text-black me-4">Seat(s)</span>$1110
                        </li>
                        <li className="text-muted ms-3 mt-2">
                            <span className="text-black me-4">Services</span>$111
                        </li>
                    </ul>
                    <p className="text-black float-start">
                        <span className="text-black me-3"> Total Amount</span>
                        <span >$1221</span>
                    </p>
                </div>
            </div>
            <hr></hr>
            <div className="row">
                <div className="col-xl-10">
                    <p>Thank you for your purchase</p>
                </div>
                <div className="col-xl-2">
                    <button
                        type="button"
                        className="btn btn-primary text-capitalize"
                        // style="background-color:#60bdf3 ;"
                    >
                        Pay Now
                    </button>
                </div>
            </div>
        </div>
    );
}
export default Pay;
