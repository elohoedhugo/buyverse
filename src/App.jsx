import './App.css'
import CategoryInfo from './components/pages/CategoryInfo'
import Home from './components/pages/Home'
import { createBrowserRouter, Route, RouterProvider,  createRoutesFromElements } from 'react-router-dom'
import RootLayout from './components/RootLayout'

function App() {
   
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path='/' element={<RootLayout/>}>
        <Route index element={<Home/>}/>
        <Route path='/category/:categoryName' element={<CategoryInfo/>}/>
        <Route path="/category/:categoryName/:subCategoryName?" element={<CategoryInfo/>}/>
      </Route>
    )
  )
  return(
   <div>
    <RouterProvider router = {router}/>
   </div>
  )
}

export default App
