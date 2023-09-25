import {BrowserRouter, Routes, Route, Navigate} from 'react-router-dom'
import {TasksPage} from './pages/TasksPage'
import {TaskFormPages} from './pages/TaskFormPage'
import { ClientsPage } from "./pages/ClientsPage";
import { ClientFormPages } from "./pages/ClientsFormPage";
import { Navigation } from "./components/Navigation";
import { Toaster } from "react-hot-toast";
function App(){
  return(
    <BrowserRouter>
      <div className='container mx-auto'>
      <Navigation />
      <Routes>
        <Route path='/' element={<Navigate to="/tasks" />} />
        <Route path='/tasks' element={<TasksPage/>} />
        <Route path='/tasks-create' element={<TaskFormPages/>} />
        <Route path='/tasks/:id' element={<TaskFormPages/>} />
        <Route path='/client' element={<ClientsPage/>} />
        <Route path='/clients-create' element={<ClientFormPages/>} />
        <Route path='/client/:ci' element={<ClientFormPages/>} />
      </Routes>
      <Toaster/>
      </div>
    </BrowserRouter>
  )
}

export default App