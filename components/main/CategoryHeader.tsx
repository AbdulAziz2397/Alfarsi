import DividerIcon from '@/public/assets/icons/DividerIcon'
import React from 'react'

export default function CategoryHeader({ title, subtitle }) {
    return (
        <div className="flex flex-col items-center justify-center py-8 md:py-12 xl:py-16 px-4 bg-white text-center">
            {/* Subtitle */}
            <span className="text-gray-400 tracking-[0.2em] text-[10px] md:text-xs mb-3 font-medium">
                {subtitle}
            </span>

            {/* Main Title */}
            <h1 className="text-[#002b36] text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight mb-6">
                {title}
            </h1>

            {/* Decorative Divider */}
            <div className="flex items-center justify-center w-full max-w-[300px] gap-4">
                <DividerIcon />
            </div>
        </div>
    )
}
