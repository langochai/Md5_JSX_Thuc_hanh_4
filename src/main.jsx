import React from 'react'
import ReactDOM from 'react-dom/client'

const root = ReactDOM.createRoot(document.getElementById('root'))
const time =
    <div>
        <h1>It is {new Date().toLocaleTimeString()}.</h1>
    </div>
root.render(time)