import React, { useState } from 'react'
import Sidebar from '../components/Sidebar'
import RightSidebar from '../components/RightSidebar'
import ChatContainer from '../components/ChatContainer'

const Home = () => {

const [selectdUser, setSelectedUser] = useState(false)

  return (
    <div className='border w-full h-screen sm:px-[15%] sm:py-[5%]'>
        <div className={`backdrop-blur-xs border-1 border-black  rounded-2xl overflow-hidden h-[100%] grid grid-cols-1 relative ${selectdUser ? 'md:grid-cols-[1fr_1.5fr_1fr] xl:grid-cols-[1fr_2fr_1fr]' : 'md:grid-cols-2'}`}>
            <Sidebar selectedUser={selectdUser} setSelectedUser={setSelectedUser}/>
            <ChatContainer selectedUser={selectdUser} setSelectedUser={setSelectedUser}/>
            <RightSidebar selectedUser={selectdUser} setSelectedUser={setSelectedUser}/>
        </div>
    </div>
  )
}

export default Home