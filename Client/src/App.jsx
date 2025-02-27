import { useEffect, useState } from "react"
import Router from './router/Router';
import PublicRoutes from "./router/routes/PublicRoute";
import { getRoutes } from './router/routes/index';



function App() {
  const [allRoutes, setAllRoutes] = useState([...PublicRoutes])

// console.log(allRoutes)

useEffect(() => {
  const routes = getRoutes()
  // console.log(routes)
  setAllRoutes([...allRoutes, routes])
},[])


return <Router allRoutes={allRoutes}/>

}

export default App
