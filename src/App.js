import { Route, Routes } from "react-router-dom";
import "./App.css";
import Login from "./components/Login";
import SignUp from "./components/SignUp";
import { UserAuthContextProvider } from "./context/UserAuthContext";
import ProtectedRoute from "./components/ProtectedRoute";
import Home from "./pages/Home";

function App() {
  return (
    <div className="App">
      <UserAuthContextProvider>
        <Routes>
          <Route
            path="/home"
            element={
              <ProtectedRoute>
                <Home />
              </ProtectedRoute>
            }
          />
          <Route path="/" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
        </Routes>
      </UserAuthContextProvider>
    </div>
  );
}

export default App;
