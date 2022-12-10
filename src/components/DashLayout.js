import React from 'react'
import { Outlet } from 'react-router-dom'
import DashHeader from './DashHeader'
import DashFooter from './DashFooter'

const Dash = () => {
  return (
    <>
        <DashHeader />
        <div className="dash-container">
            <Outlet />
        </div>
        <DashFooter />
    </>
  )
}

export default Dash