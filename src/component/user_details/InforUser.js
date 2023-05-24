import { Button, Cascader, Col, DatePicker, Form, Input, InputNumber, Radio, Row, Select, Switch, TreeSelect } from "antd";
import TextArea from "antd/es/input/TextArea";
import axios from "axios";
import moment from "moment/moment";
import React, { useEffect, useState } from "react";

//Show infomation of user HungTD34
function InforUser() {
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

    //Update infomation when submit form HungTD34
    const handleFinish = async () => {
        var data = form.getFieldValue()

        var user = {
            Name: data.name,
            Email: data.email,
            Phone: data.phone,
            Avatar: data.avatar,
            Gender: data.gender,
            Dob: data.dob.toISOString()
        }

        console.log(user)

        var res = await axios.put("https://localhost:7113/api/my/update",
            user,
            {
                headers: {
                    "Authorization": `Bearer ${sessionStorage.getItem('token')}`,
                    "Content-Type": "application/json"
                }
            })

        if (res?.data?.code == 200) {
            window.location.reload()
        }
    }

    //Request verify email if email is not verify HungTD34
    const handleVerify = async () => {
        var res = await axios.get("https://localhost:7113/api/my/verify", { headers: { "Authorization": `Bearer ${sessionStorage.getItem('token')}` } })
        if(res?.data.code == 200) alert("Check your email")
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
                <Col span={24} md={12}>
                    <Form.Item name="email" label="Email">
                        <Input name="email" disabled={data?.isEmailVerified} />
                    </Form.Item>
                </Col>
                <Col span={24} md={12}>
                    <Form.Item name="name" label="Họ và tên"
                        rules={[
                            {
                                required: true,
                            },
                            {
                                type: 'string',
                            },
                        ]}
                    >
                        <Input name="name" />
                    </Form.Item>
                </Col>
            </Row>
            <Row gutter={[24, 0]} span={24} >
                <Col span={24} md={12}>
                    <Form.Item name="phone" label="Số điện thoại"
                        rules={[
                            {
                                required: true,
                            },
                            {
                                type: 'string',
                                len: 10
                            },
                        ]}
                    >
                        <Input name="phone" />
                    </Form.Item>
                </Col>
                <Col span={24} md={12}>
                    <Form.Item name="dob" label="Ngày sinh"
                        rules={[
                            {
                                required: true,
                            }
                        ]}
                    >
                        <DatePicker style={{ width: "100%", height: "48px" }} />
                    </Form.Item>
                </Col>
            </Row>
            <Form.Item label="Giới tính" name='gender'>
                <Radio.Group>
                    <Radio value={true}> Nam </Radio>
                    <Radio value={false}> Nữ </Radio>
                </Radio.Group>
            </Form.Item>
            {/* <Form.Item label="Select">
                <Select>
                    <Select.Option value="demo">Demo</Select.Option>
                </Select>
            </Form.Item>
            <Form.Item label="DatePicker">
                <DatePicker />
            </Form.Item>
            <Form.Item label="InputNumber">
                <InputNumber />
            </Form.Item>
            <Form.Item label="TextArea">
                <TextArea rows={4} />
            </Form.Item>
            <Form.Item label="Switch" valuePropName="checked">
                <Switch />
            </Form.Item> */}
            {/* <Form.Item label="Upload" valuePropName="fileList" getValueFromEvent={normFile}>
                <Upload action="/upload.do" listType="picture-card">
                    <div>
                        <PlusOutlined />
                        <div
                            style={{
                                marginTop: 8,
                            }}
                        >
                            Upload
                        </div>
                    </div>
                </Upload>
            </Form.Item> */}
            <Form.Item style={{ textAlign: "center" }}>
                {
                    !data?.isEmailVerified&&
                    <Button type="default" style={{ height: "48px", color: "#000" }} onClick={() => handleVerify()}>Verify</Button>
                }
                <Button htmlType="submit" type="primary" style={{ height: "48px", backgroundColor: "#fc3", color: "#000" }}>Cập nhật</Button>
            </Form.Item>
        </Form>
    );
}

export default InforUser;
