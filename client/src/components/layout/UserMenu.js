import React from 'react'
import { NavLink } from 'react-router-dom'
function UserMenu() {
  return (
    <>
    <div className='Text-center'>
    <h3>Dashboard</h3>
   <div className="list-group">
  <NavLink to="/dashboard/user/profile" className="list-group-item list-group-item-action" aria-current="true">
    Profile
  </NavLink>
  <NavLink to="/dashboard/user/orders" className="list-group-item list-group-item-action">Orders</NavLink>
</div>
</div>

</>
  )
}

export default UserMenu;