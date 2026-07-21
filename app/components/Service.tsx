import React from 'react'

interface ServiceProps {
  title: string;
  icon: React.ComponentType<{ className?: string }>;
}

const Service = (props: ServiceProps) => {
    const Icon = props.icon;
    
  return (
    <div className='bg-neutral-950/60 text-red-600 group rounded-lg gap-4 p-4 lg:w-96 w-full h-72 flex flex-col justify-center items-center shadow-lg shadow-black/30 border-2 border-neutral-200/10 hover:border-red-500/80 duration-300 '>
        <Icon className='w-[100px] h-[100px] p-6 rounded-full bg-red-500/10 aspect-square block text-red-500 group-hover:bg-red-500/20 duration-500' />
        <h3 className='text-xl font-semibold mb-4 group-hover:  text-neutral-200 text-center max-w-[20ch]'>{props.title}</h3>
    </div>
  )
}

export default Service