import React from 'react'
import { NavLink } from 'react-router-dom'
function AdminMenu() {
  return (
    <>
    <div className='Text-center'>
    <h1>Admin Panel</h1>
   <div className="list-group">
  <NavLink to="/dashboard/admin/create-category" className="list-group-item list-group-item-action" aria-current="true">
    Create Category
  </NavLink>
  <NavLink to="/dashboard/admin/create-product" className="list-group-item list-group-item-action">Create Product</NavLink>
  <NavLink to="/dashboard/admin/users" className="list-group-item list-group-item-action">Users</NavLink>
</div>
</div>

</>
  )
}

export default AdminMenu;