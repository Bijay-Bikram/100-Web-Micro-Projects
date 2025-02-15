import { useState, useRef, useEffect } from 'react'
import warnlogo from './assets/warn.png'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const [timer, setTimer] = useState(0)
  const shwRef = useRef()
  const clearRef = useRef()
  const warnModal = () => {
    shwRef.current.showModal()
  }

  setTimeout(() => {
    warnModal()
    clearRef.current.style.display = 'none'
  }, 3000)



  return (
    <>
      <div ref={clearRef} className='Timer text-5xl'>Wait for 3 seconds...</div>
      <dialog ref={shwRef} className='modal w-[600px] bg-white text-black rounded-lg'>
        <div className='modal-header flex justify-between items-center '>
          <p className="appWatermark px-2 py-1"> Visual Studio Code </p>
          <button type="button" onClick={() => shwRef.current.close()} className='text-2xl px-2 outline-none' >&times;</button>
        </div>


        <div className='modal-content flex  mx-4 my-6 gap-3'>
          <div className="warn-logo"><img src={warnlogo} alt="Warning" /></div>

          <div className="text text-left space-y-3">
            <div className='warn-mesg text-blue-800 w-[460px] text-[1.1rem]'>The window terminated unexpectedly reason: 'oom', code:
              '-536870904'</div>
            <div className='error-info text-[0.8rem]'>
              We are sorry for the inconvenience. You can reopen the window to continue where you left
              off.
            </div>
          </div>
        </div>


        <div className='modal-footer flex justify-between items-center px-3 py-3'>
          <div className='modal-footer-left flex items-center gap-2'>
            <input className='bg-white rounded-md p-1' type="checkbox" /><span>Don't restore editors</span>
          </div>

          <div className='modal-footer-right flex space-x-3 h-[30px] '>
            <button className='border border-gray-700 hover:border-blue-500 hover:border-2 rounded-[5px] px-4 py-[2px] text-center'>Reopen</button>
            <button type="button" onClick={() => shwRef.current.close()} className='border border-gray-700 hover:border-blue-500 hover:border-2 rounded-[5px] px-4 py-[2px] text-center'>Close</button>
          </div>
        </div>

      </dialog>
    </>
  )
}

export default App


// Todo: Unable to perform count down for displaying modal