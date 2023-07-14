import React from 'react'
import Layout from '../../components/layout/layout';
import AdminMenu from '../../components/layout/adminMenu';

const CreateCategory = () => {
  return (
<Layout title={"Create Category- Shopiii app"}>
<div className='container-fluid m-3 p-3'>

        <div className='row'>
            <div className='col-md-3'>
                <AdminMenu></AdminMenu>
            </div>
            <div className='col-md-9'>
                <h1>Create Category</h1>
            </div>
        </div>
        </div>
    </Layout>

  )
}

export default CreateCategory;