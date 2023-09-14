
import { useState } from 'react'
import './App.css'
import Bookmark from './componenet/bookmark/Bookmark'
import Cards from './componenet/card/Cards'
import { useEffect } from 'react'

function App() {
  

  const [item, setItem] = useState([])
  const [dcard, setdcard] = useState([])
  const [count, setCount] = useState(0)
  const [total, setTotal] = useState(0)
  const [credit, setCredit] = useState(0)
  const [remaing, setRemaing] = useState(0)

  useEffect(() =>{
    fetch('data.json')
    .then(res => res.json())
    .then(data => setItem(data))
  },[])

  const handleButton = cartItem =>{
    // console.log("button clicked" , card)

  const isExits = dcard.find(item => item.id === cartItem.id)
   if(isExits){
    alert('alredy booked')
    return;
   }

    const newCart = [...dcard ,cartItem]

    //  after select cart  the total amount
    let newTotal = 0;
    newCart.forEach(item =>{
     newTotal = newTotal + item.price;
    })

    let newCredit =0;
    newCart.forEach(item => {
      newCredit += item.credit_hr;
    })

    const remaings = 20 - newCredit;
    if(newCredit > 20){
      alert('you have select more then 20 credits')
      return;
    }
    
    else{
      setdcard(newCart)
      setCount(count+1);
      setTotal(newTotal)
      setCredit(newCredit)
      setRemaing(remaings)
    }

   
  }

  return (
    <div>
    <h1 className='text-center text-4xl font-bold mb-12'>Course Registration</h1>
        <div className='flex justify-evenly gap-8'>
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12'>
            {
              item.map((card,idx) => <Cards key={idx} card={card} handleButton={handleButton}></Cards>)
            }
        
          </div>
          <div className='bg-white text-center m-3'>
          <Bookmark dcard={dcard} total={total} credit={credit} remaing={remaing}/>
          </div>
     
   

        </div>
    

    
        {/* <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button> */}
     
    </div>
  )
}

export default App
