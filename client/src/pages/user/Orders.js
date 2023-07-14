import React from 'react'
import Layout from '../../components/layout/layout'
import UserMenu from '../../components/layout/UserMenu'

const Orders = () => {
  return (
    <Layout title={"Orders-shopiii app"}>
        <div className='container-fluid p-3 m-3'>
        <div className='row'>
            <div className='col-md-3'>
                <UserMenu></UserMenu>
            </div>
            <div className='col-md-9'>All orders</div>
        </div>
        </div>
    </Layout>
  )
}

export default Orders