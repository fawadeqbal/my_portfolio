import Link from 'next/link'
import React from 'react'
const links =[
  {path:'/', name:'home'},
  {path:'/projects', name:'my projects'},
  {path:'/contact', name:'Contact'},
]
const Nav = ({containerStyles, linkStyles, underlineStyles}) => {
  return (
    <nav className={`${containerStyles}`}>
      {links.map((link,index)=>{
        return(
          <Link href={link.path}>{link.name}</Link>
        )
      })}
    </nav>
  )
}

export default Nav