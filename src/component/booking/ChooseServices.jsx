import Form from "react-bootstrap/Form";
import React from "react";
import { Select, Space } from "antd";

const { Option } = Select;

function ChooseServices({ services, handleServicesId }) {
    const handleChange = (value) => {
        handleServicesId(value);
    };
    return (
        <div className="choose-service">
            <h4 fo="inputService" className="form-label">
                Chọn dịch vụ
            </h4>
            {services === null ? (
                ""
            ) : (
                <Select
                    mode="multiple"
                    style={{ width: "100%" }}
                    placeholder="Chọn dịch vụ"
                    defaultValue={[]}
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
