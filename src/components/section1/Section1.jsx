import React from 'react'
import Navbar from './Navbar.jsx'
import Page1Content from './Page1Content.jsx'

const section1 = (props) => {

  // console.log(props);
  

  return (
    <div>
      <Navbar />
      <Page1Content users={props.users} />
    </div>
  )
}

export default section1
