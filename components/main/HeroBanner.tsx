import React from 'react'

export default function HeroBanner({title}) {
  return (
    <div className="relative w-full h-[250px] bg-black flex items-center justify-center overflow-hidden">
      <h1 className="relative z-10 text-white text-5xl md:text-7xl font-semibold tracking-tight">
        {title}
      </h1>
    </div>
  )
}
