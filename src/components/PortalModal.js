import React from 'react'
import ReactDOM from 'react-dom'
const PortalModal =({isOpen,message,onClose})=>{
    if(!isOpen)return null
    return ReactDOM.createPortal(<div className='modal'>
        <div>
            <h2>{message}</h2>
            <button onClick={onClose}>Close</button>
        </div>
    </div>,document.getElementById('portal-root'))
}

export default PortalModal