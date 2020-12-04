import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

export default function DemoRedux() {
    const stateCartTMDT = useSelector(state => state.CartTMDT)

    const demoDispatch = (e) => {
        // const action = addProductToCart({
        //     text1: e
        // })
        // dispatch(action)
        console.log("len roi", e)
    }
    console.log("CartTMDT", stateCartTMDT)
    return (
        <div>
            <h1>reux</h1>
            <button onClick={() => demoDispatch(1)}>clickme</button>
            <button onClick={() => demoDispatch(2)}>clickme</button>
            <button onClick={() => demoDispatch(3)}>clickme</button>
            <button onClick={() => demoDispatch(4)}>clickme</button>
        </div >
    )
}
