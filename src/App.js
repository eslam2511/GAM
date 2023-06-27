import { useEffect, useState } from 'react'
import axios from 'axios';
import Message from './components/Message';
import './style/App.css';
import { ReactComponent as SendIcon } from './send.svg';

const App = () => {
  const [inputValue, setInputValue] = useState('')
  const [Messages, setMessages] = useState([])
  const [AImessages, setAImessages] = useState([])
  const [sendbtn, setSendbtn] = useState(null);


  const insertMessage = () => {
    if (inputValue === '') return
    setMessages(prevMessages => [...prevMessages, { text: inputValue, classname: 'userMsg' }]);
    setAImessages(prevState => [...prevState, { role: "user", content: `${inputValue}` }])
  }
  
  useEffect(() => {
    const button = (
      <button className='send' onClick={insertMessage}>
        <SendIcon className='sendIcon' />
      </button>
    );
    setSendbtn(button); // Update sendbtn whenever inputValue changes
  }, [inputValue]);

  useEffect(() => {
    if (!AImessages[0]) return;
    (async () => {
      const url = 'https://gpt.eslamahmed19.repl.co/api'
      let messages = [
        { role: "system", content: "you are helpful assistant your name is GAM which stands for Genius AI Model you are developed by only one developer called eslam" },
        ...AImessages
      ]
      const response = await axios.post(url, messages)
      const data = response.data
  
      if (data) {
        setMessages(prevState => [...prevState, { text: data, classname: 'AiMsg' }])
      }
    })()
  }, [AImessages])
  

  return (
    <>
      <div className='container'>
        <header className='header'> <span className='name'>G.A.M</span> <span className='credit'>Made by Eslam</span></header>
        <div className='chat-container'>
          {Messages.map((message, index) => <Message key={index} body={message.text} classNam={message.classname} />)}
        </div>

        <div className='input'>
          <input
            className='input-field'
            placeholder='hello there...'
            value={inputValue}
            onChange={e => {setInputValue(e.target.value)
              console.log(inputValue);
            }}

          />

          {sendbtn}

        </div>

      </div>
    </>
  )
}

export default App;