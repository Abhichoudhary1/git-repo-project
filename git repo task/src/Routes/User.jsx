import React, { useEffect, useRef, useState } from 'react'
import Usercontainer from '../Components/Usercontainer'

const Users = () => {
  const[users,setUsers]=useState([])
  const user = useRef('')
  const baseurl = "https://api.github.com/users"
  async function Allusers(){
    const res = await fetch (baseurl)
    const data = await res.json()
    setUsers(data)
  }

  useEffect(()=>{
    Allusers()
  },[setUsers])

  async function finduser(){
     if(user.current.value !== ""){
      setUsers("")
      const res = await fetch(baseurl + "/" + user.current.value)
      const data = await res.json()
      console.log(data)
      setUsers(()=>[(data)])
      user.current.value = ""
     }else{
      Allusers()
     }
  }
  return (
    <div >
       <div className="flex justify-center h-11  my-5 items-center">
        <input
          placeholder="Search github username"
          ref={user}
          type="text"
          className="h-full md:w-1/3 outline-none text-gray-800 px-2 
          font-semibold text-lg w-2/3"
        />
        <button className="bg-teal-400 font-semibold px-4 h-full" onClick={finduser}>search</button>
        </div>
      <Usercontainer users ={users} />
    </div>
  )
}

export default Users
