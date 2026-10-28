import React from 'react'
import { TailSpin } from 'react-loader-spinner'

function Loader() {
  return (
    <div className='h-[100vh] bg-gray-100 flex justify-center items-center'>
      <TailSpin
  height="80"
  width="80"
  color="#222"
  ariaLabel="tail-spin-loading"
  radius="1"
  wrapperStyle={{}}
  wrapperClass=""
  visible={true}
/>
    </div>
  )
}

export default Loader
