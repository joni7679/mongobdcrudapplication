
import React from 'react'
const Searching = ({ searchTask, handleTask, setSearchTask }) => {
  return (
    <>
      <div className='w-full  shadow-lg h-[20vh] p-5  bg-white'>
        <p className='font-semibold text-xl'>search here</p>
        <input type='text' className='px-3 py-2 rounded shadow w-[70%] mt-5 ' value={searchTask} onChange={(e) => setSearchTask(e.target.value)} placeholder='search here' />
        <button onClick={handleTask}>search</button>
      </div>
    </>
  )
}

export default Searching
