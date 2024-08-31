import React from 'react'
import { useEffect, useState } from 'react'

const Card = (info) => {

    const [card, setCard] = useState([])

    // const FetchData = async () => {
    //     let f = await fetch('https://jsonplaceholder.typicode.com/posts')
    //     let c = await f.json()
    //     setCard(c)
    // }

    // useEffect(() => {
    //     FetchData()
    // }, [])

    // OR

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(resp => resp.json())
            .then(data => setCard(data))
            .catch(err => console.log(err.message))
    }, [])

    return (
        <>
            <div className="container mx-auto flex justify-center flex-wrap">
                {card.map(item => {

                    return (<div key={item.id} className='card border-2 border-red-600 w-[300px] m-[20px] rounded-[5px] p-3'>
                        <h2 className='font-bold text-[19px]'>{item.title}</h2>
                        <p>{item.body}</p>
                    </div>)
                })}
            </div>
        </>
    )
}

export default Card
