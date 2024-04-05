import React, { useEffect, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'


const Userinfor = () => {
  const navigate = useNavigate()
  const [user, setUser] = useState([]);
  const { pathname } = useLocation()
 
  const baseurl = "https://api.github.com/users"

  async function Getuserinfo(){
    const res = await fetch(baseurl + pathname)
    const data = await res.json()
    setUser(()=>[data])

  }
  useEffect(()=>{
    Getuserinfo()
    console.log(user)
  },[pathname])
  return ( 
    <div className="py-5">
      <button
        onClick={() => navigate("/")}
        className="px-5 py-1 font-medium mx-1 my-4 bg-teal-600 rounded text-gray-200"
      >
        BACK
      </button>
   {
     user && user.map((uinfo,i)=>(
      <div key={i} className='flex justify-center md:flex-row md-px-0 px-4 flex-col gap-10'>
        <img src={uinfo?.avatar_url}   className="w-[350px] border-4 border-teal-400 md:mx-0 mx-auto" alt="" />


        <div className="text-lg leading-10 px-3">
           <h1 className="text-3xl pb-4">{uinfo.name}</h1>

           <h1>
            <span className="text-teal-400">login_name</span> : {uinfo.login}
           </h1>

           <h1>
           <span className="text-teal-400">followers :</span>  {uinfo.followers}
           </h1>
           <h1>
           <span className="text-teal-400">following :</span>  {uinfo.following}
           </h1>
           <h1>
           <span className="text-teal-400">public-repositories : </span>  {uinfo.public_repos}
           </h1>

           <h1>
           <span className="text-teal-400">join :</span> 
            {new Date(uinfo.created_at).toLocaleDateString()}
           </h1>
           <a href={uinfo.html_url} target='_blank' className="text-gray-200 font-semibold rounded cursor-pointer px-4 py-1
           bg-teal-600 my-3 tracking-wide">visit</a>
        </div>
      </div>

      
     )) 
   }
   
 
      
    </div>
  )
}

export default Userinfor
