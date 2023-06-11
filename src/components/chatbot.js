import React from 'react';
import Chatbot from 'react-chatbot-kit';
import { createChatBotMessage } from 'react-chatbot-kit';
import config from './config';
import ActionProvider from './ActionProvider';
import MessageParser from './MessageParser';

function ChatbotComponent() {
  return (
    <div>
      <Chatbot
        config={config}
        actionProvider={ActionProvider}
        messageParser={MessageParser}
      />
    </div>
  );
}

export default ChatbotComponent;
