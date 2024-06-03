import React, { useState, useEffect } from 'react';
import { GiftedChat } from 'react-native-gifted-chat';

const MoscaBranca = () => {
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    setMessages([
      {
        _id: 1,
        text: 'Olá!',
        createdAt: new Date(),
        user: {
          _id: 2,
          name: 'M B',
        },
      },
    ]);
  }, []);

  const onSend = (newMessages = []) => {
    setMessages((prevMessages) => GiftedChat.append(prevMessages, newMessages));
  };

  return (
    <GiftedChat
      messages={messages}
      onSend={(newMessages) => onSend(newMessages)}
      user={{
        _id: 1,
      }}
    />
  );
};

export default MoscaBranca;
