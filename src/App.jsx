
import { useState } from 'react'
import './App.css'
import Bookmark from './componenet/bookmark/Bookmark'
import Cards from './componenet/card/Cards'
import { useEffect } from 'react'

function App() {
  // const [count, setCount] = useState(0)

  const [item, setItem] = useState([])
  useEffect(() =>{
    fetch('data.json')
    .then(res => res.json())
    .then(data => setItem(data))
  },[])

  return (
    <div>
    <h1 className='text-center text-4xl font-bold'>Course Registration</h1>
        <div className='flex justify-between'>
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12'>
            {
              item.map((card,idx) => <Cards key={idx} card={card}></Cards>)
            }
        
          </div>
          <div>
          <Bookmark />
          </div>
     
   

        </div>
    

    
        {/* <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button> */}
     
    </div>
  )
}

export default App
