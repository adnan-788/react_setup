import React from 'react'
import img1 from './assets/hero.png'
const FirstComponent = () => {


  return (
    <div>
      FirstComponent 2232
      <img src={img1} alt="" />
      <h1 className='bg-red-900 text-amber-400 py-6 px-4 text-2xl'>First Heading</h1>
      <button>Read More</button>
    </div>
  )
}

export default FirstComponent
