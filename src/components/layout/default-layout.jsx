import React from 'react'
import Navbar from '../common/navbar'

export default function DefaultLayout({children}) {
  return (
    <>
        <Navbar />
        <div>{children}</div>
    </>
  )
}
