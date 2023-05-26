import Form from "react-bootstrap/Form";
import React from "react";
import { Select, Space } from "antd";

const { Option } = Select;

function ChooseServices({ services, handleServicesId }) {
    // const handle = (event) => {
    //     handleServicesId(1, event.target.value);
    // };
    const handleChange = (value) => {
        handleServicesId(value);
        // console.log(`selected ${value}`);
    };
    return (
        <div className="choose-service">
            <h4 fo="inputService" className="form-label">
                Choose Services
            </h4>
            {/* <Form.Select
                aria-label="Default select example"
                id="inputService"
                onChange={handle}
            >
                <option>Open this select menu</option>
                {services.map((service) => {
                    return <option value={service.id}>{service.name}</option>;
                })}
            </Form.Select> */}
            {services === null ? (
                ""
            ) : (
                <Select
                    mode="multiple"
                    style={{ width: "100%" }}
                    placeholder="select one country"
                    defaultValue={[]}
                    // onChange={handleChange}
                    onChange={handleChange}
                    optionLabelProp="label"
                >
                    {services.map((service, index) => {
                        return (
                            <Option
                                value={service.id}
                                label={service.name}
                                key={index}
                            >
                                <Space>{service.name + " " + service.price} </Space>
                            </Option>
                        );
                    })}
                </Select>
            )}
        </div>
    );
}

export default ChooseServices;
