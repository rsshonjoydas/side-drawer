import React, { useState } from 'react'
import Backdrop from '../components/Backdrop/Backdrop'
import SideDrawer from '../components/SideDrawer/SideDrawer'
import Toolbar from '../components/Toolbar/Toolbar'

const index = () => {
  const [sideDrawerIsOpen, setSideDrawerIsOpen] = useState(false)

  const backdropToggle = () => {
    setSideDrawerIsOpen(!sideDrawerIsOpen)
  }

  const drawerToggle = () => {
    setSideDrawerIsOpen((prevState) => !prevState)
  }

  let backdrop;

  if (sideDrawerIsOpen) {
    backdrop = <Backdrop backdropToggle={backdropToggle} />
  }

  return (
    <div style={{ height: '100%' }}>
      <Toolbar drawerToggle={drawerToggle} />
      <SideDrawer sideDrawerIsOpen={sideDrawerIsOpen} drawerToggle={drawerToggle} />
      {backdrop}
      <main style={{ marginTop: '64px' }}>
        <p>This is the main content of the paragraph.</p>
      </main>
    </div>
  )
}

export default index