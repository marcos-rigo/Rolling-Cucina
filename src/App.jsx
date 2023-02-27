import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import TestLuis from "./pages/TestLuis";
import TestPage from "./pages/TestPage";
import TestValentin from "./pages/TestValentin";
import TestPage2 from "./pages/TestPage2";
import Home from "./pages/Home";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Error404 from "./pages/Error404";

import PrivateRoute from "./routes/PrivateRoute";
import Pedidos from "./pages/Pedidos";
import PedidosProvider from "./context/PedidosContext";

function App() {
  return (
    <Router>
      <PedidosProvider>
        <Routes>
          <Route path="/*" element={<Error404 />} />
          <Route path="/login" element={<TestValentin />} />
          <Route path="/" element={<TestValentin />} />
          <Route path="/pedidos" element={<Pedidos />} />
          <Route
            path="/home"
            element={
              <PrivateRoute>
                <Home />
              </PrivateRoute>
            }
          />
        </Routes>
      </PedidosProvider>
      <ToastContainer />
    </Router>
  );
}

export default App;
