import { useState } from 'react'
import './App.css'
import { useForm } from "react-hook-form"

function App() {
  const {
    register,
    handleSubmit,
    watch,
    setError,
    formState: { errors, isSubmitting },
  } = useForm()


  const delay = (d) => {
    return new Promise((resolve, reject)=>{
      setTimeout(() => {
      resolve()
      }, d * 1000)
    })
  }
  const onSubmit = async (data) => {
    // await delay(2) // simulating network delay
    let r = await fetch("http://localhost:3000/", {method: "POST",  headers: {
      "Content-Type": "application/json", 
    }, body: JSON.stringify(data)})
    let res = await r.text()
    console.log(data, res)
  }
  return (
    <>
    {isSubmitting && <div>loading..</div>}
      <form onSubmit={handleSubmit(onSubmit)}>
        <input {...register("username")} type="text" name='username' required placeholder='username'/>
        <br />                                                                                                                       
        <input {...register("password")} type="password" name="password" required placeholder='password'/>
        <br />
        <input disabled={isSubmitting} type="submit" value="Submit" />
        {errors.myform && <div className='red'>{errors.myform.message}</div>}
        {errors.blocked && <div className='red'>{errors.blocked.message}</div>}
      </form>
    </>
  )
}

export default App
