import React, { useState } from 'react';
import Sidebar from '../components/Sidebar';
import RightSidebar from '../components/RightSidebar';
import ChatContainer from '../components/ChatContainer';

const Home = () => {
  const [selectedUser, setSelectedUser] = useState(false);

  return (
    <div className="w-full h-screen px-2 py-2 sm:px-6 sm:py-4 md:px-10 md:py-6">
      <div className={`h-full rounded-2xl overflow-hidden border border-white/20 backdrop-blur-sm grid ${
        selectedUser
          ? 'md:grid-cols-[1fr_2fr_1fr]'
          : 'md:grid-cols-2'
      } grid-cols-1`}>
        <Sidebar selectedUser={selectedUser} setSelectedUser={setSelectedUser} />
        <ChatContainer selectedUser={selectedUser} setSelectedUser={setSelectedUser} />
        <RightSidebar selectedUser={selectedUser} />
      </div>
    </div>
  );
};

export default Home;
