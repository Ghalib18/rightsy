import React from 'react'
import Header from "./(component)/Header"

function layout({children}) {
  return (
    <div>
       <Header/>
        <div className=" w-full ">
            {children}
        </div>
      
    </div>
  )
}

export default layout