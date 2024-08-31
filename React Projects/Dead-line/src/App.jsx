import { useEffect, useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import { v4 as uuidv4 } from 'uuid';
import { FaEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";

function App() {
  const [todo, setTodo] = useState("")
  const [todos, setTodos] = useState([])
  const [showFinished, setshowFinished] = useState(true)

  useEffect(() => {
    let todoString = localStorage.getItem("todos")
    if (todoString) {
      let todos = JSON.parse(localStorage.getItem("todos"))
      setTodos(todos)
    }
  }, [])

  const saveToLocalStorage = () => {
    localStorage.setItem('todos', JSON.stringify(todos))
  }


  const toggleFinished = (params) => {
    setshowFinished(!showFinished)
    saveToLocalStorage()
  }


  const handleAdd = async () => {
    setTodos([...todos, { id: uuidv4(), todo, isCompleted: false }])
    setTodo(" ")
    saveToLocalStorage()

  }

  const handleChange = (e) => {
    setTodo(e.target.value)
    saveToLocalStorage()

  }

  const handleCheckbox = (e) => {
    let id = e.target.name;
    let index = todos.findIndex(item => {
      return item.id === id;
    })
    let newTodos = [...todos];
    newTodos[index].isCompleted = !newTodos[index].isCompleted;
    setTodos(newTodos)
    saveToLocalStorage()
  }

  const handleEdit = (e, id) => {
    let t = todos.filter(item => item.id === id)
    setTodo(t[0].todo)

    let newTodos = todos.filter(item => { //Delete
      return item.id !== id
      // Filter and return items excluding item with id
    });
    setTodos(newTodos)
    saveToLocalStorage()
  }

  const handleDelete = (e, id) => {
    let newTodos = todos.filter(item => {
      return item.id !== id
      // Filter and return items excluding item with id
    });
    setTodos(newTodos)
    saveToLocalStorage()

  }

  return (
    <>
      <Navbar />
      <div className="md:container bg-green-200 mx-auto my-5 p-4 min-h-[80vh] md:w-1/2 rounded-2xl md:max-w-[800px]"  >
        <h1 className='mx-auto text-center font-bold text-2xl'>Manage your Deadlines</h1>
        {/* input todo */}
        <div className="addTodo my-5 flex flex-col gap-3">
          <label htmlFor="input" className='mx-3'>Add Todo </label>
          <div className="flex">
            <input type="text" id='input' onChange={handleChange} value={todo} className='w-full px-3 py-2 rounded-full' />
            <button onClick={handleAdd} disabled={todo.length <= 1} className='bg-violet-500 disabled:bg-red-800 hover:bg-violet-600 px-3 py-1 rounded-lg text-white mx-2 '>Add</button>

          </div>
        </div>

        <input type="checkbox" id='show' onChange={toggleFinished} checked={showFinished} />
        <label htmlFor="show" className='mx-2'>Show Finished</label>
        <div className="line my-5 h-[2px] w-[100%] mx-auto bg-black opacity-10"></div>

        <h2 className='font-bold'>Your Todos</h2>

        {/* list of todo */}
        <div className="todos ">
          {todos.length === 0 && <div className='my-[50px] text-center'>No Todos . . .</div>}
          {todos.map(item => {

            return (showFinished || !item.isCompleted) && <div key={item.id} className="todo w-3/2 flex justify-between my-4" >
              <div className='flex items-center gap-5 justify-center'>
                <input name={item.id} onChange={handleCheckbox} type="checkbox" checked={item.isCompleted} />
                <div className={item.isCompleted ? "line-through" : ""}>{item.todo}</div>
              </div>
              <div className="buttons flex ">
                <button onClick={(e) => { handleEdit(e, item.id) }} className='bg-violet-500 hover:bg-violet-600 px-3 py-1 rounded-lg text-white mx-3 h-10'><FaEdit /></button>
                <button onClick={(e) => { handleDelete(e, item.id) }} name={item.id} className='bg-violet-500 hover:bg-violet-600 px-3 py-1 rounded-lg text-white mx-3 h-10'><MdDelete /></button>
              </div>
            </div>

          })}
        </div>

      </div >
    </>
  )
}

export default App
