import React from 'react';
import { useRef, useState, useEffect } from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { v4 as uuidv4 } from 'uuid';

const Manager = () => {

    const [form, setform] = useState({ site: "", username: "", password: "" })
    const ref = useRef();
    const passwordRef = useRef()
    const [passwordArray, setpasswordArray] = useState([])


    useEffect(() => {

        let passwords = localStorage.getItem("passwords");
        if (passwords) {
            setpasswordArray(JSON.parse(passwords))
        }

    }, [])


    const showPassword = () => {
        if (ref.current.src.includes("public/eyecross.png")) {
            passwordRef.current.type = "password"
            ref.current.src = "public/eye.png"
        }
        else {
            passwordRef.current.type = "text"
            ref.current.src = "public/eyecross.png"
        }
    }


    const savePassword = () => {
        if (form.site.length && form.username.length && form.password.length > 3) {
            console.log([...passwordArray, { ...form, id: uuidv4() }])
            console.log({ ...form, id: uuidv4() })
            setpasswordArray([...passwordArray, { ...form, id: uuidv4() }])
            localStorage.setItem("passwords", JSON.stringify([...passwordArray, { ...form, id: uuidv4() }]))
            //Why we haven't used passwordArray instead of [...passwordArray, form] => because passwordArray takes a time to update
            setform({ site: "", username: "", password: "" })
        }
        else {
            toast('Error: Password not saved!')
        }
    }


    const deletePassword = (id) => {
        let conform = confirm("Are you sure?")
        if (conform) {
            setpasswordArray(passwordArray.filter(item => item.id !== id))
            localStorage.setItem("passwords", JSON.stringify(passwordArray.filter(item => item.id !== id)))
        }
        toast('Password deleted successfully')
    }


    const editPassword = (id) => {
        setform(passwordArray.filter(i => i.id === id)[0])
        setpasswordArray(passwordArray.filter(item => item.id !== id))
        // localStorage.setItem("passwords", JSON.stringify([...passwordArray, { ...form, id: uuidv4() }]))
    }


    const handleChange = (e) => {
        setform({ ...form, [e.target.name]: e.target.value }) // ...form => spread operator
    }


    const copyText = (text) => {
        toast('Copied to clipboard!', {
            position: "top-right",
            autoClose: 1000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
        });
        navigator.clipboard.writeText(text)
    }

    return (
        <>
            <ToastContainer
                position="top-right"
                autoClose={1000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="dark"
            />
            {/* Same as */}
            <ToastContainer />

            {/* background */}
            <div className="absolute inset-0 -z-10 h-full w-full items-center px-5 py-24 [background:radial-gradient(125%_125%_at_50%_10%,#000_40%,#63e_100%)]"></div>

            <div className="p-2 md:mycontainer  min-h-[85.7vh] mt-6">

                <h1 className='text-3xl text-center font-bold text-white'>
                    <span className='text-green-500'>&lt; PW</span>
                    manager
                    <span className='text-green-500'>/&gt;</span>
                </h1>


                <p className='text-green-600 text-center  text-lg'>Your Own Password Manager</p>


                <div className='flex flex-col justify-center items-center gap-4 text-white p-4'>
                    {/* website name */}
                    <input onChange={handleChange} name='site' value={form.site} placeholder='Enter website URL' className='rounded-full bg-transparent border border-green-700 px-4 py-1 w-full' type="text" id='site' />

                    <div className='flex md:flex-row flex-col gap-4 w-full'>
                        {/* Username */}
                        <input onChange={handleChange} name='username' value={form.username} placeholder='Enter username' className='rounded-full bg-transparent border border-green-700 px-4 py-1 w-full' type="text" id='username' />
                        <div className="relative">
                            {/* password */}
                            <input ref={passwordRef} onChange={handleChange} name='password' value={form.password} placeholder='Enter password' className='rounded-full bg-transparent border border-green-700 px-4 py-1 w-full' type="password" id='password' />
                            <span className="absolute right-[7px] top-[5px] cursor-pointer " onClick={showPassword}>
                                <img ref={ref} className='invert p-1' width={27} src="public/eye.png" alt="Show" />
                            </span>
                        </div>
                    </div>

                    <button onClick={savePassword} className=' size-fit flex justify-center items-center gap-1 bg-green-700 rounded-full  px-4 py-2 my-3 hover:bg-green-800 border border-green-700'><lord-icon
                        src="https://cdn.lordicon.com/jgnvfzqg.json"
                        trigger="hover"
                        colors="primary:#b4b4b4"
                    >
                    </lord-icon>Save</button>

                </div>

                <div className="passwords text-white">
                    <h1 className='font-bold text-2xl py-4'>Your Passwords</h1>
                    {passwordArray.length === 0 && <div>No Passwords to show</div>}
                    {passwordArray.length != 0 &&
                        <table className="table-auto w-full rounded-md overflow-hidden mb-5">
                            <thead className='bg-green-800'>
                                <tr>
                                    <th className='py-2'>Site</th>
                                    <th className='py-2'>Username</th>
                                    <th className='py-2'>Password</th>
                                    <th className='py-2'>Action</th>
                                </tr>
                            </thead>
                            <tbody className='bg-green-950'>
                                {passwordArray.map((item, index) => {
                                    return <tr key={index}>
                                        {/* Site */}
                                        <td className='py-2  text-center '>
                                            <div className='flex justify-center items-center'>
                                                <a href={item.site} target='_blank'>{item.site} </a>
                                                <div className='lordiconcopy size-7 cursor-pointer' onClick={() => { copyText(item.site) }}>
                                                    <lord-icon
                                                        src="https://cdn.lordicon.com/xljvqlng.json"
                                                        trigger="hover"
                                                        colors="primary:#b4b4b4"
                                                        style={{ "width": "25px", "height": "25px", "paddingTop": "3px", "paddingLeft": "4px" }}

                                                    >
                                                    </lord-icon>
                                                </div>
                                            </div>
                                        </td>
                                        {/* Username */}
                                        <td className='py-2 text-center '>
                                            <div className='flex justify-center items-center'>
                                                <span>{item.username}</span>

                                                <div className='lordiconcopy size-7 cursor-pointer' onClick={() => { copyText(item.username) }}>
                                                    <lord-icon
                                                        src="https://cdn.lordicon.com/xljvqlng.json"
                                                        trigger="hover"
                                                        colors="primary:#b4b4b4"
                                                        style={{ "width": "25px", "height": "25px", "paddingTop": "3px", "paddingLeft": "4px" }}

                                                    >
                                                    </lord-icon>
                                                </div>
                                            </div>
                                        </td>
                                        {/* Password */}
                                        <td className=' py-2 text-center '>
                                            <div className='flex justify-center items-center'>
                                                <span>{item.password}</span>
                                                <div className=' lordiconcopy size-7 cursor-pointer' onClick={() => { copyText(item.password) }}>
                                                    <lord-icon
                                                        src="https://cdn.lordicon.com/xljvqlng.json"
                                                        trigger="hover"
                                                        colors="primary:#b4b4b4"
                                                        style={{ "width": "25px", "height": "25px", "paddingTop": "3px", "paddingLeft": "4px" }}
                                                    >
                                                    </lord-icon>
                                                </div>
                                            </div>
                                        </td>
                                        {/* Action */}
                                        <td className=' py-2 text-center '>
                                            <span className='cursor-pointer mx-2' onClick={() => { editPassword(item.id) }}>
                                                <lord-icon
                                                    src="https://cdn.lordicon.com/wkvacbiw.json"
                                                    trigger="hover"
                                                    colors="primary:#b4b4b4"
                                                    style={{ "width": "25px", "height": "25px" }}
                                                >
                                                </lord-icon>
                                            </span>
                                            <span className='cursor-pointer mx-2' onClick={() => { deletePassword(item.id) }}>
                                                <lord-icon
                                                    src="https://cdn.lordicon.com/skkahier.json"
                                                    trigger="hover"
                                                    colors="primary:#b4b4b4"
                                                    style={{ "width": "25px", "height": "25px" }}
                                                >
                                                </lord-icon>
                                            </span>

                                        </td>
                                    </tr>
                                })}

                            </tbody>
                        </table>
                    }
                </div>

            </div >
        </>
    )

}

export default Manager
