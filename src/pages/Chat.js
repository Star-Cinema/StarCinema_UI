import React, { useState } from 'react';
import styled from 'styled-components';
import BoxChat from '../components/chat/BoxChat';


function Chat(props) {
    const [showBoxChat, setShowBoxChat] = useState(false);
    return (
        <>
            {
                showBoxChat ? (<BoxChat setShowBoxChat={setShowBoxChat}/>) :
                <ButtonChat>
                    <img onClick={() => setShowBoxChat(true)} style={{ height: 60, width: 60, borderRadius: 50 }} src="https://cdn.chatbot.com/widget/61f28451fdd7c5000728b4f9/DSjjJVtWgP_jxGWP.png" className="icon-chat" />
                </ButtonChat>
            }
        </>
    );
}

export default Chat;

const ButtonChat = styled.div`
    position: fixed;
    right: 20px;
    bottom: 20px;
    cursor: pointer;
`;