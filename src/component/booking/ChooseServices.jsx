import Form from "react-bootstrap/Form";

function ChooseServices({ services, handleServicesId }) {
    const handle = (event) => {
        handleServicesId(1, event.target.value);
     };
    return (
        <div className="choose-service">
            <label fo="inputService" className="form-label">
                Services
            </label>
            <Form.Select aria-label="Default select example" id="inputService" onChange={handle}>
                <option>Open this select menu</option>
                {services.map((service) => {
                    return (
                        <option
                            value={service.id}
                        >
                            {service.name}
                        </option>
                    );
                })}
            </Form.Select>
        </div>
    );
}

export default ChooseServices;
