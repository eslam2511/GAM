import { useEffect, useState, useRef  } from 'react'
import axios from 'axios';
import Message from './components/Message';
import LoadingButton from './components/LoadingButton';
import LoadingMessage from './components/LoadingMessage';
import SideMenu from './components/SideMenu';
import TopBar from './components/TopBar';
import './style/App.css';
import { ReactComponent as SendIcon } from './send.svg';

const App = () => {
  const [inputValue, setInputValue] = useState('')
  const [Messages, setMessages] = useState([])
  const [AImessages, setAImessages] = useState([])
  const [InvokAI, setInvokAI] = useState(false);
  const [loadingBtn, setLoadingBtn] = useState(false)
  const [loadingMsg, setLoadingMsg] = useState(false)
  const scrollRef = useRef(null);


  const insertMessage = () => {
    if (inputValue === '') return
    setMessages(prevMessages => [...prevMessages, { text: inputValue, classname: 'userMsg' }]);
    setAImessages(prevState => [...prevState, { role: "user", content: inputValue }])
    setInputValue('')
    InvokAI ? setInvokAI(false) : setInvokAI(true)
    setLoadingBtn(true)
    setLoadingMsg(true)
  }

  const handleInputHeight = (event) => {
    const lines = event.target.value.split('\n').length;
    if (lines <= 8) {
      if(lines === 1) return
      event.target.style.height = 'auto';
      event.target.style.height = `${event.target.scrollHeight}px`;
    }
  };

  useEffect(() => {
    if (!AImessages[0]) return;
    (async () => {
      const url = 'https://chat.eslamahmed19.repl.co/chat'
      let messages = [
        { role: "system", content: "you are helpful assistant your name is GAM which stands for Genius AI Model you are developed by only one developer called eslam" },
        ...AImessages
      ]
      try {
        const response = await axios.post(url, messages)
        const data = response.data

        if (data) {
          setMessages(prevState => [...prevState, { text: data, classname: 'AiMsg' }])
          setAImessages(prevState => [...prevState, { role: "assistant", content: data }])
          setLoadingBtn(false)
          setLoadingMsg(false)
        }
      } catch (error) {
        setMessages(prevState => [...prevState, { text: 'Error please try again later', classname: 'AiMsg' }])
        setLoadingBtn(false)
        setLoadingMsg(false)
      }
    })()
  }, [InvokAI])

  useEffect(() => {
    scrollRef.current.scrollIntoView({ behavior: 'smooth' });
  
    
  }, [Messages]);

  const button = (
    <button className='send' onClick={insertMessage}>
      <SendIcon className='sendIcon' />
    </button>
  );

  const loadingButton = <LoadingButton />

  return (
    <>
    <SideMenu />
      <div className='container'>
        <TopBar />
        <div className='fix-topBar'> fix top bar</div>
        <div className='chat-container'>
          {Messages.map((message, index) => <Message key={index} body={message.text} classNam={message.classname} />)}
          {loadingMsg ? <LoadingMessage /> : <></>}
          <div ref={scrollRef} ></div>
        </div>

        <div className='input'>
          <textarea
            className='input-field'
            placeholder='hello there...'
            value={inputValue}
            onChange={e => {
              setInputValue(e.target.value)
              handleInputHeight(e)
            }}
            onBlur={e=> e.target.style.height = `40px`}
            type='text'
          />

          {loadingBtn ? loadingButton : button}

        </div>

      </div>
    </>
  )
}

export default App;