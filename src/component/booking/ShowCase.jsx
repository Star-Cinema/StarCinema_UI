function ShowCase() {
    return (
        <ul className="ShowCase">
            <li>
                <span className="seat" /> <small>Trống</small>
            </li>
            <li>
                <span className="seat selected" /> <small>Đã chọn</small>
            </li>
            <li>
                <span className="seat occupied" /> <small>Đã có người chọn</small>
            </li>
        </ul>
    );
}
export default ShowCase;