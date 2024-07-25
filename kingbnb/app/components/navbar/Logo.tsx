'use client';

import Image from "next/image";
import { useRouter } from "next/navigation";
const Logo = () => {

    const router = useRouter();

  return (
    <div className="flex items-end tracking-tighter">
      <Image
    
    alt="Logo"
    className="md:block cursor-pointer mb-3 "
    height='10'
    width='50'
    src="/Images/logo.png"/>
    {/* <h1 className="font-bold text-rose-600 font-sans  text-[40px] ml-[-5px] italic">Hotel</h1> */}
    </div>
  )
}

export default Logo