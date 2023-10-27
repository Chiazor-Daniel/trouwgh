import React, { createContext, useContext, useEffect, useState } from 'react';


const ChatContext = createContext();

export function useChat() {
  return useContext(ChatContext);
}

export function ChatProvider({ children }) {


  return (
    <ChatContext.Provider>
      {children}
    </ChatContext.Provider>
  );
}
