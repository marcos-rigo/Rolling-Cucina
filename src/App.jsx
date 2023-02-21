import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import TestLuis from "./pages/TestLuis"
import TestPage from "./pages/TestPage"
import TestValentin from "./pages/TestValentin"
import TestPage2 from "./pages/TestPage2"
import Home from "./pages/Home"
import { ToastContainer } from "react-toastify"
import 'react-toastify/dist/ReactToastify.css';
import PrivateRoute from "./routes/PrivateRoute"


function App() {
  return (
  <Router>
    <Routes>
      <Route path='/*' element={<TestValentin/>} />
      <Route path='/home' element={<PrivateRoute><Home/></PrivateRoute>} />
    </Routes>
    <ToastContainer/>
  </Router>
  )
}

export default App
