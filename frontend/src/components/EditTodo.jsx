import React from 'react'

const EditTodo = () => {
    return (
        <>
            <div className='px-6 md:px-12 container mx-auto flex items-center justify-center flex-col z-50 '>
                <div className="card max-w-md w-full shadow-lg rounded mt-5 p-5 bg-white">
                    <button >close</button>
                    <form action="">
                        <h1 className='font-semibold capitalize'>Update Task</h1>
                        <div className="input- mt-5">
                            <label htmlFor="">Task title</label>
                            <input type='text' placeholder='plase Enter Your Task' className='px-3 py-2 rounded shadow w-full mt-5 '
                            />
                        </div>
                        <div className="input-filled mt-5">
                            <label htmlFor="">Description</label>
                            <textarea rows={8} cols={25} className='px-3 py-2 rounded shadow w-full mt-5'

                            ></textarea>
                        </div>
                        <button className='px-4 py-2 rounded-2xl bg-blue-500 text-white capitalize text-
                        xl w-full mt-5 cursor-pointer'>Update</button>
                    </form>
                </div>
            </div>
        </>
    )
}

export default EditTodo
