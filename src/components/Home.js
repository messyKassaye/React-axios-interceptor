
import React,{useState} from 'react'
import AppAxios from '../axios/AppAxios';
import PortalModal from './PortalModal';

const Home =()=>{
    const [isOpen,setIsOpen] = useState(false)

    const handleClick = ()=>{
        AppAxios.get('api/9d9f2bdc4c72469b9805a3a5c88722a6/unicorns')
        .then(response=>{
            //console.log('response is null')
        })
        .catch(error=>console.log(console.error()))
    }
   return <div className="App">
      <button className="btn" onClick={()=>handleClick()}>Open modal</button>
      <PortalModal
         message={'React portal'}
         isOpen={isOpen}
         onClose={()=>setIsOpen(false)}
      />

    </div>
}

export default Home;