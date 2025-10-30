import React from 'react'
import Section1 from './components/section1/Section1.jsx'
import Section2 from './components/section2/Section2.jsx'

const App = () => {

  const users = [
    {
      img: 'https://plus.unsplash.com/premium_photo-1661762823838-755f4aa584cc?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=387',
      intro: '',
      color: 'royalblue',
      tag: 'Satisfied'
    },
    {
      img: 'https://images.unsplash.com/photo-1521737711867-e3b97375f902?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fHdvcmtpbmd8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&q=60&w=500',
      intro: '',
      color: 'lightseagreen',
      tag: 'Underserved'
    },
    {
      img: 'https://plus.unsplash.com/premium_photo-1666299482116-362ad2f30cb5?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=387',
      intro: '',
      color: 'orange',
      tag: 'Underbanked'
    }
  ]


  return (
    <div>
      <Section1 users={users} />
      <Section2 />
    </div>
  )
}

export default App
