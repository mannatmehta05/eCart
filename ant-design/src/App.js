import { memo, useCallback, useEffect, useMemo, useState } from "react";
import Header from "./Component/0auth/Header/Header";
import Route from "./Component/0auth/Router";

function App() {
  return <>
  <Route/>
  {/* <Component /> */}
  {/* <addToCart/> */}
  </>
}

export default App;
// const Child = memo(({count, handleCount})=>{
//   console.log('child rendered')
//   return <>
//   <div>

//   child component
//   <button onClick={handleCount}> oiuoiui</button>
//   </div>
//   </>
// })

// function Component(){
//   console.log('parent rendered')
//   const [count, setCount] = useState(0)
//   const [theme, setTheme] = useState(false)
//   const handleCount = useCallback(() => {
//     console.log('lkjlkj', count)
//     setCount(counti => counti + 1)
//   }, [])

//   useEffect(()=> console.log("chainginhg"),[count])
// const data = 
// useMemo(()=> {
//    return getValues()
//    }, [])
// console.log(data)
//   return <>
//   <div style={{background: theme ? "powderblue" : "red"}}>

//   Parent component { count }
//   {/* <button onClick={handleCount}> Count</button> */}
//   <Child  handleCount={handleCount}/>
//   <button onClick={()=> setTheme(!theme)} >Change Theme</button>
//   </div>
//   </>
// }

// function getValues(){
//   const now = performance.now()
//   while(performance.now() - now < 500){
    
//   }
// return 9090
// }