import Form from "react-bootstrap/Form";

function ChooseServices() {
    return (
        <div className="choose-service">
          <label fo="inputService" className="form-label">Services</label>
            <Form.Select aria-label="Default select example" id="inputService">
                <option>Open this select menu</option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
            </Form.Select>
        </div>
    );
}

export default ChooseServices;
