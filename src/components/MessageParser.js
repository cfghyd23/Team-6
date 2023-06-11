import { createChatBotMessage } from 'react-chatbot-kit';

const MessageParser = () => {
  const handleDefault = () => {
    return createChatBotMessage("Sorry, I didn't understand. Please choose an option.");
  };

  return { handleDefault };
}

export default MessageParser;
