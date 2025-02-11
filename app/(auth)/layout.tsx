import Logo from '@/components/Logo'
import React, { ReactNode } from 'react'

const layout = ({children}:{children : ReactNode}) => {
  return (
  <div className="flex flex-col items-center h-screen gap-4">
    <Logo/>
    {children}
  </div>
  )
}

export default layout

