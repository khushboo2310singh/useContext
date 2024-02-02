import React from 'react'

const Home = () => {
  const mystyle={
    theme:{
      backgroundColor:"skyblue"
    }
  }
  return (
   <>
   
   <div className='container-fluid' style={mystyle.theme}>
    <div className='row'>
      <div className='d-flex justify-content-center align-content-center'>
        <div >
            <h1>Welcome to Home</h1>
        </div>
      </div>
    </div>
   </div>
   
   </>
  )
}

export default Home