import { useEffect, useState } from "react"
import Router from './router/Router';
import PublicRoutes from "./router/routes/PublicRoute";
import { getRoutes } from "./router/routes";

function App() {
  const [allRoutes, setAllRoutes] = useState([...PublicRoutes])

// console.log(allRoutes)

useEffect(() => {
  // Fetching routes dynamically from an API
  const routes = getRoutes()
  console.log(routes)
},[])


return <Router allRoutes={allRoutes}/>

}

export default App
