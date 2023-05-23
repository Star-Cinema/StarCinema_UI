import React from 'react';
import styled from 'styled-components';
import avatarAdmin from '../../assets/icon/admin.png'
import { CloseOutlined } from '@ant-design/icons'
import { Row, Col } from 'antd';
import Message from './Message';

function BoxChat(props) {
    return (
        <ChatBoxStyles>
            <div className='box-chat'>
                <Row className="header-box-chat">

                    <Col style={{ margin: 'auto' }} span={5}>
                        <img className='avatar' src={avatarAdmin} ></img>
                    </Col>
                    <Col span={16} style={{alignSelf: "center"}}>
                        <div className='info-admin'>
                            <div className="name-admin">Admin</div>
                            <div className='status'>Online</div>
                        </div>
                    </Col>
                    <Col span={3}>
                        <CloseOutlined onClick={() => props.setShowBoxChat(false)} style={{ cursor: 'pointer', fontSize: 20, fontWeight: 600, marginTop: 15 }} />
                    </Col>
                </Row>
                <div class="content-box-chat">
                    <div className='list-message'>
                        <Message></Message>
                    </div>
                </div>


            </div>
        </ChatBoxStyles>
    );
}

export default BoxChat;
const ChatBoxStyles = styled.div`
    .box-chat {
        background-color: rgb(45 24 108 / 12%);
        height: 80vh;
        width: 400px;
        position: fixed;
        right: 15px;
        bottom: 15px;
        border-radius: 20px;
        box-shadow: #BDBDBD 0px 0px 15px 3px;
    }
    .header-box-chat {
        height: 80px;
        background: rgb(255, 255, 255);
        border-radius: inherit;
        border-bottom-left-radius: 0;
        border-bottom-right-radius: 0;
        align-items: start;
    }

    img.avatar {
        height: 60px;
        width: 60px;
        border-radius: 50px;
    }
    .name-admin {
        font-size: 24px;
        line-height: 31px;
        font-weight: 600;
        white-space: nowrap;
        overflow: hidden!important;
        text-overflow: ellipsis;
        padding-right: 15px;
        cursor: default;
    }
    .status {
        color: rgb(155, 166, 179);
        font-size: 15px;
        line-height: 19px;
        cursor: default;
    }
    .info-admin {
        display: flex;
        flex-direction: column;
        align-items: start;
        justify-content: center;
        margin-left: 10px
    }
    .content-box-chat {
        background: rgb(234, 238, 243);
        height: calc(80vh - 80px);
        width: 100%;
        border-radius: inherit;
        border-top-left-radius: 0;
        border-top-right-radius: 0;
    }
    .list-message {
        padding: 10px;
    }
`;