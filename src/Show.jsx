
import React from 'react'
import { useContext} from 'react';
import { MyContext } from './App';
const Show = () => {
  const rec=useContext(MyContext);
  const {dispatch,state}=rec;
  const handleDel=(i)=>{
    dispatch({type:"del",payload:i})
  }
  return (
    <>
    <div>
      <div>
        {state.users.map((user,i)=>(
          <div key={i}>
            Name---{user.name}
            Age---{user.age}
            <input type="button"  value="Del" onClick={()=>handleDel(i)}/>
          </div>
        ))}
      </div>
    </div>
    </>
  )
}

export default Show