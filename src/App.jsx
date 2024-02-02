import React from 'react'
import { useReducer, useContext } from 'react'
import Home from './Home';
import Save from './Save';
import Show from './Show';
import { Route, Routes, Link } from 'react-router-dom';
export const MyContext=React.createContext();
import {is, reducer} from './Reducer'
const App = () => {
 
  const[state, dispatch]=useReducer(reducer,is);
  const rec={
    state:state,
    dispatch:dispatch,
  }
  return (
   <>
    <div className='container-fluid'>
      <div className='row'>
        <div >
          <hr />
          <Link to="/" >Home</Link>&nbsp;&nbsp;&nbsp;&nbsp;
          <Link to="/Save">Save</Link>&nbsp;&nbsp;&nbsp;&nbsp;  
          <Link to="/Show">Show</Link>
          <hr />
        </div>
        <div>
          <MyContext.Provider value={rec}>
            <Routes>
              <Route path='/' element={<Home/>}/>
              <Route path='/Save' element={<Save/>}/>
              <Route path='/Show' element={<Show/>}/>
            </Routes>
          </MyContext.Provider>
        </div>
      </div>
    </div>
   </>
  )
}

export default App