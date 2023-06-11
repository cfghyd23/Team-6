import React from 'react';
import { createChatBotMessage } from 'react-chatbot-kit';

const ActionProvider = (props) => {
  const { setNextMessage } = props;

  const handleDonateOption = () => {
    setNextMessage(createChatBotMessage("Great! Click here to navigate to the donation page.", { 
      widget: "donationButton" 
    }));
  };

  const handleReceiveOption = () => {
    setNextMessage(createChatBotMessage("Sure! Click here to navigate to the receiving page.", { 
      widget: "receivingButton" 
    }));
  };

  return (
    <div>
      <button onClick={handleDonateOption}>I want to donate blood</button>
      <button onClick={handleReceiveOption}>I want to receive blood</button>
    </div>
  );
}

export default ActionProvider;
