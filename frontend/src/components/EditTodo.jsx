import React, { useEffect, useState } from 'react'
import axios from 'axios';
import toast from 'react-hot-toast';

const EditTodo = ({ tooglepoupu, editData, fetchNotesData }) => {
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('')

    useEffect(() => {
        if (editData) {
            setTitle(editData.title)
            setContent(editData.content)
        }
    }, [editData]);

    // update data logic here...
    const updateTask = async (e) => {
        e.preventDefault();
        try {
            const update = { title, content };
            await axios.put(`http://localhost:3000/task/${editData._id}`, update);
            toast.success("Task Update Success fully !")
            fetchNotesData()
            tooglepoupu()
        } catch (error) {
            console.log("error", error);
        }
    }

    return (
        <>
            <div className='px-6 md:px-12 container mx-auto flex items-center justify-center flex-col z-50 '>
                <div className="card max-w-md w-full shadow-lg rounded mt-5 p-5 bg-white">
                    <button onClick={tooglepoupu} >close</button>
                    <form onSubmit={updateTask} action="">
                        <h1 className='font-semibold capitalize'>Update Task</h1>
                        <div className="input- mt-5">
                            <label htmlFor="">Task title</label>
                            <input type='text' placeholder='plase Enter Your Task' className='px-3 py-2 rounded shadow w-full mt-5 '
                                value={title}
                                onChange={(e) => setTitle(e.target.value)}
                            />
                        </div>
                        <div className="input-filled mt-5">
                            <label htmlFor="">Description</label>
                            <textarea rows={8} cols={25} className='px-3 py-2 rounded shadow w-full mt-5'
                                value={content}
                                onChange={(e) => setContent(e.target.value)}
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
