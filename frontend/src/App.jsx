
import './App.css'
import Display from './pages/Display'
import Form from './pages/Form'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
function App() {
 
  return (
    <>
    <BrowserRouter>
      <Routes>
      <Route path="/" element={<Form/>}/>
        <Route path="/display" element={<Display/>} />
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
