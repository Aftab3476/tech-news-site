import React from 'react'
import { useGloabalContext } from '../Context'


const Search = () => {
  const {query, searchPost} = useGloabalContext()
  return (
    <>
      <div className='container mt-3'>
        <div className='row justify-content-center mb-5'>
          <div className='col-lg-6 col-md-8 col-12'>
            <form action="">
              <input type="text" placeholder='Search here..' className='form-control tect_serch' value={query} onChange={(e)=> searchPost(e.target.value)} />
            </form>
          </div>
        </div>
      </div>
    </>
  )
}

export default Search