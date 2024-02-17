import React, { useEffect } from "react";
import { Widget, addResponseMessage } from "react-chat-widget";

function AiChatWidget() {
  useEffect(() => {
    addResponseMessage("Welcome to this awesome chat!");
  }, []);

  const handleMessage = (message) => {
    addResponseMessage(message);
  };

  return (
    <>
      <Widget
        handleNewUserMessage={handleMessage}
        title="My new awesome title"
        subtitle="And my cool subtitle"
      />
    </>
  );
}

export default AiChatWidget;
