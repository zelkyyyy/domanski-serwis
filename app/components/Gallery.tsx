import React from 'react'

const Gallery = () => {
  const images = [
    "/images/gallery1.jpg",
    "/images/gallery2.jpg",
    "/images/gallery3.jpg"
  ]
  return (
    <div className='flex flex-col items-center justify-center w-full h-full py-24 bg-zinc-950'>
      <h2 className='text-5xl font-bold mb-16 text-neutral-200 font-sans tracking-wide'>Nasze prace</h2>
      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-8'>
        {images.map((image, index) => (
          <div key={index} className='overflow-hidden rounded-lg shadow-lg shadow-black/30 border-2 border-neutral-200/10 hover:border-red-500/80 duration-300'>
            <img src={image} loading="lazy" alt={`Gallery ${index + 1}`} className='w-full h-full object-cover transform transition-transform duration-300 hover:scale-105' />
          </div>
        ))}
      </div>
    </div>
  )
}

export default Gallery