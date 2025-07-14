  "use client"
import React, { useState } from 'react';

const Page = () => {
  const [title, settitle] = useState("")
  const [desc, setdesc] = useState("")
  const [Maintask, setMaintask] = useState([ ])
  const submithandler =(e) =>{
     e.preventDefault()
  setMaintask([...Maintask , {title  , desc}] )
      settitle("")
        setdesc("") 
        console.log(Maintask)
  }
 const deleteHandler =(i) =>{
let copytask = [...Maintask]
copytask.splice(i,1)
setMaintask(copytask)


 }
     
  let Rendertask = <h2>no task available</h2> ;
if(Maintask.length>0){
  
   Rendertask =Maintask.map( (t ,i )=>{
 return ( 
 <li  key = {i}className='flex justify-between items-center mb-5'>

  <div className='flex  justify-between  items-center  w-1/2'>
  <h5  className=' text-lg font-bold'>
    {t.title}
  </h5>
  <h6 className='text-xl font-semibold'>
    {t.desc}

  </h6>
 </div>
 <button
 onClick ={() =>{
deleteHandler(i)
 }}
  className='bg-red-400 text-white px-4 py-2 rounded font-bold'>Delete</button>
 </li>
 );
   });
}
  
  return (
   <>
   <h1 className='text-5xl bg-black text-white p-5 font-bold text-center'  >TO-DO LIST</h1>
   <form onSubmit={submithandler}>
    <input type='text' className='text-2xl  border-zinc-800  border-3 m-5 px-4 py-2' placeholder=' enter your title here'  
     value= {title}
    onChange={(e)=> {
     settitle(e.target.value)
    }}
    />
        <input type='text' className='text-2xl  border-zinc-800  border-3 m-5 px-4 py-2' placeholder=' enter description here'
        
          value= {desc}
    onChange={(e)=> {
     setdesc(e.target.value)
    }}
        />
     <button className='bg-black text-white px-4 py-2 text-2xl font-bold  rounded m-6'>Add task here</button>
     </form>
    <hr/>
    <div className='p-8  bg-slate-200'> 
       <ul>
        {Rendertask}
       </ul>
    </div>
   </>
  )
}

export default Page