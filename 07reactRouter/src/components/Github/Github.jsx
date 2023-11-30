import React, { useEffect, useState } from 'react'
import {useLoaderData} from 'react-router-dom'
function Github() {
    const data = useLoaderData()
    // another way without using loader
    // const [data, setData] = useState("")
    // useEffect(()=>{
    //     fetch('https://api.github.com/users/razerbotog')
    //     .then((response)=>response.json())
    //     .then((response) => {
    //         // setData(response.followers)
    //         setData(response)
    //     })
    // }, [])
  return (
    <div className='text-center m-4 bg-gray-600 text-white p-4 text-3xl'>
      Github Followers : {data.followers}
      <img src={data.avatar_url} alt="git-picture" width={300}/>
    </div>
  )
}

export default Github

export const githubInfoLoader = async () => {
    const response = await fetch('https://api.github.com/users/razerbotog')
    return response.json()
}