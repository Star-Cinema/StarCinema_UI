import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import Row from "react-bootstrap/Row";

function InforUser() {
    const [validated, setValidated] = useState(false);

    const handleSubmit = (event) => {
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
        }

        setValidated(true);
    };

    return (
        <Form noValidate validated={validated} onSubmit={handleSubmit}>
            <Row className="mb-3">
                <Form.Group as={Col} md="6" controlId="validationCustom01">
                    <Form.Label>Họ & tên</Form.Label>
                    <Form.Control
                        required
                        type="text"
                        placeholder="Trần Đức Hùng"
                        // defaultValue="Mark"
                    />
                    <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                    <Form.Control.Feedback type="invalid">
                        Vui lòng chọn một tên hợp lệ.
                    </Form.Control.Feedback>
                </Form.Group>
            </Row>
            <Row className="mb-3">
                <Form.Group as={Col} md="4" controlId="validationCustom02">
                    <Form.Label>Ngày sinh</Form.Label>
                    <Form.Control
                        required
                        type="date"
                        placeholder="Date of birds"
                        // defaultValue="Otto"
                    />
                    <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                    <Form.Control.Feedback type="invalid">
                        Vui lòng chọn một ngày sinh hợp lệ.
                    </Form.Control.Feedback>
                    {/* <Form.Control.Feedback>Looks good!</Form.Control.Feedback> */}
                </Form.Group>
                <Form.Group
                    as={Col}
                    md="3"
                    controlId="validationCustomUsername"
                >
                    <Form.Label>Giới tính</Form.Label>
                    <InputGroup hasValidation>
                        <InputGroup.Text id="inputGroupPrepend">
                            @
                        </InputGroup.Text>
                        <Form.Select
                            aria-label="Default select example"
                            defaultValue={1}
                        >
                            <option value="1">Nam</option>
                            <option value="2">Nữ</option>
                            <option value="3">Chưa rõ</option>
                        </Form.Select>
                        <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                        <Form.Control.Feedback type="invalid">
                            Vui lòng chọn một giới tính hợp lệ.
                        </Form.Control.Feedback>
                    </InputGroup>
                </Form.Group>
                <Form.Group as={Col} md="4" controlId="validationCustom03">
                    <Form.Label>Số điện thoại</Form.Label>
                    <Form.Control
                        type="number"
                        placeholder="Phone number"
                        required
                    />
                    <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                    <Form.Control.Feedback type="invalid">
                        Please provide a valid city.
                    </Form.Control.Feedback>
                </Form.Group>
            </Row>
            <Row className="mb-3">
                <Form.Group as={Col} md="3" controlId="validationCustom04">
                    <Form.Label>Chi tiêu</Form.Label>
                    <Form.Control
                        type="number"
                        placeholder="1$"
                        required
                        readOnly
                    />
                    <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                    <Form.Control.Feedback type="invalid">
                        Please provide a valid cost.
                    </Form.Control.Feedback>
                </Form.Group>
            </Row>
            <Row className="mb-3">
                <Form.Group as={Col} md="5" controlId="validationCustom04">
                    <Form.Label>Email</Form.Label>
                    <Form.Control
                        type="email"
                        placeholder="Unkown@gmail.com"
                        required
                    />
                    <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                    <Form.Control.Feedback type="invalid">
                        Vui lòng cung cấp một email hợp lệ.
                    </Form.Control.Feedback>
                </Form.Group>
            </Row>
            <Button type="submit">Lưu lại</Button>
        </Form>
    );
}

export default InforUser;
