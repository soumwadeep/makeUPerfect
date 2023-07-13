import { createContext, useState } from "react";

export const TopicContext = createContext({ topic: {}, setUser: () => {} });

export const TopicContextProvider = ({ children }) => {
  const [topic, setTopic] = useState({});
  return (
    <TopicContext.Provider value={{ topic, setTopic }}>
      {children}
    </TopicContext.Provider>
  );
};
