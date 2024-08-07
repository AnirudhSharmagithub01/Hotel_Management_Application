"use client";

import Image from 'next/image';

interface AvatarProps {
  src: string | null | undefined;
}

const Avatar:React.FC<AvatarProps> = ({
  src,
}) => {
  return (
    <div>
        <Image
        alt='Avatar'
        className='hidden md:block cursor-pointer rounded-full'
        src={src || "/Images/placeholder.png"}
        height={'30'}
        width={'30'}
        />
    </div>
  )
}

export default Avatar