import React from 'react'

const RightCardContent = (props) => {
  return (
    <div className='absolute top-0 left-0 h-full w-full p-6 flex flex-col justify-between'>
        <h2 className='bg-black text-white text-base font-semibold rounded-full h-8 w-8 flex justify-center items-center'>{props.id+1}</h2>
        <div>
            <p className='text-sm font-semibold leading-relaxed text-white mb-10 text-shadow-2xs'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos consectetur ea eaque et deleniti sapiente.</p>
            <div className='flex justify-between'>
                <button style={{backgroundColor: props.color}} className='text-white font-medium text-sm px-6 py-1 rounded-full'>{props.tag}</button>
                <button className='text-white font-medium px-2 py-1 rounded-full text-shadow-2xs'><i className="ri-arrow-right-line"></i></button>
            </div>
        </div>
    </div>
  )
}

export default RightCardContent
