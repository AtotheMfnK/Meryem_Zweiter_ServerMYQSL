import { useState } from 'react'
// import reactLogo from '././assets/react.svg'
import '../App.css'


function Home(){

    const [count, setCount] = useState(0)

return(
    <>
<main className="main">
{/* <div>
       <a href="https://react.dev" target="_blank">
         <img src={reactLogo} className="logo react" alt="React logo" />
       </a>
     </div> */}
     <h1>WELCOME TO MERYEMS SHOP</h1>
     <div className="card">
       <button onClick={() => setCount((count) => count + 1)}>
         count is {count}
       </button>
       {/* <p>
         Edit <code>src/App.jsx</code> and save to test HMR
       </p> */}
     </div>
     <p className="read-the-docs">
       YO THIS IS MERYYEMS MAIN SHOP PAGE 
     </p> 
     </main>
     </>
)
}
export default Home