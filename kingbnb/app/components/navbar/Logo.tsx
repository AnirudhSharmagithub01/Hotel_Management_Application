'use client';

import Image from "next/image";
import { useRouter } from "next/navigation";
const Logo = () => {

    const router = useRouter();

  return (
    // <div className="flex items-end tracking-tighter">
      <Image
    onClick={() => router.push('/')}
    alt="Logo"
    className="md:block cursor-pointer mb-3 "
    height='10'
    width='50'
    src="/Images/logo.png"/>
   
    // </div>
  )
}

export default Logo