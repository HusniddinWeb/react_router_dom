import React, { useState } from 'react'
import "./Login.css"

function Login({setName}) {
  const [ism, setIsm] = useState("")
  const [parol, setParol] = useState("")
  const onForm = (e) =>{
    e.preventDefault()
    const newUser={
      ism: ism,
      parol: parol
    }
    setName(newUser)
  }
  return (
    <div className='login'>
        <h1>Login sahifa</h1>
        <form action="" onSubmit={onForm}>
            <input type="text" placeholder='name' onChange={(e) => setIsm(e.target.value)}/>
            <input type="password" placeholder='parol' onChange={(e) => setParol(e.target.value)}/>
            <button>send</button>
        </form>
    </div>
  )
}

export default Login