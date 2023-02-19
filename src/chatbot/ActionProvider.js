import React, {useEffect, useState} from 'react';

const ActionProvider = ({ createChatBotMessage, setState, children }) => {
    const baseURL = "http://4f39-68-65-175-64.ngrok.io/";
    const [res, setResponse] = useState([]);

    const createMessage = (message) => {
        fetch(`${baseURL}63f1c3bd204a04edfd5178ff/chatbot`, {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            data: {
                'input': message
            }
        })
        .then( response => {return response.json()}) 
        .then((response) => {
            setResponse(response);
        }
        );
    
        setState((prev) => ({
          ...prev,
          messages: [...prev.messages, res.message],
        }));
      };
    
  return (
    <div>
      {React.Children.map(children, (child) => {
        return React.cloneElement(child, {
          actions: {createMessage},
        });
      })}
    </div>
  );
};

export default ActionProvider;