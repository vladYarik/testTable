
import { Route, Routes } from 'react-router-dom'
import routes from './routes'



export default function AppRoutes() {
  return (
  
        <Routes>
            {routes.map((elem,id) => 
                <Route key={id} path={elem.path} element={elem.element} />
            )}
        </Routes>

  )
}
