import React, { ReactNode } from 'react'

const RootLayout = ({childern}: {childern : ReactNode}) => {
  return (
   <main>
    Navbar
    {childern}
    Footer
   </main>
  )
}

export default RootLayout;