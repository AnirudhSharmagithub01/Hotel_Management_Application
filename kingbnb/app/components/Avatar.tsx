"use client";

import Image from 'next/image';

const Avatar = () => {
  return (
    <div>
        <Image
        alt='Avatar'
        className='hidden md:block cursor-pointer rounded-full'
        src={"/Images/placeholder.png"}
        height={'30'}
        width={'30'}
        />
    </div>
  )
}

export default Avatar