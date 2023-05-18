function SeatLoadAll({ listTenSeats }) {
    return(
        <div
        class="btn-toolbar"
        role="toolbar"
        aria-label="Toolbar with button groups"
    >
        <div class="btn-group me-2" role="group" aria-label="Third group">
            <button type="button" class="btn btn-info">
                1
            </button>
            <button type="button" class="btn btn-info">
                2
            </button>
        </div>
        <div class="btn-group me-2" role="group" aria-label="First group">
            <button type="button" class="btn btn-primary">
                3
            </button>
            <button type="button" class="btn btn-primary">
                4
            </button>
            <button type="button" class="btn btn-primary">
                5
            </button>
            <button type="button" class="btn btn-primary">
                6
            </button>
        </div>
        <div class="btn-group me-2" role="group" aria-label="Second group">
            <button type="button" class="btn btn-secondary">
                7
            </button>
            <button type="button" class="btn btn-secondary">
                8
            </button>
            <button type="button" class="btn btn-secondary">
                9
            </button>
            <button type="button" class="btn btn-secondary">
                10
            </button>
        </div>
    </div>
    );
}

export default SeatLoadAll;
