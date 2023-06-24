import { useEffect, useState } from 'react'
import axios from 'axios';
import Message from './components/Message';
import './style/App.css';
import { ReactComponent as SendIcon } from './send.svg';

const App = () => {
  const [inputValue, setInputValue] = useState('')
  const [userMessages, setUserMessages] = useState([])
  const [AImessages, setAImessages] = useState([{role: "user", content: "hello there"}])
  const [AIres, setAIres] = useState([])


  const insertMessage = async () => {
    setUserMessages([...userMessages, inputValue])
    setAImessages([...AImessages, {role: "user", content: `${inputValue}`}])
  }

  useEffect(()=>{
   (async ()=>{
      const url = 'https://gpt.eslamahmed19.repl.co/api'
      let messages = [
        {role : "system", content: "you are helpful assistant your name is GAM which stands for Genius AI Model"},
        ...AImessages
      ]
      const response = await axios.post(url, messages)
      const data = response.data
      setAIres([...AIres, data])

    })()
  }, [AImessages])

  return (
    <>
      <div className='container'>
        <header className='header'> <span className='name'>G.A.M</span> <span className='credit'>Made by Eslam</span></header>
        <div className='chat-container'>
          {userMessages.map(message => <Message body={message} classNam='userMsg' />)}
          {AIres.map(message => <Message body={`${message}`} classNam='AiMsg' />)}
        </div>

        <div className='input'>
          <input
            className='input-field'
            placeholder='hello there...'
            value={inputValue}
            onChange={e => setInputValue(e.target.value)}

          />

          <button
            className='send'
            onClick={insertMessage}
          >
            <SendIcon className='sendIcon' />
          </button>

        </div>

      </div>
    </>
  )
}

export default App;