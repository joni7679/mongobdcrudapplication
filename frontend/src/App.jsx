import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import TodoApp from "./components/TodoApp";
import DisplayData from "./components/DisplayData";
import toast from "react-hot-toast";
import Searching from "./components/Searching";

export default function App() {
  const [createTask, setCreateTask] = useState(false)
  const [tasks, setTasks] = useState([]);
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [editData, setEditData] = useState(null)
  const [editModal, setEditModal] = useState(false);

  const fetchNotesData = async () => {
    let taskData = await fetch(`http://localhost:3000/task`);
    let res = await taskData.json();
    console.log("res", res.tasks);
    setTasks(res.tasks)
  }
  const tooglecreateNote = () => {
    setCreateTask(!createTask)
  }

  const tooglepoupu = () => {
    setEditModal(!editModal)
  }
  // post data logic here
  const postdata = async (e) => {
    e.preventDefault()
    const createTask = {
      title,
      content
    };
    if (!title) {
      toast.error(" this filled is required !")
    }
    try {
      let data = await axios.post(`http://localhost:3000/task`, createTask);
      let res = data.data;
      toast.success("post data sucessfully !")
      setCreateTask(false);
      fetchNotesData()
      setContent('');
      setTitle('')
    } catch (error) {
      console.log("error", error);
    }
  }
  //  delete logic here
  const deleteData = async (id) => {
    console.log("id", id);
    let confitm = window.confirm("Are U Sure U Went To Delete This Data")
    if (confitm) {
      try {
        let data = await axios.delete(`http://localhost:3000/task/${id}`);
        let res = data.data;
        toast.success(" Task delete sucessfully !")
        fetchNotesData()
      } catch (error) {
        console.log("error", error);
      }
    }
  }

  // update logic here
  const updateData = async (id) => {
    let notes = await axios.get(`http://localhost:3000/task/${id}`);
    let res = await notes.data.data
    console.log(" your data here", res);
    // setEditData(res)
    tooglepoupu()
    setEditData(res);
    setTitle(res.title);
    setContent(res.content);
  }

  useEffect(() => {
    fetchNotesData();
  }, [])

  return (
    <>
      <main>
        <section className=" bg-gray-100 p-6 relative min-h-screen">
          <div className="flex items-center justify-between">
            <h1 className='font-semibold  text-2xl'>Todo List app</h1>
            <button onClick={tooglecreateNote} className='px-4 py-2 bg-green-500 text-white rounded-2xl capitalize cursor-pointer'>
              Add New Task
            </button>
          </div>
          <Searching />
          <div className={`absolute w-full h-full   ${createTask ? "top-1/2" : "top-[-60%]"} left-1/2 transform  -translate-x-1/2 -translate-y-1/2 duration-150 transition-all`}>
            <div className="overly w-full h-full absolute z-10"></div>
            <div className="relative z-50">
              <TodoApp title={title} setTitle={setTitle} content={content} setContent={setContent} postdata={postdata} tooglecreateNote={tooglecreateNote} />
            </div>
          </div>
          <DisplayData tasks={tasks} deleteData={deleteData} />
        </section>
      </main>
    </>

  );
}
