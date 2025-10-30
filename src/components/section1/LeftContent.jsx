import 'remixicon/fonts/remixicon.css'

import HeroText from './HeroText.jsx'
import Arrow from './Arrow.jsx'

const LeftContent = () => {
  return (
    <div className='h-full flex flex-col justify-between w-1/3'>
        <HeroText />
        <Arrow />
    </div>
  )
}

export default LeftContent
