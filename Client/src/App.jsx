import { useState } from "react"
import Router from './router/Router';
import PublicRoutes from "./router/routes/PublicRoute";

function App() {
  const [allRoutes, setAllRoutes] = useState([...PublicRoutes])

console.log(allRoutes)

  return <Router allRoutes={allRoutes}/>
}

export default App
