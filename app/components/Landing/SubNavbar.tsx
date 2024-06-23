import Link from 'next/link'
import React from 'react'

const SubNavbar = () => {
  return (
    <div className='flex w-full items-center bg-[#55A4B2] px-5 pr-2 justify-evenly py-3 text-white'>
      <Link href={`/`}>Home</Link>
      <Link href={`/favourite`}>Favourite</Link>
      <Link href={`/vehicles`}>Vehicles</Link>
      <Link href={`/electronic `}>Electronics</Link>
      <Link href={`/funiture`}>Funiture</Link>
      <Link href={`/jobs`}>Jobs</Link>
    </div>
  )
}

export default SubNavbar