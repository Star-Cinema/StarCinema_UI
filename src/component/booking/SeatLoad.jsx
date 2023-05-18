function SeatLoad({ setSeatIds, statusNow }) {
    const [TabIndex, setTabIndex] = useState(0);
    return (
        <button type="button" class="btn btn-info" onClick={() => setSeatIds}>
            1
        </button>
    );
}

export default SeatLoad;
