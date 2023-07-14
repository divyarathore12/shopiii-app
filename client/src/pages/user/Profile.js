import React from 'react'
import Layout from '../../components/layout/layout'
import UserMenu from '../../components/layout/UserMenu'

const Profile = () => {
  return (
    <Layout title={"Profile-shopiii app"}>
        <div className='container-fluid m-3 p-3'>
            <div className='row'>
                <div className='col-md-3'>
                    <UserMenu></UserMenu>
                </div>
                <div className='col-md-9'>Profile</div>
            </div>
        </div>
    </Layout>
  )
}

export default Profile