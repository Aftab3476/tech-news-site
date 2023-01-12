import React from 'react'
import { useGloabalContext } from '../Context'

const Pagination = () => {
  const { page, nbPages, getPrevPage, getNextPage } = useGloabalContext()

  return (
    <>
      <div className='container'>
        <div className='row justify-content-center mb-4'>
          <div className='col-lg-5 col-md-8 col-12'>
            <div className='row justify-content-between'>
              <button className='btn btn_primary py-0 px-5' onClick={() => getPrevPage()}>  <b>PREV</b> </button>
              <p className='my-0 pt-2'>{page + 1} of {nbPages}</p>
              <button className='btn btn_primary py-0 px-5' onClick={() => getNextPage()}> <b>NEXT</b> </button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Pagination