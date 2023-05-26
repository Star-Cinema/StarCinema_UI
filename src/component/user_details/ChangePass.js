import { Button, Cascader, Col, DatePicker, Form, Input, InputNumber, Radio, Row, Select, Switch, TreeSelect } from "antd";
import TextArea from "antd/es/input/TextArea";
import axios from "axios";
import moment from "moment/moment";
import React, { useEffect, useState } from "react";

//Change password of user HungTD34
function ChangePass() {
    const [form] = Form.useForm()
    const [data, setData] = useState()

    useEffect(() => {
        fecthData()
    }, [])

    //Get data when page load HungTD34
    const fecthData = async () => {
        //Get data by token HungTD34
        var res = await axios.get("https://localhost:7113/api/my", { headers: { "Authorization": `Bearer ${sessionStorage.getItem('token')}` } })

        form.setFieldsValue(
            {
                name: res?.data?.data?.name,
                email: res?.data?.data?.email,
                phone: res?.data?.data?.phone,
                gender: res?.data?.data?.gender,
                avatar: res?.data?.data?.avatar,
                dob: moment(res?.data?.data?.dob?.slice(0, 10)),
            }
        )

        // console.log(res?.data?.data)

        setData(res?.data?.data)
    }

    //Update password when submit form HungTD34
    const handleFinish = async () => {
        var data = form.getFieldValue()

        if (data.currentPass == data.newPass) 
        {
            alert("Mật khẩu mới phải khác mật khẩu hiện tại")
            return
        }

        var pass = {
            currentPass: data.currentPass,
            newPass: data.newPass,
            reNewPass: data.reNewPass
        }


        if (data.newPass == data.reNewPass) {
            try {
                var res = await axios.put("https://localhost:7113/api/my/changepass",
                    pass,
                    {
                        headers: {
                            "Authorization": `Bearer ${sessionStorage.getItem('token')}`,
                            "Content-Type": "application/json"
                        }
                    })
                if (res?.data?.code == 200) {
                    window.location.reload()
                }

            } catch (err) {
                alert("Mật khẩu bạn nhập không đúng với mật khẩu hiện tại")
            }
        }
        else alert("Mật khẩu nhập lại phải giống mật khẩu mới")


        // else console.log(res?.response?.data?.message)
    }

    //GUI HungTD34
    return (
        <Form
            labelCol={{
                span: 24,
            }}
            wrapperCol={{
                span: 24,
            }}
            layout="vertical"
            disabled={false}
            form={form}
            onFinish={handleFinish}
        >


            <Row gutter={[24, 0]} span={24} >
                <Col span={24} md={8}>
                    <Form.Item name="currentPass" label="Mật khẩu hiện tại"
                        rules={[
                            {
                                required: true,
                            },
                            {
                                type: 'string',
                            },
                        ]}
                    >
                        <Input />
                    </Form.Item>
                </Col>
                <Col span={24} md={8}>
                    <Form.Item name="newPass" label="Mật khẩu mới"
                        rules={[
                            {
                                required: true,
                            },
                            {
                                type: 'string',
                            },
                        ]}
                    >
                        <Input />
                    </Form.Item>
                </Col>
                <Col span={24} md={8}>
                    <Form.Item name="reNewPass" label="Nhập lại mật khẩu mới"
                        rules={[
                            {
                                required: true,
                            },
                            {
                                type: 'string',
                            },
                        ]}
                    >
                        <Input />
                    </Form.Item>
                </Col>
            </Row>
            <Form.Item style={{ textAlign: "center" }}>
                <Button htmlType="submit" type="primary" style={{ height: "48px", backgroundColor: "#fc3", color: "#000" }}>Cập nhật</Button>
            </Form.Item>
        </Form>
    );
}

export default ChangePass;
