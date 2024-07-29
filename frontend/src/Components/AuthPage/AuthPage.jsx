import React from 'react'
import axios from 'axios';
import { useState } from 'react';

function AuthPage(props) {

    const [loading, setLoading] = useState(false) ;

    const onSubmit = (e) => {
        console.log(e.target[0]) ;
        e.preventDefault();
        const { value } = e.target[0];
        // props.onAuth({ username: value, secret: value });
        console.log(value) ;
        
        setLoading(true) ;
        axios
        .post(`${import.meta.env.VITE_CHAT_APP_BACKEND_URI}/authenticate`, { username: value })
        .then((response) => props.onAuth({ ...response.data, secret: value }))
        .catch((e) => console.log("Auth Error", e))
        // .finally(() => setLoading(false)) ;
    };

  return (
    <div 
    className="h-[100vh] flex items-center justify-center bg-gradient-to-r from-[#222222] to-[#393939]"
    >
      <form  
      className="p-4"
      onSubmit={(e) => onSubmit(e)}
      >
        <div className="text-6xl text-white">Welcome 👋</div>

        <div className="text-white/70 text-2xl mt-2">Set a username to start the chat</div>

        <div className=" mt-5 flex flex-col py-2">
          {/* <div className="border-2 border-green-500">Username</div> */}
          <input className="text-white/80 text-1xl py-3 px-2 rounded-lg bg-gray-500 placeholder:text-white/40" name="username" placeholder='Username' />
          <button 
          className="text-lg py-3 px-4 rounded-lg mt-3 text-white bg-orange-600 hover:bg-orange-700" type="submit"
        //   onClick={(e) => onSubmit(e)}
          >
            {loading? "Loading..." : "Enter"}
          </button>
        </div>
      </form>
    </div>
  );
}

export default AuthPage
