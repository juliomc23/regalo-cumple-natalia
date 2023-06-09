import { NavLink, Navigate, Route, Routes } from "react-router-dom";
import "./App.scss";
import { Inicio, Regalos, Regalo1, Regalo2, Secreto } from "./pages";

function App() {
  return (
    <div className="global_container">
      <header className="header">
        <nav className="navbar">
          <NavLink
            to={"/inicio"}
            className={({ isActive, isPending }) =>
              isPending ? "pending" : isActive ? "active" : ""
            }
          >
            Inicio
          </NavLink>
          <NavLink to={"/regalos"}>Regalos</NavLink>
        </nav>
      </header>
      <main className="main">
        <Routes>
          <Route path="/" element={<Navigate to={"/inicio"} />} />
          <Route path="/inicio" element={<Inicio />} />
          <Route path="/regalos" element={<Regalos />} />
          <Route path="/regalo1" element={<Regalo1 />} />
          <Route path="/regalo2" element={<Regalo2 />} />
          <Route path="/secreto" element={<Secreto />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
