import React from 'react'
import { useState, useContext, useRef ,useEffect} from 'react'
import { MyContext } from './App'

const Save = () => {
  const nm= useRef();
  useEffect(()=>{
    nm.current.focus();
  },[])
  const[data,setdata]=useState({name:"",age:""})
  const rec=useContext(MyContext);
  const {dispatch}=rec;
  const handlechange=(e)=>{
    setdata({...data,[e.target.name]:e.target.value})
  }
  const handleAdd=()=>{
    dispatch({type:"add",payload:data})
    setdata({name:"",age:""})
  }
  return (
   <>
   <input type="text" value={data.name} name='name' placeholder='Name' onChange={handlechange} ref={nm} />
   <input type="text" value={data.age} name='age' placeholder='Age' onChange={handlechange} />
   <input type="button" value="add to database" onClick={handleAdd}/>
   </>
  )
}

export default Save

