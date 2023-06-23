import { useState } from 'react'
import Message from './components/Message';
import './style/App.css';
import { ReactComponent as SendIcon } from './send.svg';

const App = () => {
  const [inputValue, setInputValue] = useState('')
  const [userMessages, setUserMessages] = useState([])

  const insertMessage = () => setUserMessages([...userMessages, inputValue])
  const handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      event.preventDefault();
      setInputValue(inputValue + `\n`);
    }
  };

  return (
    <>
      <div className='container'>
        <header className='header'> <span className='name'>G.A.M</span> <span className='credit'>Made by Eslam</span></header>
        <div className='chat-container'>
          {userMessages.map(message => <Message body={message} classNam='userMsg' />)}
        </div>

        <div className='input'>
          <input
            className='input-field'
            placeholder='hello there...'
            value={inputValue}
            onChange={e => setInputValue(e.target.value)}
            onKeyDown={handleKeyPress}
            rows={4} // Specify the number of visible rows as needed
            style={{ resize: 'vertical' }} // Allow vertical resizing
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