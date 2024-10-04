import { useAppStore } from '@/store/store'
import React, { useEffect } from 'react'
import { toast } from 'sonner';
import ChatContainer from './components/chat-container/ChatContainer';
import ContactsContainer from './components/contacts-container/ContactsContainer';
import EmptyChatContainer from './components/EmptyChatContainer';
import { useNavigate } from 'react-router-dom';

const Chat = () => {
  const {userInfo,selectedChatType}=useAppStore();
  const navigate=useNavigate();
  useEffect(()=>{
     
  if(!userInfo.profileSetup){
    toast("Plese setup profile to continue.");
    navigate("/profile");
  }
},[userInfo,navigate]);
  return (
    <div className='flex h-[100vh] text-white overflow-hidden'>
      <ContactsContainer/>
      {
        selectedChatType === undefined ?( <EmptyChatContainer/>) : (<ChatContainer/>)
      }
      {/* <EmptyChatContainer/> */}
      {/* <ChatContainer/> */}
      
    </div>
  )
}

export default Chat
