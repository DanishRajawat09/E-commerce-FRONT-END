import React from 'react'
import "./sideNav.css"
import { useDispatch, useSelector } from 'react-redux'
import { isOpen } from '../../features/stateSlice'
import { NavLink } from 'react-router-dom'

const SideNavBar = () => {
  const status = useSelector((state) => state.state.open)
  const dispatch = useDispatch()

  const handleCloseSideBar = () => {
    dispatch(isOpen({ open: false }))
  }

  return (
    <>
      {status && (
        <div className="sideNavOverlay" onClick={handleCloseSideBar} aria-hidden="true" />
      )}
      <div className={status ? "sideNav sideNavOpen" : "sideNav sideNavClosed"}>
        <div className='topArea flexContainer'>
          <h1 className='icon'>shop.co</h1>
          <img className='close' src="cross.svg" alt="close" onClick={handleCloseSideBar} />
        </div>

        <div className="navArea">
          <ul className='flexContainer sideBarNav'>
            <li>
              <NavLink
                to="/"
                onClick={handleCloseSideBar}
                className={({ isActive }) => `sideNavLink ${isActive ? 'sideNavActive' : ''}`}
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/shop"
                onClick={handleCloseSideBar}
                className={({ isActive }) => `sideNavLink ${isActive ? 'sideNavActive' : ''}`}
              >
                Products
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/cart"
                onClick={handleCloseSideBar}
                className={({ isActive }) => `sideNavLink ${isActive ? 'sideNavActive' : ''}`}
              >
                Cart
              </NavLink>
            </li>
          </ul>
        </div>

        <div className="sideNavFooter">
          <div className='sideNavSearch flexContainer'>
            <img src="Search.png" alt="searchIcon" />
            <input type="text" className='sideNavSearchInput' placeholder='Search for Products...' />
          </div>
          <div className="sideNavActions flexContainer">
            <NavLink to="/cart" onClick={handleCloseSideBar}>
              <img src="cart.png" alt="Cart" />
            </NavLink>
            <img src="id.png" alt="Account" />
          </div>
        </div>
      </div>
    </>
  )
}

export default SideNavBar
