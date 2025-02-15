import React from 'react';
import { useRef, useState, useEffect } from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { v4 as uuidv4 } from 'uuid';

const Manager = () => {

    const [form, setform] = useState({ site: "", username: "", password: "" })
    const showPwRef = useRef();
    const passwordRef = useRef()
    const [passwordArray, setpasswordArray] = useState([])

    const getPassword = async () => {
        let req = await fetch('http://localhost:3000/')
        let passwords = await req.json()
        setpasswordArray(passwords)
    }

    useEffect(() => {
        getPassword()
    }, [])


    const handleChange = (e) => {
        setform({ ...form, [e.target.name]: e.target.value }) // ...form => spread operator
    }


    const showPassword = () => {
        if (showPwRef.current.src.includes("public/eyecross.png")) {
            passwordRef.current.type = "password"
            showPwRef.current.src = "public/eye.png"
        }
        else {
            passwordRef.current.type = "text"
            showPwRef.current.src = "public/eyecross.png"
        }
    }


    const savePassword = async () => {
        //if any such id exist in the db then delete it
        if (form.site.length && form.username.length && form.password.length > 3) {

            if (form.id) {
                await fetch('http://localhost:3000', {
                    method: "DELETE",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify({ id: form.id }),
                })
            }

            setpasswordArray([...passwordArray, { ...form, id: uuidv4() }])
            await fetch('http://localhost:3000', {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ ...form, id: uuidv4() }),
            })
            setform({ site: "", username: "", password: "" })
        }
        else {
            toast('Error: Password not saved!')
        }
        // Queries with id of passwordArray and posted in db
    }


    const deletePassword = async (id) => {
        let conform = confirm("Are you sure?")
        if (conform) {
            setpasswordArray(passwordArray.filter(item => item.id !== id))

            let res = await fetch('http://localhost:3000', {
                method: "DELETE",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ id }),
            })
        }
        toast('Password deleted successfully')
    }


    const editPassword = async (id) => {
        setform({ ...passwordArray.filter(i => i.id === id)[0], id: id }) //Adding to form with id
        setpasswordArray(passwordArray.filter(item => item.id !== id))
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

            <div className="p-2   min-h-[85.7vh] mt-6">
                <div className=' md:mycontainer '>
                    <h1 className='text-3xl text-center font-bold text-white'>
                        <span className='text-green-500'>&lt; PW</span>
                        manager
                        <span className='text-green-500'>/&gt;</span>
                    </h1>

                    <p className='text-green-600 text-center  text-lg'>Your Own Password Manager</p>


                    {/* Form */}
                    <div className='flex flex-col justify-center items-center gap-4 text-white p-4'>
                        {/* website name */}
                        <input onChange={handleChange} name='site' value={form.site} placeholder='Enter website URL' className='rounded-full bg-transparent border border-green-700 px-4 py-1 w-full' type="text" id='site' />

                        <div className='flex lg:flex-row flex-col gap-4 w-full'>
                            {/* Username */}
                            <input onChange={handleChange} name='username' value={form.username} placeholder='Enter username' className='rounded-full bg-transparent border border-green-700 px-4 py-1 w-full' type="text" id='username' />
                            <div className="relative">
                                {/* password */}
                                <input ref={passwordRef} onChange={handleChange} name='password' value={form.password} placeholder='Enter password' className='rounded-full bg-transparent border border-green-700 px-4 py-1 w-full' type="password" id='password' />
                                <span className="absolute right-[7px] top-[5px] cursor-pointer " onClick={showPassword}>
                                    <img ref={showPwRef} className='invert p-1' width={27} src="public/eye.png" alt="Show" />
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
                </div>

                {/* Table */}
                <div className="passwords text-white w-[95vw] mx-auto">
                    <h1 className='font-bold text-2xl py-4'>Your Passwords</h1>
                    {passwordArray.length === 0 && <div>No Passwords to show</div>}
                    {passwordArray.length != 0 &&
                        <table className="table-auto w-full rounded-md overflow-hidden mb-5">

                            <thead className='bg-green-800 text-[10px] sm:text-[14px]'>
                                <tr>
                                    <th className='py-2  ml-2'>SN</th>
                                    <th className='py-2'>Site</th>
                                    <th className='py-2'>Username</th>
                                    <th className='py-2'>Password</th>
                                    <th className='py-2'>Action</th>
                                </tr>
                            </thead>

                            <tbody className='bg-green-950 text-[9px] sm:text-[14px]'>
                                {passwordArray.map((item, index) => {
                                    return <tr key={index}>
                                        {/* SN */}
                                        <td className=' text-center '>
                                            <div className='flex justify-center items-center'>
                                                <span>{index + 1}</span>
                                            </div>
                                        </td>
                                        {/* Site */}
                                        <td className='py-2  text-center hover:[--op:1] '>
                                            <div className='flex justify-center items-center '>
                                                <a href={item.site} target='_blank'>{item.site} </a>
                                                <div className='lordiconcopy size-7 cursor-pointer opacity-[var(--op)]' onClick={() => { copyText(item.site) }}>
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
                                        <td className='py-2 text-center'>
                                            <div className='flex justify-center items-center  hover:[--op:1]'>
                                                <span>{item.username}</span>

                                                <div className='lordiconcopy size-7 cursor-pointer opacity-[var(--op)]' onClick={() => { copyText(item.username) }}>
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
                                        <td className=' py-2 text-center hover:[--op:1] '>
                                            <div className='flex justify-center items-center'>
                                                <span>{"*".repeat(item.password.length)}</span>
                                                <div className=' lordiconcopy size-7 cursor-pointer opacity-[var(--op)]' onClick={() => { copyText(item.password) }}>
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
