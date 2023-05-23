import React from 'react';
import { Row, Col } from 'antd';
import avatarAdmin from '../../assets/icon/admin.png'
import styled from 'styled-components';

function Message(props) {
    return (
        <MessageStyle>
            <div class="info-message">
                <img src={avatarAdmin} style={{height: 25, width: 25}}></img>
                <div class="name-user">Admin</div>
                <div class="time-sent">23/05/2023 10:10</div>
            </div>
            <div class="content-message">
                Chào mừng bạn đến với dịch vụ xem phim của chúng tôi
            </div>
        </MessageStyle>
    );
}

export default Message;
const MessageStyle = styled.div`
    .info-message {
        display: flex;
        padding: 15px;
        justify-content: start;
        align-items: center;
    }
    .name-user, .time-sent {
        margin-left: 10px;
        font-size: 14px;
        line-height: 18px;
        white-space: nowrap;
        overflow: hidden!important;
        text-overflow: ellipsis;
    }
    .info-message .name-user {
        font-weight: 600;
    }
    .info-message .time-sent {
        color: #9575CD;
    }
    .content-message {
        background: rgb(255, 255, 255);
        color: rgb(0, 0, 0);
        font-size: 16px;
        line-height: 20px;
        border-radius: 20px;
        word-wrap: break-word;
        white-space: pre-wrap;
        max-width: 100%;
        padding: 15px 17px;
    }
`;