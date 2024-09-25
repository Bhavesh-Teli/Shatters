import { useAppStore } from '@/store/store'
import React, { useEffect } from 'react'
import { Navigate } from 'react-router-dom';
import { toast } from 'sonner';

const Chat = () => {
  const {userInfo}=useAppStore();
  const navigate=Navigate();
  useEffect(()=>{
  if(!userInfo.profileSetup){
    toast("Plese setup profile to continue.");
    navigate("/profie");
  }
},[userInfo,navigate]);
  return (
    <div>
      hhi 
    </div>
  )
}

export default Chat
