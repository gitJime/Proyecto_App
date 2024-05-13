 import Login from './Login';
import Signup from './Signup';
import {BrowserRouter, Routes, Route} from 'react-router-dom' 


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/register' element={<Signup />}></Route>
        <Route path='/login' element={<Login />}></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App