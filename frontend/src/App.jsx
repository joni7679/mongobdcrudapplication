import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import TodoApp from "./components/TodoApp";
import DisplayData from "./components/DisplayData";
import toast from "react-hot-toast";
import Searching from "./components/Searching";
import EditTodo from "./components/EditTodo";

export default function App() {
  const [loading, setLoading] = useState(false)
  const [createTask, setCreateTask] = useState(false)
  const [tasks, setTasks] = useState([]);
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [editData, setEditData] = useState(null)
  const [editModal, setEditModal] = useState(false);
  const [searchTask, setSearchTask] = useState("");

  const api = import.meta.env.VITE_BACKEND_URL;
  console.log("api", api);

  const fetchNotesData = async () => {
    let taskData = await fetch(`${api}/task`);
    let res = await taskData.json();
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
    setLoading(true)
    try {
      const data = await axios.post(`${api}/task`, createTask);
      toast.success("Task add sucessfully !")
      setCreateTask(false);
      fetchNotesData()
      setContent('');
      setTitle('')
      setLoading(false)
    } catch (error) {
      console.log("error", error);
    }
  }
  //  delete logic here
  const deleteData = async (id) => {
    const confitm = window.confirm("Are U Sure U Went To Delete This Data")
    if (confitm) {
      try {
        const data = await axios.delete(`${api}/task/${id}`);
        toast.success(" Task delete sucessfully !")
        fetchNotesData()
      } catch (error) {
        console.log("error", error);
      }
    }
  }

  // update logic here
  const updateData = async (id) => {
    let notes = await axios.get(`${api}/task/${id}`);
    let res = await notes.data.data;
    tooglepoupu()
    setEditData(res);
  }

  // complete task logic here
  const markCompleteTask = async (id) => {
    console.log("id", id);

  };

  const handleSearch = async () => {
    console.log(searchTask);
    try {
      const task = await axios.get(`${api}/task`);
      console.log("Task", task);

      const search = task.filter((val) => val.title === searchTask);
      console.log("search task", search);
    } catch (error) {
      console.log("error", error);
    }
  };


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
          <Searching searchTask={searchTask} handleTask={handleSearch} setSearchTask={setSearchTask} />
          <div className={`absolute w-full h-full   ${createTask ? "top-1/2" : "top-[-60%]"} left-1/2 transform  -translate-x-1/2 -translate-y-1/2 duration-150 transition-all`}>
            <div className="overly w-full h-full absolute z-10"></div>
            <div className="relative z-50">
              <TodoApp loading={loading} title={title} setTitle={setTitle} content={content} setContent={setContent} postdata={postdata} tooglecreateNote={tooglecreateNote} />
            </div>
          </div>
          <div className={`absolute w-full h-full   ${editModal ? "top-1/2" : "top-[-60%]"} left-1/2 transform  -translate-x-1/2 -translate-y-1/2 duration-150 transition-all`}>
            <div className="overly w-full h-full absolute z-10"></div>
            <div className="relative z-50">
              <EditTodo tooglepoupu={tooglepoupu} editData={editData} fetchNotesData={fetchNotesData} />
            </div>
          </div>
          <DisplayData markCompleteTask={markCompleteTask} tasks={tasks} deleteData={deleteData} updateData={updateData} />
        </section>
      </main>
    </>

  );
}
