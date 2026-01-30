import { SignUp } from '@clerk/nextjs'
import React from 'react'

export default function page({children}:{children:React.ReactNode}) {
  return (
    <SignUp/>
  )
}
