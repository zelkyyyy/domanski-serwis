import React from 'react'

const NavbarLink = (props: { name: string , href: string }) => {
  return (
    <a href={props.href} className="text-neutral-100 text-xl font-[600] hover:text-red-500 duration-200">{props.name}</a>
  )
}

export default NavbarLink