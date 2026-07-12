'use client'

import React from 'react'
import Image from 'next/image'
import NavbarLink from './NavbarLink'
import { BsTelephone} from "react-icons/bs";
import { useEffect, useState } from 'react';
import HamburgerMenu from './HamburgerMenu'
import { usePathname } from 'next/navigation';



const Navbar = () => {
    const [atTop, setAtTop] = useState(true);

  useEffect(() => {
    const onScroll = () => {
      setAtTop(window.scrollY === 0);
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
    const pathname = usePathname();

  return (
    <>
    <div className={`hidden lg:flex top-0  z-80 backdrop-blur-md items-center justify-between py-4 px-24 bg-[##121212] w-full mx-auto shadow-xl shadow-black/25 border-b border-neutral-200/30 ${atTop ? 'h-24' : 'h-20'} transition-all duration-500 ${pathname === '/' ? 'fixed' : 'sticky'}`}>
      <Image className={`hover:-translate-x-96 duration-500 delay-1000 w-auto h-full`} alt='logo domanski serwis' src="/images/logo.png" width={400} height={200} draggable={false} />
      <div className="space-x-6">
                    <NavbarLink href="/" name="Strona główna" />
                    <NavbarLink href="/aboutUs" name="O nas" />
                    <NavbarLink href="/services" name="Usługi" />
                    <NavbarLink href="/contact" name="Kontakt" />
      </div>
      <a href="tel:" className={`hover:bg-neutral-100 bg-red-600 text-neutral-100 rounded-lg ${atTop ? "h-16" : "h-12"} px-6 py-3 text-xl font-bold hover:text-red-600 duration-300 flex items-center gap-2 hover:shadow-[0_0_40px_var(--color-neutral-200)] hover:shadow-neutral-200/50`}>
        <BsTelephone className='font-extrabold text-lg' />
        Zadzwoń
        </a>

    </div>
    <div className="fixed left-0 top-0 z-80 flex w-full items-center justify-end p-4 lg:hidden">
      <HamburgerMenu />
    </div>
    </>
  )
}

export default Navbar